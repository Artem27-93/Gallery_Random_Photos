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
import {
  onlyFavouriteFilter,
  selectOnlyFavouriteFilter,
} from '../../redux/slices/filterSlice.js';
import { Button } from 'react-bootstrap';
import Spinner from '../Spinner.js';
import './GalleryBar.css';
import { useEffect } from 'react';

const GalleryBar = () => {
  const dispatch = useDispatch();
  const allPhotos = useSelector(selectPhotos);
  const selectOnlyFavourite = useSelector(selectOnlyFavouriteFilter);
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

  const handleOnlyFavouritePhotos = () => {
    dispatch(onlyFavouriteFilter());
  };

  useEffect(() => {
    console.log('Launch after rendering once!');
    dispatch(fetchPhotos('http://localhost:4000/random-photos-delayed'));
  }, [dispatch]);

  return (
    <>
      <div className="gallery-bar">
        <div className="wrapper-bar-btns">
          <div className="wrapper-favourite-checkbox">
            <input
              style={{ marginRight: '5px' }}
              id="is-favourite"
              type="checkbox"
              checked={selectOnlyFavourite}
              onChange={handleOnlyFavouritePhotos}
            />
            <label style={{ cursor: 'pointer' }} htmlFor="is-favourite">
              Favourite
            </label>
          </div>
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
    </>
  );
};

export default GalleryBar;
