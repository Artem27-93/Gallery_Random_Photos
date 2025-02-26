import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { clearModal, selectModalState } from '../redux/slices/modalSlice';

function ModalImg() {
  const selectModalHide = useSelector(selectModalState);
  const dispatch = useDispatch();

  const handleHideModal = () => {
    dispatch(clearModal());
  };
  return (
    <>
      <Modal
        show={selectModalHide.show}
        fullscreen={selectModalHide.fullscreen}
        onHide={handleHideModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>Author: {selectModalHide.author}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src={selectModalHide.image}
              width="90%"
              height="auto"
              alt="empty"
            />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalImg;
