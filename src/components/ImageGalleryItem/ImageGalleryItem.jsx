import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ images }) => {
  return (
      images.map(({ id, webformatURL, largeImageURL, tags }) => {
          <li key={id}>
            <img src={webformatURL} alt={tags} />
        </li>
    })
  );
};

// ImageGalleryItem.propTypes = {
//   id: PropTypes.number.isRequired,
//   smallImage: PropTypes.string.isRequired,
//   largeImage: PropTypes.string.isRequired,
// };
