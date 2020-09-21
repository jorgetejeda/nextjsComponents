import { Modal, Button } from "react-bootstrap";
const ModalUiElement = ({
  children,
  close,
  title,
  animation,
  backdrop,
  size,
  show,
  onHide,
}) => {
  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
        animation={animation}
        backdrop={backdrop && "static"}
        size={size}
        centered
      >
        {title && (
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
        )}
        <Modal.Body>{children}</Modal.Body>
        {close && (
          <Modal.Footer>
            <Button variant="primary" size="sm" onClick={onHide}>
              {close}
            </Button>
          </Modal.Footer>
        )}
      </Modal>
    </>
  );
};

export default ModalUiElement;
