import { useDispatch } from 'react-redux';
import { addPhoto, resetAllPhotos } from '../../redux/slices/photoSlice.js';
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
        <button type="button" onClick={handleAddRandomPhoto}>
          Get Photos
        </button>
        <button
          type="button"
          className="btn-red"
          onClick={handleResetAllPhotos}
        >
          Reset All
        </button>
      </div>
      <hr />
    </>
  );
};

export default GalleryBar;
