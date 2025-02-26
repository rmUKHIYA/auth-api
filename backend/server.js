require('dotenv').config();
const express = require('express');
const { connectDB, sequelize } = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to Database
connectDB();

// Ensure database schema updates without dropping tables
sequelize.sync({ alter: true })
  .then(() => console.log('✅ Database synchronized'))
  .catch((error) => console.error('❌ Database sync error:', error));

// Test API to check if server is running
app.get('/', (req, res) => {
  res.send('✅ Server is running...');
});

// API Routes
app.use('/api/auth', authRoutes);

// Handle 404 errors
app.use((req, res) => {
  res.status(404).json({ error: '❌ Route not found' });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
