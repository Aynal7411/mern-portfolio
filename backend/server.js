const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');


dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});
const projectRoutes = require('./routes/projectRoutes');
app.use('/api/projects', projectRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  app.listen(process.env.PORT || 5000, () => 
    console.log(`✅ Server running on http://localhost:${process.env.PORT || 5000}`)
  );
})
.catch(err => console.log('❌ MongoDB connection error:', err));