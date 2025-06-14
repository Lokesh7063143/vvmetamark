import { Resend } from 'resend';

const resend = new Resend('re_5Yy9H5MM_Ghd5hwftGswJCwgMdSjmxRpv');

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end('Method Not Allowed');

  const { name, email, subject, message } = req.body;

  try {
    await resend.emails.send({
      from: 'VV Metamark <noreply@yourdomain.com>',
      to: ['vvmetamark@gmail.com', email],
      subject: 'VV Metamark - New Contact Form Submission',
      html: `
        <h2>New Message from ${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to send email' });
  }
}
