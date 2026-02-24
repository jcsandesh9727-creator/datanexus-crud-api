require("dotenv").config();   // 1️⃣ Load .env variables

const mongoose = require("mongoose");
const app = require("./app");

// 2️⃣ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully");

    // 3️⃣ Start server ONLY after DB connects
    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  })
  .catch((err) => {
    console.error("MongoDB Connection Failed:", err.message);
  });