import PropTypes from 'prop-types';

const propTypes = {
  html: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default LinkPreview = (props) => (
  <div className={props.html ? 'link-preview' : 'link-preview hidden'}>
    <div className="onebox-preview form-group" dangerouslySetInnerHTML={{__html: props.html}}></div>
    <input type="hidden" name={props.name} value={props.html}/>
  </div>
);

LinkPreview.propTypes = propTypes;
