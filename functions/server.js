const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const serverless = require('serverless-http');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const router = express.Router();

router.post('/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: email,
      to: 'bimgenix@gmail.com',
      subject: `BIMgenix Contact: ${subject}`,
      text: `From: ${name} (${email})\n\n${message}`
    });

    res.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to send message.' });
  }
});

app.use('/.netlify/functions/server', router); // Fixed path for Netlify Functions
app.use('/api', router); // Keep /api for convenience or local testing

if (process.env.NODE_ENV !== 'production') {
  const PORT = 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports.handler = serverless(app);

