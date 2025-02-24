import { useDispatch, useSelector } from 'react-redux';
import {
  addPhoto,
  fetchPhotos,
  resetAllPhotos,
  selectIsLoadingViaAPI,
  selectPhotos,
} from '../../redux/slices/photoSlice.js';
import { setError } from '../../redux/slices/errorSlice.js';
import { Button } from 'react-bootstrap';
import { FaSpinner } from 'react-icons/fa';
import createPhotoWithId from '../../utils/createPhotoWithId.js';
import data from '../../data/data.json';
import './GalleryBar.css';

const GalleryBar = () => {
  const dispatch = useDispatch();
  const allPhotos = useSelector(selectPhotos);
  const isLoadingViaAPI = useSelector(selectIsLoadingViaAPI);
  const handleAddRandomPhoto = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomPhoto = data[randomIndex];

    dispatch(addPhoto(createPhotoWithId(randomPhoto)));
  };

  const handleResetAllPhotos = () => {
    allPhotos.length
      ? dispatch(resetAllPhotos())
      : dispatch(setError('Gallery already is empty!'));
  };

  const handleAddRandomPhotosViaAPI = () => {
    dispatch(fetchPhotos('http://localhost:4000/random-photos-delayed'));
  };

  return (
    <>
      <div className="gallery-bar">
        <div className="wrapper-bar-btns">
          <Button variant="success" onClick={handleAddRandomPhoto}>
            Get Photo
          </Button>
          <Button
            variant="outline-success"
            disabled={isLoadingViaAPI}
            onClick={handleAddRandomPhotosViaAPI}
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
      <hr style={{ color: 'white' }} />
    </>
  );
};

export default GalleryBar;
