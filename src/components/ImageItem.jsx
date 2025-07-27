import React from "react";

const ImageItem = ({ image }) => (
  <div className="image-item">
    <img src={image.urls.small} alt={image.alt_description} />
  </div>
);

export default ImageItem;
