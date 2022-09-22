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
    const { images } = this.state;
    const prevImages = prevState.images;
    const nextImages = this.state.images;
    const prevItem = prevProps.item;
    const nextItem = item;

    if (prevItem !== nextItem) {
      api
        .fetchImages(nextItem, page)
        .then(images => {
          images.hits.map(({ id, webformatURL, largeImageURL, tags }) => {
            const image = {
            id,
            tags,
            smallImage: webformatURL,
            largeImage: largeImageURL,
          }
          this.setState(({ images }) => ({
            images: [image, ...images]
          }))
          })
        })
        .catch(error => this.setState({ error }));
    }
    
  }

  render() {
    const { images } = this.state;
    console.log(images)
      return (
          <ImageGalleryItem images={images} />
    )
  }
}

export default ImageGallery;
