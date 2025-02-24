import { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

import './GalleryCard.css';

function GalleryCard({ id, download_url, author }) {
  const [loading, setLoading] = useState(true);
  return (
    <Col>
      <Card bg="dark" text="white">
        <Card.Img
          variant="top"
          src={download_url}
          onLoad={(e) => {
            setLoading(false);
          }}
        />

        <Card.Body>
          {loading ? (
            <FaSpinner className="spinner" />
          ) : (
            <Card.Text>Autor: {author}</Card.Text>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
}

export default GalleryCard;
