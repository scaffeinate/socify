import PropTypes from 'prop-types'
const Avatar = ({linkTo, avatar}) => (
  <a href={linkTo}>
    <img src={avatar || '/assets/avatar.png'} className='avatar'></img>
  </a>
)

Avatar.propTypes = {
  linkTo: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired
}

export default Avatar
