import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default class Load extends Component {
  render() {
    return <Loader type="Circles" color="#00BFFF" height={200} width={200} />;
  }
}
