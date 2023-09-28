import { useAppContext } from "../context/AppProvider";
import previous from "../assets/icon-previous.svg";
import next from "../assets/icon-next.svg";

const ProductCarousel = () => {
  const { activeImage, imageList, handlePrevImage, handleNextImage } =
    useAppContext();
  const { image } = imageList[activeImage];
  return (
    <div className="product__carousel">
      <img src={image} alt="shoe image" className="carousel__img" />
      <div className="img__grid">
        {imageList.map(({ id, image }) => {
          return (
            <div key={id} className="img__container">
              <img src={image} alt="" />
            </div>
          );
        })}
      </div>
      <div className="btn__container">
        <button onClick={handlePrevImage} className="carousel__btn prev__btn">
          <img src={previous} alt="" />
        </button>
        <button onClick={handleNextImage} className="carousel__btn next__btn">
          <img src={next} alt="" />
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;
