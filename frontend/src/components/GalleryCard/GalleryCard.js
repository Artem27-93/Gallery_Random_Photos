import './GalleryCard.css';

const GalleryCard = ({ download_url, author }) => {
  return (
    <div className="gallery-card">
      <img src={download_url} alt="empty" />
      <p>Autor: {author}</p>
    </div>
  );
};

export default GalleryCard;
