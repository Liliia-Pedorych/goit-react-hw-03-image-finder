import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className={styles.ImageGallery}>
      {images.map(({ id, webformatURL, type, tags, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          url={webformatURL}
          type={`${type} ${tags}`}
          modalUrl={largeImageURL}
          onClick={onClick}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};
