import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import imagesApi from '../services/imagesApi';
// import './styles.css';

class App extends Component {
  state = {
    images: [],
    page: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevPrors, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
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

  fetchImages = () => {
    const { page, searchQuery } = this.state;
    const options = { page, searchQuery };

    this.setState({ isLoading: true });

    imagesApi
      .fetchImages(options)
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
    const { images, isLoading, error } = this.state;
    const shouldRenderLoadMoreButton = images.length > 0 && !isLoading;
    return (
      <>
        {error && (
          <h1>Your request cannot be executed. Please, try again...</h1>
        )}
        <Searchbar onSubmit={this.onChangeSearchQuery} />
        <ImageGallery images={images} />
        {isLoading && <h1>Loading...</h1>}
        {shouldRenderLoadMoreButton && (
          <Button fetchImages={this.fetchImages} />
        )}
      </>
    );
  }
}

export default App;
