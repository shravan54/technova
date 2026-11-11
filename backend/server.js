require("dotenv").config();

const express = require("express");
const cors = require("cors");

const { createClient } = require("@supabase/supabase-js");

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL
}));

app.use(express.json({ limit: "10kb" }));

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

app.get("/", (req, res) => {
  res.send("TechNova API is running!");
});

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !email.includes("@") ||
      !message.trim()
    ) {
      return res.status(400).json({
        message: "Please provide valid contact information."
      });
    }

    const { error } = await supabase
      .from("contacts")
      .insert([{
        name: name.trim(),
        email: email.trim(),
        message: message.trim()
      }]);

    if (error) throw error;

    res.status(201).json({
      message: "Your message was saved successfully!"
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Unable to process your request."
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});