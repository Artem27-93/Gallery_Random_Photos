import { useSelector } from 'react-redux';
import { selectPhotos } from '../../redux/slices/photoSlice.js';

import GalleryCard from '../GalleryCard/GalleryCard';
import './GalleryPlates.css';
const GalleryPlates = () => {
  const photos = useSelector(selectPhotos);
  console.log('photos', photos);
  return (
    <div className="gallery-plates">
      <hr />
      <h3>Gallery plates</h3>
      {photos.map((photo) => {
        return <GalleryCard key={photo.id} {...photo} />;
      })}
    </div>
  );
};

export default GalleryPlates;
