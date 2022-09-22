import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ images }) => {
  return (
      images.map(({ id, webformatURL, largeImageURL }) => {
          <li key={id}>
            <img src={webformatURL} alt={id} />
        </li>
    })
  );
};

// ImageGalleryItem.propTypes = {
//   id: PropTypes.number.isRequired,
//   smallImage: PropTypes.string.isRequired,
//   largeImage: PropTypes.string.isRequired,
// };
