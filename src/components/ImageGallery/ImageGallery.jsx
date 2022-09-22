import PropTypes from 'prop-types';
import { Component } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import api from '../api/Image-api';

class ImageGallery extends Component {
  state = {
    images: [],
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { item, page } = this.props;
    const prevItem = prevProps.item;
    const nextItem = item;

    if (prevItem !== nextItem) {
      api
        .fetchImages(nextItem, page)
        // .then(console.log)
        // .catch(error => this.setState({ error }));
    }
  }

  render() {
    const { images } = this.state;
      return (
          <ImageGallery images={images} />
    )
  }
}

export default ImageGallery;
