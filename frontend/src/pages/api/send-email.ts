export const prerender = false;

import type { APIRoute } from "astro";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

// Esquema de validacion
const contactSchema = z.object({
  name: z.string().min(2, "El nombre es muy corto"),
  email: z.string().email("Email inválido"),
  company: z.string().optional(),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    
    // Validar datos con Zod
    const result = contactSchema.safeParse(body);
    
    if (!result.success) {
      return new Response(JSON.stringify({ 
        error: "Datos inválidos", 
        details: result.error.format() 
      }), { status: 400 });
    }

    const { name, email, company, message } = result.data;

    // Enviar correo con Resend
    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', 
      to: ['diazalexda2@gmail.com'], 
      subject: `Nuevo mensaje de ${name} ${company ? `- ${company}` : ''}`,
      html: `
        <h1>Nuevo Contacto desde la Web</h1>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Empresa:</strong> ${company || 'N/A'}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
      replyTo: email,
    });

    if (data.error) {
      return new Response(JSON.stringify({ error: data.error }), { status: 500 });
    }

    return new Response(JSON.stringify({ message: "Nos pondremos en contacto en las proximas 24h." }), { status: 200 });

  } catch (error) {
    return new Response(JSON.stringify({ error: "Error interno del servidor" }), { status: 500 });
  }
};