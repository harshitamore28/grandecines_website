
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <nav>
      <div className="logo">
        <img src="/logo_noref_nobg.png" alt="Grande Cines Logo" />
      </div>
      <div className="nav-links">
        <Link to="/" className={isActive("/")}>Home</Link>
        <Link to="/about" className={isActive("/about")}>About</Link>
        <Link to="/now-showing" className={isActive("/now-showing")}>Now Showing</Link>
        <Link to="/upcoming" className={isActive("/upcoming")}>Upcoming</Link>
        <Link to="/franchise" className={isActive("/franchise")}>Franchise</Link>
      </div>
    </nav>
  );
}
