import React, { useEffect, useState } from "react";
import ImageGrid from "../components/ImageGrid";

const Home = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchImages = (pageNum) => {
    setLoading(true);
    fetch(`https://api.unsplash.com/search/photos?page=${pageNum}&query=nature&client_id=${process.env.REACT_APP_UNSPLASH_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        if (pageNum === 1) {
          setImages(data.results);
        } else {
          setImages(prev => [...prev, ...data.results]); // agregamos nuevas imágenes al array existente
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    fetchImages(page);
  }, [page]);

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <div>
      <h1 className="page-title">Inicio</h1>
      <ImageGrid images={images} />
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <button onClick={handleLoadMore} disabled={loading} style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>
          {loading ? "Cargando..." : "Ver más"}
        </button>
      </div>
    </div>
  );
};

export default Home;
