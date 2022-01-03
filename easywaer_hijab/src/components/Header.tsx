import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Hamburger from "./Hamburger";

export type M = {
  initial?: Boolean | null;
  clicked: Boolean | null;
  menuName: string;
};

const Header = () => {
  const pUrl = useLocation().pathname;
  const logo = useRef<HTMLAnchorElement>(null);
  const menuBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (
      pUrl === "/our-products" ||
      pUrl === "/fashion-style" ||
      pUrl === "/contact-us"
    ) {
      logo.current!.style.color = "#000";
      menuBtn.current!.style.color = "#000";
    } else if (pUrl === "/") {
      logo.current!.style.color = "#fff";
      menuBtn.current!.style.color = "#fff";
    }
  }, [pUrl, logo, menuBtn]);

  const [state, setState] = useState<M>({
    initial: false,
    clicked: null,
    menuName: "Menu",
  });

  const pathChangeHandler = () => {
    setState({ clicked: false, menuName: "Menu" });
  };

  const [disabled, setDisable] = useState(false);

  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close",
      });
      // console.log(1);
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu",
      });
      // console.log(2);
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close",
      });
      // console.log(3);
    }
  };

  //Determine if our menu button should be disabled
  const disableMenu = () => {
    setDisable(!disabled);
    setTimeout(() => {
      setDisable(false);
    }, 1200);
  };
  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <div className="logo">
              <Link ref={logo} to="/" onClick={pathChangeHandler}>
                easywear hijab
              </Link>
            </div>
            <div className="menu">
              <button ref={menuBtn} disabled={disabled} onClick={handleMenu}>
                Menu
              </button>
            </div>
          </div>
        </div>
      </div>
      <Hamburger state={state} handler={pathChangeHandler} />
    </header>
  );
};

export default Header;
