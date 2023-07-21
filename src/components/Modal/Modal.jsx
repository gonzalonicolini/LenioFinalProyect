import ComicList from '../ComicList/ComicList';
import ModalCardWrapper from './styles/ModalCardWrapper';
import ModalTitleWrapper from './styles/ModalTitleWrapper';
import ModalWrapper from './styles/ModalWrapper';

const Modal = ({ handleClose, title, show }) => {
  return (
    <ModalWrapper show={show} onClick={handleClose}>
      <ModalCardWrapper onClick={(event) => event.stopPropagation()}>
        <ModalTitleWrapper>
          {title}
        </ModalTitleWrapper>
        <ComicList />
      </ModalCardWrapper>
    </ModalWrapper>
  );
};

export default Modal;