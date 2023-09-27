import close from "../assets/icon-close.svg";
import { navLinks } from "../utils";
import { useAppContext } from "../context/AppProvider";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useAppContext();

  return (
    <aside
      className={
        isSidebarOpen
          ? "sidebar__container sidebar--open"
          : "sidebar__container"
      }
    >
      <div className="sidebar">
        <div className="sidebar__header">
          <button onClick={closeSidebar} className="close__btn">
            <img src={close} alt="close" />
          </button>
        </div>
        <ul className="sidebar__links">
          {navLinks.map(({ id, link }) => {
            return (
              <li key={id} className="sidebar__link">
                <a href="#">{link}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
