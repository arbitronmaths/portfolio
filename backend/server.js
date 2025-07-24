const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://utakarsh15904:yJbWqHMnKe4JTcxe@portfoliocluster.fn8l7yk.mongodb.net/Connect?retryWrites=true&w=majority&appName=PortfolioCluster', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});

const User = mongoose.model('User', userSchema);

//API Working Properly
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching weights' });
  }
});

app.post('/users', async (req, res) => {
  console.log('Received POST request:', req.body);
  const { name, email, message } = req.body;
  console.log('Received:', { name, email, message });
  if (!name || !email) {
    return res.status(400).json({ error: 'name and email are required' });
  }

  try {
    const newUser = new User({ name, email, message });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: 'Error saving user' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


