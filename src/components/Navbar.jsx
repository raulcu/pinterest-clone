import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedQuery = query.trim();
    if (trimmedQuery) {
      navigate(`/explore?search=${encodeURIComponent(trimmedQuery)}`);
      setQuery("");
    }
  };

  return (
    <nav className="topbar">
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <input
          className="search-input"
          type="text"
          placeholder="Buscar imágenes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </nav>
  );
};

export default Navbar;
