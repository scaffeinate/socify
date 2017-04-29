import PropTypes from 'prop-types';

const propTypes = {
  src: PropTypes.string.isRequired,
  clsName: PropTypes.string
};

export default ImagePreview = (props) => (
  <div className={props.src ? (props.clsName || 'img-preview') : 'hidden'}>
    <img src={props.src}></img>
  </div>
);

ImagePreview.propTypes = propTypes;
