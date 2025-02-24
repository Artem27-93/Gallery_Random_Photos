import { useDispatch } from 'react-redux';
import { addPhoto, resetAllPhotos } from '../../redux/slices/photoSlice.js';
import { Button } from 'react-bootstrap';
import createPhotoWithId from '../../utils/createPhotoWithId.js';
import data from '../../data/data.json';
import './GalleryBar.css';

const GalleryBar = () => {
  const dispatch = useDispatch();
  const handleAddRandomPhoto = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomPhoto = data[randomIndex];

    dispatch(addPhoto(createPhotoWithId(randomPhoto)));
  };

  const handleResetAllPhotos = () => {
    dispatch(resetAllPhotos());
  };

  return (
    <>
      <div className="gallery-bar">
        <div className="wrapper-bar-btns">
          <Button variant="success" onClick={handleAddRandomPhoto}>
            Get Photos
          </Button>
          <Button variant="danger" onClick={handleResetAllPhotos}>
            Reset All
          </Button>
        </div>
      </div>
      <hr />
    </>
  );
};

export default GalleryBar;
