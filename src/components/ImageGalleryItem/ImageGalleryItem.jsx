import PropTypes from 'prop-types';
import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ images }) => {
  return images.map(image => {
    return <GalleryItem key={image.id}>
      <GalleryImage src={image.webformatURL} alt={image.tags} />
    </GalleryItem>
  })
  
    
 

}

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
  webformatURL:PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
      
    }),
  ),
  
};
