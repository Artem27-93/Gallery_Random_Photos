import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaSpinner } from 'react-icons/fa';
import { BsBookmarkHeart, BsBookmarkHeartFill, BsXLg } from 'react-icons/bs';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { setImgToModal } from '../../redux/slices/modalSlice';
import { toggleFavourite, deletePhoto } from '../../redux/slices/photoSlice';

import './GalleryCard.css';

function GalleryCard({ id, download_url, author, isFavourite }) {
  const [loading, setLoading] = useState(true);
  const [showClosed, setShowClosed] = useState(true);
  const dispatch = useDispatch();

  const handleShow = () => {
    dispatch(setImgToModal({ image: download_url, author: author }));
  };

  const handleCheckIsFavourite = (id) => {
    dispatch(toggleFavourite(id));
  };

  const deleteCardFromPlate = (id) => {
    dispatch(deletePhoto(id));
  };

  return (
    <Col style={{ marginTop: 10 }}>
      <Card
        bg="dark"
        text="white"
        onMouseEnter={() => setShowClosed(false)}
        onMouseLeave={() => setShowClosed(true)}
      >
        <div hidden={showClosed} className="close-card-icon">
          <BsXLg
            style={{ cursor: 'pointer' }}
            onClick={() => deleteCardFromPlate(id)}
          />
        </div>
        <Card.Img
          variant="top"
          src={download_url}
          onLoad={(e) => {
            setLoading(false);
          }}
          onDoubleClick={() => handleShow('xxl-down')}
          style={{ cursor: 'pointer' }}
          title="Double click to fullscreen view"
        />

        <Card.Body style={{ position: 'relative' }}>
          {loading ? (
            <FaSpinner className="spinner" />
          ) : (
            <Card.Text>
              Author: {author}{' '}
              <span onClick={() => handleCheckIsFavourite(id)}>
                {isFavourite ? (
                  <BsBookmarkHeartFill className="like-icon-filled" />
                ) : (
                  <BsBookmarkHeart className="like-icon-unfilled" />
                )}
              </span>
            </Card.Text>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
}

export default GalleryCard;
