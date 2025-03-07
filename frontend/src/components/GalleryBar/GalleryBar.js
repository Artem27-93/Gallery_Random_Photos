import { useDispatch, useSelector } from 'react-redux';
import {
  fetchPhoto,
  fetchPhotos,
  resetAllPhotos,
  selectIsLoadingViaAPI,
  selectIsLoadingViaLocalHost,
  selectPhotos,
  shufflePhotos,
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

  const handleAddRandomPhotosListViaAPI = () => {
    dispatch(fetchPhotos('https://picsum.photos/v2/list'));
  };

  const handleResetAllPhotos = () => {
    allPhotos.length
      ? dispatch(resetAllPhotos())
      : dispatch(setError('Gallery already is empty!'));
  };

  // const handleAddRandomPhotosViaLocalHost = () => {
  //   dispatch(fetchPhotos('http://localhost:4000/random-photos-delayed'));
  // };

  const handleOnlyFavouritePhotos = () => {
    dispatch(onlyFavouriteFilter());
  };

  const handleShufflePhotos = () => {
    dispatch(shufflePhotos());
  };

  useEffect(() => {
    dispatch(fetchPhotos('https://picsum.photos/v2/list'));
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
              Favorite
            </label>
          </div>
          <div className="wrapper-btns">
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
                <span>Get Photo</span>
              )}
            </Button>
            <Button
              variant="warning"
              disabled={isLoadingViaLocalHost}
              onClick={handleAddRandomPhotosListViaAPI}
            >
              {isLoadingViaLocalHost ? (
                <>
                  <Spinner className="spinner" />
                  <span>Loading...</span>
                </>
              ) : (
                <span>Get Photos</span>
              )}
            </Button>
            {allPhotos.length > 0 && (
              <Button variant="danger" onClick={handleResetAllPhotos}>
                Reset All
              </Button>
            )}
            {allPhotos.length > 3 && (
              <Button variant="info" onClick={handleShufflePhotos}>
                Shuffle
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryBar;
