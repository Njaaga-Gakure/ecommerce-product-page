import menu from "../assets/icon-menu.svg";
import { BsCart2 } from "react-icons/bs";
import avatar from "../assets/image-avatar.png";
import logo from "../assets/logo.svg";
import { navLinks } from "../utils";
import { useAppContext } from "../context/AppProvider";

const Navbar = () => {
  const { openSidebar } = useAppContext();
  return (
    <nav className="nav">
      <div className="nav--center content--center">
        <div className="nav__header">
          <button onClick={openSidebar} className="menu__btn">
            <img src={menu} alt="menu" />
          </button>
          <img src={logo} alt="sneakers" className="nav__logo" />
          <ul className="nav__links">
            {navLinks.map(({ id, link }) => {
              return (
                <li key={id} className="nav__link">
                  <a href="#">{link}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="nav__profile">
          <div className="cart__container">
            <button className="cart__btn">
              <BsCart2 />
            </button>
            <span className="cart__amount">0</span>
          </div>
          <div className="profile__container">
            <img src={avatar} alt="avatar" className="profile__img" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
