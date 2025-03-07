import { v4 as uuidv4 } from 'uuid';
const createPhotoWithId = (photo) => {
  return {
    ...photo,
    isFavourite: false,
    id: uuidv4(),
    src: photo.download_url,
  };
};

export default createPhotoWithId;
