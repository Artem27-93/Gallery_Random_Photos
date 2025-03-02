import { useDispatch, useSelector } from 'react-redux';
import { RowsPhotoAlbum } from 'react-photo-album';
import 'react-photo-album/rows.css';
import { selectPhotos } from '../../redux/slices/photoSlice.js';
import { selectOnlyFavouriteFilter } from '../../redux/slices/filterSlice.js';
import { setImgToModal } from '../../redux/slices/modalSlice';
import { BsBookmarkHeart, BsBookmarkHeartFill, BsXLg } from 'react-icons/bs';
import { toggleFavourite, deletePhoto } from '../../redux/slices/photoSlice';

import './GalleryPlates.css';
const GalleryPlates = () => {
  const dispatch = useDispatch();
  const photos = useSelector(selectPhotos); // array with photos
  const onlyFavouriteFilter = useSelector(selectOnlyFavouriteFilter); //sign only favourite filter

  const handleShow = ({ src, title }) => {
    dispatch(setImgToModal({ image: src, author: title }));
  };

  //filtered array with photos
  const filteredPhotos = photos.filter((photo) => {
    return onlyFavouriteFilter ? photo.isFavourite : true;
  });
  const formattedPhotos = filteredPhotos.map((photo) => ({
    ...photo,
    src: photo.download_url, // або photo.imageUrl
    title: photo.author,
  }));

  const handleCheckIsFavourite = ({ id }) => {
    dispatch(toggleFavourite(id));
  };
  const deleteCardFromPlate = ({ id }) => {
    dispatch(deletePhoto(id));
  };

  return (
    <div className="gallery-plates">
      {formattedPhotos.length ? (
        <RowsPhotoAlbum
          photos={formattedPhotos}
          render={{
            // render image selection icon
            extras: (t, { photo }) => {
              return (
                <>
                  <span
                    style={{ position: 'absolute', top: 5, left: 5 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCheckIsFavourite(photo);
                    }}
                  >
                    {photo.isFavourite ? (
                      <BsBookmarkHeartFill className="like-icon-filled" />
                    ) : (
                      <BsBookmarkHeart className="like-icon-unfilled" />
                    )}
                  </span>
                  <span>
                    <BsXLg
                      className="close-card-icon"
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteCardFromPlate(photo);
                      }}
                    />
                  </span>
                </>
              );
            },
          }}
          onClick={({ event, photo }) => {
            event.preventDefault();
            handleShow(photo);
          }}
        />
      ) : (
        <h4 style={{ textAlign: 'center' }}>No added photos yet!</h4>
      )}
    </div>
  );
};

export default GalleryPlates;
