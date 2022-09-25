// import PropTypes from 'prop-types';
import { Component } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Loader } from '../Loader/Loader';
// import { Button } from '../Button/Button';
import api from '../api/Image-api';
import { toast } from 'react-toastify';

class ImageGallery extends Component {
  state = {
    imagesArr: [],
    page: 1,
    loading: false,
    error: null,
  };
  componentDidMount() {
    const { page, imagesArr } = this.state;
    const {item} =this.props
    try {
        this.setState({loading: true})
      api.fetchImages(item, page).then((images) => {
        console.log(images.hits)
        for (let i = 0; i <= images.hits.length; i += 1){
          console.log(i.id)
        }
        
        }).finally( this.setState({loading: false}))
      } catch (error) {
        this.setState({error})
    }
    }
    


  render() {
    const { imagesArr, loading, error } = this.state;
    return (<div>
      {loading && <Loader />}
      {error && toast.error(`We can't find any images by your ke`)}
          <ImageGalleryItem  images={imagesArr} />

    </div>
        
    )
  }
}

export default ImageGallery;

//         <Button />