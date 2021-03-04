import React from 'react';
// import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images }) => {
  return (
    <ul className={styles.ImageGallery}>
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
