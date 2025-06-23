import nodemailer from "nodemailer";

export async function POST(request) {
  const body = await request.json();
  const { name, email, message } = body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.MY_EMAIL,
      subject: "New message from your portfolio site 💌",
      text: `${name} (${email}) says:\n\n${message}`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Email send failed:", error);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}
