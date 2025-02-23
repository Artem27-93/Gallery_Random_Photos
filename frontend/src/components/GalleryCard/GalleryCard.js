import './GalleryCard.css';

const GalleryCard = ({ download_url }) => {
  return (
    <div className="gallery-card">
      <img src={download_url} alt="empty" />
      <p>Some text</p>
    </div>
  );
};

export default GalleryCard;
