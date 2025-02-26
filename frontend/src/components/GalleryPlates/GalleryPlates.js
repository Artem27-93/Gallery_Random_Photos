import { useSelector } from 'react-redux';
import { selectPhotos } from '../../redux/slices/photoSlice.js';
import { selectOnlyFavouriteFilter } from '../../redux/slices/filterSlice.js';
import Row from 'react-bootstrap/Row';

import GalleryCard from '../GalleryCard/GalleryCard';
import './GalleryPlates.css';
const GalleryPlates = () => {
  const photos = useSelector(selectPhotos); // array with photos
  const onlyFavouriteFilter = useSelector(selectOnlyFavouriteFilter); //sign only favourite filter

  //filtered array with photos
  const filteredPhotos = photos.filter((photo) => {
    return onlyFavouriteFilter ? photo.isFavourite : true;
  });

  return (
    <div className="gallery-plates">
      {filteredPhotos.length ? (
        <Row xs={1} md={2} lg={4}>
          {filteredPhotos.map((photo) => {
            return <GalleryCard key={photo.id} {...photo} />;
          })}
        </Row>
      ) : (
        <h3>No added photos yet!</h3>
      )}
    </div>
  );
};

export default GalleryPlates;
