const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// 🔹 Email sending route
app.post("/send", async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  try {
    // Gmail / SMTP transporter setup
    let transporter = nodemailer.createTransport({
      service: "gmail", // अगर Gmail use कर रहे हो
      auth: {
        user: "hw81223@gmail.com", // 👉 अपना Gmail ID डालो
        pass: "qqml ahek ktsm wrin", // 👉 App Password डालो (normal password मत डालना)
      },
    });

    // Mail options
    let mailOptions = {
      from: email,
      to: "hw81223@gmail.com", // 👉 जहाँ mail receive करना है
      subject: subject || "New Portfolio Contact Form Message",
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
    };

    // Send mail
    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: "Message Sent Successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.json({ success: false, message: "Something went wrong" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
