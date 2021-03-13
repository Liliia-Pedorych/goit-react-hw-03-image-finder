import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ fetchImages }) => {
  return (
    <button type="button" onClick={fetchImages} className={styles.Button}>
      {' '}
      Load more
    </button>
  );
};

export default Button;

Button.propTypes = {
  fetchImages: PropTypes.func.isRequired,
};
