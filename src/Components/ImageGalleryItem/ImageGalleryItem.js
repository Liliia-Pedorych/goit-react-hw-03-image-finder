import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../images/default.jpg';
import styles from './ImageGaleryItem.module.css';

const ImageGalleryItem = ({ url, type, modalUrl, onClick }) => {
  return (
    <li className={styles.ImageGalleryItem} onClick={() => onClick(modalUrl)}>
      <img src={url} alt={type} className={styles.ImageGalleryItemImage} />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.defaultProps = {
  url: defaultImage,
  modalUrl: defaultImage,
  type: 'photo',
};

ImageGalleryItem.propTypes = {
  url: PropTypes.string,
  type: PropTypes.string,
  modalUrl: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
