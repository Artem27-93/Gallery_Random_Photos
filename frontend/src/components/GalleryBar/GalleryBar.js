import { useDispatch, useSelector } from 'react-redux';
import {
  addPhoto,
  fetchPhoto,
  resetAllPhotos,
  selectIsLoadingViaAPI,
} from '../../redux/slices/photoSlice.js';
import { Button } from 'react-bootstrap';
import { FaSpinner } from 'react-icons/fa';
import createPhotoWithId from '../../utils/createPhotoWithId.js';
import data from '../../data/data.json';
import './GalleryBar.css';

const GalleryBar = () => {
  const dispatch = useDispatch();
  const isLoadingViaAPI = useSelector(selectIsLoadingViaAPI);
  console.log(isLoadingViaAPI);
  const handleAddRandomPhoto = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomPhoto = data[randomIndex];

    dispatch(addPhoto(createPhotoWithId(randomPhoto)));
  };

  const handleResetAllPhotos = () => {
    dispatch(resetAllPhotos());
  };

  const handleAddRandomPhotoViaAPI = () => {
    dispatch(fetchPhoto('http://localhost:4000/random-photo-delayed'));
  };

  return (
    <>
      <div className="gallery-bar">
        <div className="wrapper-bar-btns">
          <Button variant="success" onClick={handleAddRandomPhoto}>
            Get Photos
          </Button>
          <Button
            variant="outline-success"
            disabled={isLoadingViaAPI}
            onClick={handleAddRandomPhotoViaAPI}
          >
            {isLoadingViaAPI ? (
              <>
                <span>is loading...</span>
                <FaSpinner className="spinner" />
              </>
            ) : (
              <span>Get Photos via API</span>
            )}
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
