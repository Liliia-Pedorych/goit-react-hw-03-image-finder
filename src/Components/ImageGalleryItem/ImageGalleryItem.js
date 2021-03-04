import React from 'react';
// import PropTypes from 'prop-types';

const ImageGalleryItem = ({ url, type }) => {
  return (
    <li className="ImageGalleryItem">
      <img src={url} alt={type} className="ImageGalleryItem-image" />
    </li>
  );
};

export default ImageGalleryItem;
