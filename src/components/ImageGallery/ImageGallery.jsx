// import PropTypes from 'prop-types';
import { Component } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Loader } from '../Loader/Loader';
import api from '../api/Image-api';
import { toast } from 'react-toastify';
import { Button } from 'components/Button/Button';
import {ImageGalleryList} from './ImageGallery.styled'

class ImageGallery extends Component {
  state = {
    imagesArr: [],
    page: 1,
    error: null,
    status: 'idle'
  };

  componentDidUpdate(prevProps, prevState) {
    const { page, imagesArr,  } = this.state;
    const { item } = this.props;
    if (prevProps.item !== item) {
      try {
        this.setState({ status: 'pending'});
        api
          .fetchImages(item, page)
          .then(({ hits }) => {
            this.setState({ imagesArr: [...imagesArr, ...hits], status: 'successfully' });
          })
          .finally(this.setState({ loading: false }));
      } catch (error) {
        this.setState({ error, status: 'rejected' });
      }
    }

    if (prevState.page !== page) {
      try {
        this.setState({ status: 'pending'});
        api
          .fetchImages(item, page)
          .then(({ hits }) => {
            this.setState({ imagesArr: [...imagesArr, ...hits], status: 'successfully' });
          })
          .finally(this.setState({ loading: false }));
      } catch (error) {
        this.setState({ error, status: 'rejected' });
      }
    }
  }

  handlePage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1
    }))
  }

  render() {
    const { imagesArr,  status } = this.state;
    return (
      <div>
        {status === 'pending' && <Loader />}
        {status === 'rejected' && toast.error(`We can't find any images by your key-word`)}
        <ImageGalleryList>
        
        
        {status === 'successfully' && (<ImageGalleryItem images={imagesArr} />)}
        
      </ImageGalleryList>
      {imagesArr.length > 0 && status !== 'pending' && <Button onClick={ this.handlePage} />}
      </div>
    );
  }
}

export default ImageGallery;

//         <Button />
