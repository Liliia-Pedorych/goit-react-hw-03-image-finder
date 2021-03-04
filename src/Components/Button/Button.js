import React from 'react';
// import PropTypes from 'prop-types';

const Button = ({ fetchImages }) => {
  return (
    <button type="button" onClick={fetchImages}>
      {' '}
      Load more
    </button>
  );
};

export default Button;

// window.scrollTo({
//   top: document.documentElement.scrollHeight,
//   behavior: 'smooth',
// });
