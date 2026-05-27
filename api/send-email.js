import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Дозволяємо лише POST запити
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Метод не дозволено' });
  }

  const { name, phone } = req.body;

  if (!name || !phone) {
    return res.status(400).json({ message: 'Всі поля обов\'язкові' });
  }

  // Налаштування транспорту для ukraine.com.ua
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'mail.adm.tools',
    port: parseInt(process.env.SMTP_PORT || '465', 10),
    secure: true, // true для 465 порту, false для інших
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: `"Сайт Inhort" <${process.env.SMTP_USER}>`, // Відправник (повинен співпадати з SMTP_USER)
      to: process.env.RECEIVER_EMAIL || process.env.SMTP_USER, // Отримувач (можна вказати інший)
      subject: "Нова заявка: Дізнатися ціну",
      text: `Ім'я: ${name}\nТелефон: ${phone}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2>Нова заявка з сайту (Дізнатися ціну)</h2>
          <p><strong>Ім'я:</strong> ${name}</p>
          <p><strong>Телефон:</strong> ${phone}</p>
        </div>
      `,
    });

    console.log("Message sent: %s", info.messageId);
    return res.status(200).json({ success: true, message: 'Лист успішно відправлено' });
  } catch (error) {
    console.error("Помилка відправки листа:", error);
    return res.status(500).json({ 
      success: false, 
      message: 'Помилка при відправці листа', 
      error: error.message 
    });
  }
}
