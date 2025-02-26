import { useDispatch, useSelector } from 'react-redux';
import {
  fetchPhoto,
  fetchPhotos,
  resetAllPhotos,
  selectIsLoadingViaAPI,
  selectIsLoadingViaLocalHost,
  selectPhotos,
} from '../../redux/slices/photoSlice.js';
import { setError } from '../../redux/slices/errorSlice.js';
import { Button } from 'react-bootstrap';
import Spinner from '../Spinner.js';
// import { FaSpinner } from 'react-icons/fa';
// import createPhotoWithId from '../../utils/createPhotoWithId.js';
// import data from '../../data/data.json';
import './GalleryBar.css';
import { useEffect } from 'react';

const GalleryBar = () => {
  const dispatch = useDispatch();
  const allPhotos = useSelector(selectPhotos);
  const isLoadingViaAPI = useSelector(selectIsLoadingViaAPI);
  const isLoadingViaLocalHost = useSelector(selectIsLoadingViaLocalHost);
  const handleAddRandomPhotoViaAPI = () => {
    const randomIndex = Math.floor(Math.random() * 1000);
    dispatch(fetchPhoto(`https://picsum.photos/id/${randomIndex}/info`));
  };

  const handleResetAllPhotos = () => {
    allPhotos.length
      ? dispatch(resetAllPhotos())
      : dispatch(setError('Gallery already is empty!'));
  };

  const handleAddRandomPhotosViaLocalHost = () => {
    dispatch(fetchPhotos('http://localhost:4000/random-photos-delayed'));
  };

  useEffect(() => {
    console.log('Launch after rendering once!');
    dispatch(fetchPhotos('http://localhost:4000/random-photos-delayed'));
  }, [dispatch]);

  return (
    <>
      <div className="gallery-bar">
        <div className="wrapper-bar-btns">
          <Button
            variant="success"
            disabled={isLoadingViaAPI}
            onClick={handleAddRandomPhotoViaAPI}
          >
            {isLoadingViaAPI ? (
              <>
                <Spinner className="spinner" />
                <span>Loading...</span>
              </>
            ) : (
              <span>Get Photo via API</span>
            )}
          </Button>
          <Button
            variant="outline-success"
            disabled={isLoadingViaLocalHost}
            onClick={handleAddRandomPhotosViaLocalHost}
          >
            {isLoadingViaLocalHost ? (
              <>
                <Spinner className="spinner" />
                <span>Loading...</span>
              </>
            ) : (
              <span>Get 8 Photos from Local Host</span>
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
