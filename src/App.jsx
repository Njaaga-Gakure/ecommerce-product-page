import { Navbar, Product, Sidebar, Modal } from "./components";
import { useAppContext } from "./context/AppProvider";
const App = () => {
  const { isModalOpen } = useAppContext();
  return (
    <div className="container">
      <Navbar />
      <Sidebar />
      <Product />
      {isModalOpen && <Modal />}
    </div>
  );
};

export default App;
