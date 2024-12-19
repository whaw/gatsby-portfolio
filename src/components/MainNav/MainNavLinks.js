import React from "react";
import { HashLink } from "react-router-hash-link";

const MainNavLinks = ({ navID, navClasses, smoothScroll = true }) => {
  const links = [
    { label: "Introductions", to: "#introductions" },
    { label: "Experience", to: "#experience" },
    { label: "About this site", to: "#about-this-site" },
    { label: "Contact", to: "#contact" },
  ];

  return (
    <ul id={navID} className={navClasses}>
      {links.map(({ label, to }) => (
        <li key={to} className="nav-item">
          <HashLink className="nav-link" to={to} smooth={smoothScroll}>{label}</HashLink>
        </li>
      ))}
    </ul>
  )
};

export default MainNavLinks;