import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const location = useLocation();

  const trackScreenWidth = () => {
    const width = window.innerWidth;
    setScreenWidth(width);
    if (width > 600) {
      setOpen(true);
    }
  };

  const handleClose = () => {
    if (screenWidth < 600) {
      setOpen(false);
    }
  };

  useEffect(() => {
    trackScreenWidth();
    window.addEventListener("resize", trackScreenWidth);
    return () => window.removeEventListener("resize", trackScreenWidth);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-wrapper">
        <div className="logo">
          <Link to="/">
            <img
              src="https://i.imgur.com/Bb45v2O.png"
              alt="home"
              style={{ marginTop: 2, 
                       marginLeft: 0.5,
                       width: 50,
              }}
            />
          </Link>
          
          </div>
        <div className="list-wrapper">
          <img
            src="https://i.imgur.com/EUDFEJq.png"
            alt="Menu bars"
            style={{ opacity: !open ? 1 : 0 }}
            onClick={() => {
              setOpen(!open);
            }}
          />
          <img
            src="https://i.imgur.com/K4nlc7o.png"
            alt="Menu cross"
            style={{ opacity: open ? 1 : 0 }}
            onClick={() => {
              setOpen(!open);
            }}
          />

          <ul style={{ left: open ? "0" : "-100vw" }}>
            <li>
              <Link
                to="/"
                onClick={handleClose}
                style={{ color: location.pathname === "/" && "#07f5d1" }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={handleClose}
                style={{ color: location.pathname === "/about" && "#07f5d1" }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/myskills"
                onClick={handleClose}
                style={{ color: location.pathname === "/myskills" && "#07f5d1" }}
              >
                My Skills
              </Link>
            </li>
            <li>
              <Link
                to="/work"
                onClick={handleClose}
                style={{ color: location.pathname === "/work" && "#07f5d1" }}
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={handleClose}
                style={{ color: location.pathname === "/contact" && "#07f5d1" }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
