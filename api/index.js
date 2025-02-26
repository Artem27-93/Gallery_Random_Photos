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

function getRandomPhotos(num) {
  const randomPhotos = [];
  for (let i = 0; i < num; i++) {
    let randomIndex = Math.floor(Math.random() * photosData.length);
    let randomPhoto = photosData[randomIndex];
    randomPhotos.push(randomPhoto);
  }

  return randomPhotos;
}

app.get('/random-photo', (req, res) => {
  res.json(getRandomPhoto());
});

app.get('/random-photo-delayed', (req, res) => {
  setTimeout(() => {
    res.json(getRandomPhoto());
  }, 2000);
});

app.get('/random-photos-delayed', (req, res) => {
  setTimeout(() => {
    res.json(getRandomPhotos(8));
  }, 1000);
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
