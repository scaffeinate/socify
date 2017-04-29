import PropTypes from 'prop-types';

const propTypes = {
  imgUrl: PropTypes.string.isRequired
};

export default ImageBackgroundDiv = (props) => (
  return <div className='preview' style={{backgroundImage: () => 'url(' + props.imgUrl + ')'}}></div>;
);

ImageBackgroundDiv.propTypes = propTypes;
