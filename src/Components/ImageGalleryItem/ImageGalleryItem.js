import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ImageGaleryItem.module.css';

const ImageGalleryItem = ({ url, type, modalUrl, onClick }) => {
  return (
    <li className={styles.ImageGalleryItem} onClick={() => onClick(modalUrl)}>
      <img src={url} alt={type} className={styles.ImageGalleryItemImage} />
    </li>
  );
};

export default ImageGalleryItem;
