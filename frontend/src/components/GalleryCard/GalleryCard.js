import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaSpinner } from 'react-icons/fa';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { setImgToModal } from '../../redux/slices/modalSlice';

import './GalleryCard.css';

function GalleryCard({ id, download_url, author }) {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const handleShow = (breakpoint) => {
    dispatch(setImgToModal({ image: download_url, author: author }));
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

        <Card.Body>
          {loading ? (
            <FaSpinner className="spinner" />
          ) : (
            <Card.Text>Author: {author}</Card.Text>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
}

export default GalleryCard;
