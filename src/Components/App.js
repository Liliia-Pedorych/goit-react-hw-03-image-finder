import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import getImages from '../services/imagesApi';
import Modal from './Modal';
import Load from './Loader';

import '../styles.css';

class App extends Component {
  state = {
    images: [],
    page: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
    showModal: false,
    largeImageURL: '',
  };

  componentDidUpdate(prevPrors, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
    if (
      prevState.images.length !== 0 &&
      prevState.images !== this.state.images
    ) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  onChangeSearchQuery = query => {
    this.setState({
      images: [],
      searchQuery: query,
      page: 1,
      error: null,
    });
  };

  toggleModal = (url = '') => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      largeImageURL: url,
    }));
  };

  fetchImages = () => {
    const { page, searchQuery } = this.state;
    const options = { page, searchQuery };

    this.setState({ isLoading: true });

    getImages(options)
      .then(images => {
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { images, isLoading, error, showModal, largeImageURL } = this.state;
    const shouldRenderLoadMoreButton = images.length > 0 && !isLoading;
    return (
      <div className="App">
        {error && (
          <h1>Your request cannot be executed. Please, try again...</h1>
        )}
        {showModal && (
          <Modal onClick={this.toggleModal}>
            <img src={largeImageURL} alt="" />
          </Modal>
        )}
        <Searchbar onSubmit={this.onChangeSearchQuery} />
        {images.length > 0 && (
          <ImageGallery images={images} onClick={this.toggleModal} />
        )}
        {isLoading && <Load />}
        {shouldRenderLoadMoreButton && (
          <Button fetchImages={this.fetchImages} />
        )}
      </div>
    );
  }
}

export default App;
