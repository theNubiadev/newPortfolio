
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

function Navbar({ navOpen }) {
  const lastActiveLink = useRef(null);
  const activeBox = useRef(null);

  const initActiveBox = () => {
    if (lastActiveLink.current && activeBox.current) {
      const linkRect = lastActiveLink.current.getBoundingClientRect();
      activeBox.current.style.top = linkRect.top + "px";
      activeBox.current.style.left = linkRect.left + "px";
      activeBox.current.style.width = linkRect.width + "px";
      activeBox.current.style.height = linkRect.height + "px";
    }
  };

  useEffect(() => {
    initActiveBox();
    window.addEventListener("resize", initActiveBox);
    return () => window.removeEventListener("resize", initActiveBox); 
  }, []);

  const activeCurrentLink = (event) => {
    lastActiveLink.current?.classList.remove("active");
    event.target.classList.add("active");
    lastActiveLink.current = event.target;

    const linkRect = event.target.getBoundingClientRect();
    activeBox.current.style.top = linkRect.top + "px";
    activeBox.current.style.left = linkRect.left + "px";
    activeBox.current.style.width = linkRect.width + "px";
    activeBox.current.style.height = linkRect.height + "px";
  };

  const navItems = [
    { label: "Home", link: "#home", className: "nav-link active", ref: lastActiveLink,},
    { label: "About", link: "#about", className: "nav-link" },
    { label: "Projects", link: "#projects", className: "nav-link" },
    { label: "Review", link: "#review", className: "nav-link " },
    { label: "Contact", link: "#contact", className: "nav-link md:hidden" },

  ];

  return (
    <nav className={`navbar ${navOpen ? "active" : ""}`}>
      {navItems.map(({ label, link, className }, key) => (
        <a
          href={link}
          className={className}
          key={key}
          onClick={activeCurrentLink}
          ref={lastActiveLink.current && key === 0 ? lastActiveLink : null} // Only attach ref to the first item initially
        >
          {label}
        </a>
        
      ))}
  {/* <div className="active-box" ref={activeBox}></div> */}
    
    </nav>
  );
}

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
