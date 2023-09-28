import ProductCarousel from "./ProductCarousel";
import { useAppContext } from "../context/AppProvider";
import { FaTimes } from "react-icons/fa";

const Modal = () => {
  const { closeModal } = useAppContext();
  return (
    <div className="modal">
      <div className="modal__carousel">
        <div className="modal__header">
          <button onClick={closeModal} className="close-modal__btn">
            <FaTimes />
          </button>
        </div>
        <ProductCarousel />
      </div>
    </div>
  );
};

export default Modal;
