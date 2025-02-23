import { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import './GalleryCard.css';

const GalleryCard = ({ download_url, author }) => {
  const [loading, setLoading] = useState(true);
  return (
    <div className="gallery-card">
      <img
        src={download_url}
        alt="empty"
        onLoad={(e) => {
          setLoading(false);
        }}
      />
      <div
        className="caption"
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        {loading ? <FaSpinner className="spinner" /> : <p>Autor: {author}</p>}
      </div>
    </div>
  );
};

export default GalleryCard;
