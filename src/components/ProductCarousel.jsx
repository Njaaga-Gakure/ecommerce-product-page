import { useAppContext } from "../context/AppProvider";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const ProductCarousel = () => {
  const {
    openModal,
    activeImage,
    imageList,
    handlePrevImage,
    handleNextImage,
    handleActiveImageChange,
  } = useAppContext();
  const { image } = imageList[activeImage];
  return (
    <div className="product__carousel">
      <img src={image} alt="shoe image" className="carousel__img" />
      <div className="img__grid">
        {imageList.map(({ id, image }, index) => {
          return (
            <div
              onClick={openModal}
              onMouseEnter={() => handleActiveImageChange(index)}
              key={id}
              className={
                activeImage === index
                  ? "img__container img--active"
                  : "img__container"
              }
            >
              <img src={image} alt="" />
            </div>
          );
        })}
      </div>
      <div className="btn__container">
        <button onClick={handlePrevImage} className="carousel__btn prev__btn">
          <BiChevronLeft />
        </button>
        <button onClick={handleNextImage} className="carousel__btn next__btn">
          <BiChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;
