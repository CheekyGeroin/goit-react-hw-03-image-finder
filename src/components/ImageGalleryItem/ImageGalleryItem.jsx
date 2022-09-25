import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ id, tags, largeImage, smallImage }) => {
  return (
    <li key={id}>
      <img src={smallImage} alt={tags} />
    </li>
  )

}

// ImageGalleryItem.propTypes = {
//   images: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//   smallImage: PropTypes.string.isRequired,
//   largeImage: PropTypes.string.isRequired,
//   tags: PropTypes.string.isRequired,
      
//     }),
//   ),
  
// };
