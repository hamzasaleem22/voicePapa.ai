import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API route for booking a demo
  app.post("/api/book-demo", async (req, res) => {
    const { name, email, phone, package: selectedPackage, requestType, message } = req.body;

    // Create a transporter (using a placeholder for real SMTP)
    // In a real app, you'd use process.env.SMTP_HOST, etc.
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'hamzasaleem15793@gmail.com',
        pass: process.env.EMAIL_PASS || 'mnhu pygj dltl ervg' // Updated with provided app password
      }
    });

    const mailOptions = {
      from: `"voicePapa.ai Demo" <${process.env.EMAIL_USER || 'hamzasaleem15793@gmail.com'}>`,
      to: 'hamzasaleem15793@gmail.com',
      subject: `New ${requestType} Request: ${name}`,
      text: `
        New Demo Booking Request:
        -------------------------
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Package: ${selectedPackage}
        Request Type: ${requestType}
        Message: ${message}
        
        API Key (for reference): AIzaSyC8ESaryuQ4IlgLGdP8hekRBJZ1JsHvxK8
      `,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333; line-height: 1.6;">
          <h2 style="color: #00F5FF; border-bottom: 2px solid #00F5FF; padding-bottom: 10px;">New ${requestType} Request</h2>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 10px; margin-top: 20px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Package:</strong> ${selectedPackage}</p>
            <p><strong>Request Type:</strong> <span style="background: #00F5FF; color: black; padding: 2px 8px; border-radius: 4px; font-weight: bold;">${requestType}</span></p>
          </div>
          <div style="margin-top: 20px;">
            <h3 style="color: #8B5CF6;">Message / Requirements:</h3>
            <p style="background: #f0f0f0; padding: 15px; border-radius: 8px; font-style: italic;">${message || 'No message provided.'}</p>
          </div>
          <hr style="margin-top: 30px; border: 0; border-top: 1px solid #eee;" />
          <p style="font-size: 12px; color: #666;">Received on ${new Date().toLocaleString()}</p>
        </div>
      `
    };

    try {
      // Log the request
      console.log("Demo Booking Request Received:", req.body);
      
      // Attempt to send the mail
      await transporter.sendMail(mailOptions);
      
      res.status(200).json({ message: "Demo request sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      // Even if mail fails, we return success for the demo if we want to mock it
      // But let's return error to be honest about the state
      res.status(500).json({ error: "Failed to send demo request." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
