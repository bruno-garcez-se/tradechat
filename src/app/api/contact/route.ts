import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { nome, email, telefone, empresa, mensagem, to } = body

    // Configurar o transporter do nodemailer
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      tls: {
        rejectUnauthorized: false
      }
    })

    // Verificar a conexão
    try {
      await transporter.verify()
      console.log('Conexão com servidor SMTP verificada com sucesso')
    } catch (error) {
      console.error('Erro na verificação do SMTP:', error)
      throw new Error('Falha na conexão com servidor de email')
    }

    // Configurar o e-mail
    const mailOptions = {
      from: `"Kanzap Site" <${process.env.EMAIL_USER}>`,
      to: to,
      subject: `Novo contato do site - ${nome}`,
      html: `
        <h2>Novo contato do site</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone || 'Não informado'}</p>
        <p><strong>Empresa:</strong> ${empresa || 'Não informada'}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${mensagem}</p>
      `
    }

    console.log('Tentando enviar email para:', to)

    // Enviar o e-mail
    const info = await transporter.sendMail(mailOptions)
    console.log('Email enviado com sucesso:', info.messageId)

    return NextResponse.json({ 
      message: 'E-mail enviado com sucesso!',
      messageId: info.messageId 
    })
  } catch (error) {
    console.error('Erro detalhado ao enviar e-mail:', error)
    return NextResponse.json(
      { 
        error: 'Erro ao enviar e-mail',
        details: error instanceof Error ? error.message : 'Erro desconhecido'
      },
      { status: 500 }
    )
  }
} 