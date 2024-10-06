require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/public/uploads', express.static('uploads')); // Serve static files from uploads directory

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define Report Schema
const ReportSchema = new mongoose.Schema({
  reporterName: String,
  mobileNumber: String,
  dateOfIncident: Date,
  timeOfIncident: String,
  locationOfIncident: String,
  description: String,
  impactOnWomen: String,
  numberOfPeopleAffected: Number,
  waterSourceType: String,
  estimatedWaterLoss: Number,
  actionsTaken: String,
  assistanceNeeded: String,
  photos: [String], // Array of file paths for photos
  videos: [String], // Array of file paths for videos
  documents: [String], // Array of file paths for documents
  createdAt: { type: Date, default: Date.now }
});

const Report = mongoose.model('Report', ReportSchema);

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads'); // Save files in the uploads directory
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Append timestamp to the file name
  }
});

const upload = multer({ storage });

// API Routes
app.post('/api/reports', upload.fields([{ name: 'photos', maxCount: 10 }, { name: 'videos', maxCount: 10 }, { name: 'documents', maxCount: 10 }]), async (req, res) => {
  try {
    const newReport = new Report({
      ...req.body,
      photos: req.files['photos'] ? req.files['photos'].map(file => file.path) : [],
      videos: req.files['videos'] ? req.files['videos'].map(file => file.path) : [],
      documents: req.files['documents'] ? req.files['documents'].map(file => file.path) : [],
    });
    await newReport.save();
    res.status(201).json({ message: 'Report submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting report', error });
  }
});

app.get('/api/reports', async (req, res) => {
  try {
    const reports = await Report.find().sort({ createdAt: -1 });
    res.json(reports);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching reports', error });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
