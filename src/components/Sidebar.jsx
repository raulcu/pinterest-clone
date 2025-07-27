// src/components/Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaPinterestP, FaHome, FaBell, FaComments, FaCog, FaCompass, FaPlus } from "react-icons/fa";
import "../styles.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <FaPinterestP className="logo-icon" />
      </div>

      <div className="sidebar-icons">
        <Link to="/" className="sidebar-icon active"><FaHome /></Link>
        <Link to="/explore" className="sidebar-icon notification">
          <FaCompass />
          <span className="dot"></span>
        </Link>
        <Link to="/create" className="sidebar-icon"><FaPlus /></Link>
        <div className="sidebar-icon"><FaBell /></div>
        <div className="sidebar-icon"><FaComments /></div>
      </div>

      <div className="sidebar-settings">
        <FaCog className="sidebar-icon" />
      </div>
    </div>
  );
};

export default Sidebar;
