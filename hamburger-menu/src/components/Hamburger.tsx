import { Link } from "react-router-dom";
const Hamburger = () => {
  return (
    <div className="hamburger-menu">
      <div className="menu-secondary-background-color"></div>
      <div className="menu-layer">
        <div className="menu-city-background"></div>
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li>
                    <Link to="/opportunities">Opportunities</Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link to="/solutions">Solutions</Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link to="/contact-us">Contack us</Link>
                  </li>
                </ul>
              </nav>
              <div className="info">
                <h3>Our Promise</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Orci dapibus ultrices in iaculis. Nunc faucibus a pellentesque
                  sit amet porttitor eget.
                </p>
              </div>
              <div className="location">
                Locations :
                <span>Dallas</span>
                <span>Austin</span>
                <span>New York</span>
                <span>San Francisco</span>
                <span>Beijing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
