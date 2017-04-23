import PropTypes from 'prop-types'
const LinkPreview = ({html, name}) => (
  <div className={html
    ? "link-preview"
    : "link-preview hidden"}>
    <div className="onebox-preview form-group" dangerouslySetInnerHTML={{
      __html: html
    }}></div>
    <input type="hidden" name={name} value={html}/>
  </div>
)

LinkPreview.propTypes = {
  html: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default LinkPreview;
