import React from "react";
import ImageItem from "./ImageItem";

const ImageGrid = ({ images }) => {
  return (
    <div className="image-grid">
      {images.map((img) => (
        <ImageItem key={img.id} image={img} />
      ))}
    </div>
  );
};

export default ImageGrid;
