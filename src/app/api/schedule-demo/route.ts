import { google } from 'googleapis'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    // Log das variáveis de ambiente (sem expor a chave privada)
    console.log('Verificando configurações:')
    console.log('GOOGLE_CLIENT_EMAIL:', process.env.GOOGLE_CLIENT_EMAIL)
    console.log('GOOGLE_CALENDAR_ID:', process.env.GOOGLE_CALENDAR_ID)
    console.log('GOOGLE_CALENDAR_EMAIL:', process.env.GOOGLE_CALENDAR_EMAIL)
    console.log('GOOGLE_PRIVATE_KEY está definida:', !!process.env.GOOGLE_PRIVATE_KEY)
    
    if (!process.env.GOOGLE_CLIENT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY || !process.env.GOOGLE_CALENDAR_ID) {
      console.error('Variáveis faltando:', {
        hasClientEmail: !!process.env.GOOGLE_CLIENT_EMAIL,
        hasPrivateKey: !!process.env.GOOGLE_PRIVATE_KEY,
        hasCalendarId: !!process.env.GOOGLE_CALENDAR_ID
      })
      throw new Error('Variáveis de ambiente necessárias não configuradas')
    }

    const body = await request.json()
    console.log('Dados recebidos:', {
      ...body,
      phone: '******' // Ocultando o telefone por segurança
    })

    const { name, phone, preferredDate, preferredTime } = body

    // Validação dos dados
    if (!name || !phone || !preferredDate || !preferredTime) {
      console.error('Dados inválidos:', { name: !!name, phone: !!phone, preferredDate: !!preferredDate, preferredTime: !!preferredTime })
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      )
    }

    console.log('Iniciando configuração do cliente Google Calendar')
    
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/calendar'],
    })

    console.log('Auth configurado, iniciando cliente do Calendar')

    const calendar = google.calendar({ version: 'v3', auth })

    const dateTime = new Date(`${preferredDate}T${preferredTime}`)
    const endDateTime = new Date(dateTime.getTime() + 60 * 60 * 1000) // 1 hora de duração

    console.log('Criando evento para:', {
      date: dateTime.toISOString(),
      timezone: 'America/Sao_Paulo'
    })

    const event = {
      summary: `Demonstração Kanzap - ${name}`,
      description: `
        Nome: ${name}
        Telefone: ${phone}
      `,
      start: {
        dateTime: dateTime.toISOString(),
        timeZone: 'America/Sao_Paulo',
      },
      end: {
        dateTime: endDateTime.toISOString(),
        timeZone: 'America/Sao_Paulo',
      },
      attendees: [
        { email: process.env.GOOGLE_CALENDAR_EMAIL },
      ],
      conferenceData: {
        createRequest: {
          requestId: `demo-${Date.now()}`,
          conferenceSolutionKey: { type: 'hangoutsMeet' },
        },
      },
    }

    console.log('Tentando inserir evento no calendário')

    const response = await calendar.events.insert({
      calendarId: process.env.GOOGLE_CALENDAR_ID,
      requestBody: event,
      conferenceDataVersion: 1,
    })

    console.log('Evento criado com sucesso:', response.data.htmlLink)

    return NextResponse.json({ 
      success: true, 
      meetLink: response.data.hangoutLink,
      eventLink: response.data.htmlLink
    })
  } catch (error) {
    console.error('Erro detalhado:', error instanceof Error ? {
      message: error.message,
      stack: error.stack
    } : error)
    
    return NextResponse.json(
      { 
        error: 'Erro ao agendar demonstração',
        details: error instanceof Error ? error.message : 'Erro desconhecido'
      },
      { status: 500 }
    )
  }
} 