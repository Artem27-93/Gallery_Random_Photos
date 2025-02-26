import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaSpinner } from 'react-icons/fa';
import { BsBookmarkHeart, BsBookmarkHeartFill } from 'react-icons/bs';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { setImgToModal } from '../../redux/slices/modalSlice';
import { toggleFavourite } from '../../redux/slices/photoSlice';

import './GalleryCard.css';

function GalleryCard({ id, download_url, author, isFavourite }) {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const handleShow = () => {
    dispatch(setImgToModal({ image: download_url, author: author }));
  };

  const handleCheckIsFavourite = (id) => {
    console.log(id);
    dispatch(toggleFavourite(id));
  };

  return (
    <Col style={{ marginTop: 10 }}>
      <Card bg="dark" text="white">
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
