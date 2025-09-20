const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Routes
const projectRoutes = require('./routes/projectRoutes');
app.use('/api/projects', projectRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// MongoDB connect & server start
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(process.env.PORT || 5000, () => 
      console.log(`✅ Server running on http://localhost:${process.env.PORT || 5000}`)
    );
  })
  .catch(err => {
    console.error("❌ MongoDB connection error:", err);
  });
