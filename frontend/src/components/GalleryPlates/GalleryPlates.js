import { useSelector } from 'react-redux';
import { selectPhotos } from '../../redux/slices/photoSlice.js';

import GalleryCard from '../GalleryCard/GalleryCard';
import './GalleryPlates.css';
const GalleryPlates = () => {
  const photos = useSelector(selectPhotos);
  console.log('photos', photos);
  return (
    <div className="gallery-plates">
      {photos.length ? (
        photos.map((photo) => {
          return <GalleryCard key={photo.id} {...photo} />;
        })
      ) : (
        <h3>No added photos yet!</h3>
      )}
    </div>
  );
};

export default GalleryPlates;
