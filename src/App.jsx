import { Navbar, Product, Sidebar } from "./components";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Sidebar />
      <Product />
    </div>
  );
};

export default App;
