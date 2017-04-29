import PropTypes from 'prop-types';

const propTypes = {
  linkTo: PropTypes.string.isRequired,
  avatar: PropTypes.string
};

export default Avatar = (props) => (
  <a href={props.linkTo}>
    <img src={props.avatar || '/assets/avatar.png'} className="avatar"></img>
  </a>
);

Avatar.propTypes = propTypes;
