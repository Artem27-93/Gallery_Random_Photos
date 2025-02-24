const express = require('express');
const cors = require('cors');
const photosData = require('./data/data.json'); // Import the photos data

const app = express();
app.use(cors());

function getRandomPhoto() {
  const randomIndex = Math.floor(Math.random() * photosData.length);
  const randomPhoto = photosData[randomIndex];
  return randomPhoto;
}

app.get('/random-photo', (req, res) => {
  res.json(getRandomPhoto());
});

app.get('/random-photo-delayed', (req, res) => {
  setTimeout(() => {
    res.json(getRandomPhoto());
  }, 2000);
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
