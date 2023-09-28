import ProductCarousel from "./ProductCarousel";
import minus from "../assets/icon-minus.svg";
import plus from "../assets/icon-plus.svg";
import { BsCart2 } from "react-icons/bs";
const Product = () => {
  return (
    <section className="product">
      <div className="product--center">
        <ProductCarousel />
        <div className="product__info">
          <h2 className="product__title">fall limited edition sneakers</h2>
          <h5 className="product__company">sneaker company</h5>
          <p className="product__desc">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
          <div className="product__price">
            <span className="current-price">$125.00</span>
            <span className="product__discount">50%</span>
            <span className="prev__price">$250.00</span>
          </div>
          <div className="cart__buttons">
            <div className="amount__buttons">
              <button className="amount__btn">
                <img src={minus} alt="" />
              </button>
              <span className="amount">0</span>
              <button className="amount__btn">
                <img src={plus} alt="" />
              </button>
            </div>
            <button className="add-to-cart__btn">
              <BsCart2 />
              add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
