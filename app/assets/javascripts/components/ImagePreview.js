import PropTypes from 'prop-types'
const ImagePreview = ({src, clsName}) => (
  <div className={src ? (clsName || 'img-preview') : 'hidden'}>
    <img src={src}></img>
  </div>
)

ImagePreview.propTypes = {
  src: PropTypes.string.isRequired,
  clsName: PropTypes.string
}

export default ImagePreview;
