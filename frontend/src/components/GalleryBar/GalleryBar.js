import { useDispatch } from 'react-redux';
import { addPhoto } from '../../redux/slices/photoSlice.js';
import createPhotoWithId from '../../utils/createPhotoWithId.js';
import data from '../../data/data.json';
import './GalleryBar.css';

const GalleryBar = () => {
  const dispatch = useDispatch();
  const handleAddRandomPhoto = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomPhoto = data[randomIndex];
    console.log(randomPhoto);

    dispatch(addPhoto(createPhotoWithId(randomPhoto)));
  };

  return (
    <div className="gallery-bar">
      <button type="button" onClick={handleAddRandomPhoto}>
        GetPhotos
      </button>
    </div>
  );
};

export default GalleryBar;
