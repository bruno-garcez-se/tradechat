import { google } from 'googleapis'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, phone, preferredDate, preferredTime } = body

    // Validar campos obrigatórios
    if (!name || !phone || !preferredDate || !preferredTime) {
      console.error('Campos obrigatórios faltando:', { name, phone, preferredDate, preferredTime })
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      )
    }

    // Verificar variáveis de ambiente
    const requiredEnvVars = [
      'GOOGLE_CLIENT_EMAIL',
      'GOOGLE_PRIVATE_KEY',
      'GOOGLE_CALENDAR_EMAIL'
    ]

    for (const envVar of requiredEnvVars) {
      if (!process.env[envVar]) {
        console.error(`Variável de ambiente ${envVar} não encontrada`)
        return NextResponse.json(
          { error: 'Erro de configuração do servidor' },
          { status: 500 }
        )
      }
    }

    // Configurar cliente do Google Calendar
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/calendar'],
    })

    const calendar = google.calendar({ version: 'v3', auth })

    // Criar objeto do evento
    const event = {
      summary: `Demonstração Kanzap - ${name}`,
      description: `Demonstração do Kanzap\n\nNome: ${name}\nTelefone: ${phone}`,
      start: {
        dateTime: `${preferredDate}T${preferredTime}:00`,
        timeZone: 'America/Sao_Paulo',
      },
      end: {
        dateTime: `${preferredDate}T${preferredTime.split(':')[0]}:${String(
          parseInt(preferredTime.split(':')[1]) + 30
        ).padStart(2, '0')}:00`,
        timeZone: 'America/Sao_Paulo',
      },
      attendees: [
        { email: process.env.GOOGLE_CALENDAR_EMAIL },
      ],
      conferenceData: {
        createRequest: {
          requestId: `kanzap-demo-${Date.now()}`,
          conferenceSolutionKey: { type: 'hangoutsMeet' },
        },
      },
    }

    try {
      const response = await calendar.events.insert({
        auth: auth,
        calendarId: process.env.GOOGLE_CALENDAR_EMAIL,
        conferenceDataVersion: 1,
        requestBody: event,
      })

      console.log('Evento criado:', response.data)
      
      return NextResponse.json(
        { message: 'Demonstração agendada com sucesso!' },
        { status: 200 }
      )
    } catch (error: any) {
      console.error('Erro ao criar evento:', error.message)
      console.error('Detalhes do erro:', error.response?.data)
      
      return NextResponse.json(
        { error: 'Erro ao agendar demonstração. Por favor, tente novamente.' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Erro na requisição:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
} 