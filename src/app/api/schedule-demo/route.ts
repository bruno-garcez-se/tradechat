import { google } from 'googleapis'
import { NextResponse } from 'next/server'

const calendar = google.calendar({
  version: 'v3',
  auth: new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/calendar'],
  }),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, company, preferredDate, preferredTime } = body

    const dateTime = new Date(`${preferredDate}T${preferredTime}`)
    const endDateTime = new Date(dateTime.getTime() + 60 * 60 * 1000) // 1 hora de duração

    const event = {
      summary: `Demonstração Kanzap - ${company}`,
      description: `
        Nome: ${name}
        Email: ${email}
        Telefone: ${phone}
        Empresa: ${company}
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
        { email },
        { email: process.env.GOOGLE_CALENDAR_EMAIL }, // Email do calendário que receberá os eventos
      ],
      conferenceData: {
        createRequest: {
          requestId: `demo-${Date.now()}`,
          conferenceSolutionKey: { type: 'hangoutsMeet' },
        },
      },
    }

    const response = await calendar.events.insert({
      calendarId: process.env.GOOGLE_CALENDAR_ID,
      requestBody: event,
      conferenceDataVersion: 1,
    })

    return NextResponse.json({ 
      success: true, 
      meetLink: response.data.hangoutLink 
    })
  } catch (error) {
    console.error('Erro ao agendar demonstração:', error)
    return NextResponse.json(
      { error: 'Erro ao agendar demonstração' },
      { status: 500 }
    )
  }
} 