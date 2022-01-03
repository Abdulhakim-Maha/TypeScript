import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import FashionStyle from "./pages/fasion-style/FashionStyle";
import OurProducts from "./pages/our-products/OurProducts";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="wrapper">
          <div className="home">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/our-products" element={<OurProducts />} />
              <Route path="/fashion-style" element={<FashionStyle />} />
              <Route path="/contact-us" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}



export default App;
