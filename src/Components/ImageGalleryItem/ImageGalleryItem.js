import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ImageGaleryItem.module.css';

const ImageGalleryItem = ({ url, type }) => {
  return (
    <li className={styles.ImageGalleryItem}>
      <img src={url} alt={type} className={styles.ImageGalleryItemImage} />
    </li>
  );
};

export default ImageGalleryItem;
