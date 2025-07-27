import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ImageGrid from "../components/ImageGrid";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Explore = () => {
  const query = useQuery().get("search") || "random";
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  // Cuando cambia la query, resetea la página y las imágenes
  useEffect(() => {
    setPage(1);
    setImages([]);
  }, [query]);

  useEffect(() => {
    fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${process.env.REACT_APP_UNSPLASH_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        if (page === 1) {
          setImages(data.results);
        } else {
          setImages(prevImages => [...prevImages, ...data.results]);
        }
      });
  }, [query, page]);

  return (
    <div>
      <h1 className="page-title">Explorar: {query}</h1>
      <ImageGrid images={images} />
      <button
        onClick={() => setPage(page + 1)}
        style={{ display: "block", margin: "1rem auto", padding: "0.5rem 1rem", fontSize: "1rem", cursor: "pointer" }}
      >
        Cargar más
      </button>
    </div>
  );
};

export default Explore;
