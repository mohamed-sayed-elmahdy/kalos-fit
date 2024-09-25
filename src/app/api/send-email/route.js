import nodemailer from 'nodemailer';

export async function POST(request) {
  const { firstName, lastName, phone, email, message } = await request.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER, // Your Gmail email
      pass: process.env.GMAIL_PASS, // Your Gmail password or App password
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.GMAIL_USER,
    subject: `New message from Kalos-fit Client`,
    text: `
      First Name: ${firstName}
      Last Name: ${lastName}
      Phone: ${phone}
      Email: ${email}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}
