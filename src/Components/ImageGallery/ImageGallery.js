import React from 'react';
// import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ images }) => {
  return (
    <ul className="ImageGallery">
      {images.map(({ id, webformatURL, type, tags }) => (
        <ImageGalleryItem
          key={id}
          url={webformatURL}
          type={`${type} ${tags}`}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
