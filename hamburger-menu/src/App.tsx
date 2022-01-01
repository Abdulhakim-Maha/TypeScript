import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="wrapper">
          <div className="home">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/opportunities" element={<Opportunities />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/contact-us" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

function Opportunities() {
  return <p>Discover our numerous opportunities</p>;
}

function Solutions() {
  return <p>Solutions that help you.</p>;
}


export default App;
