import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import LeftSideBar from '../../components/LeftSideBar';
import RightSideBar from '../../components/RightSideBar';

const propTypes = {
  children: PropTypes.object.isRequired,
  linkItems: PropTypes.array
};

const defaultProps = {
  linkItems: [
    { value: 'Profile', key: 0, icon: 'icon-user', path: '/#/profile' },
    { value: 'Photo Albums', key: 1, icon: 'icon-picture', path: '/#/photo-albums' },
    { value: 'Friends', key: 2, icon: 'icon-users', path: '/#/friends' },
    { value: 'Edit Profile', key: 3, icon: 'icon-pencil', path: '/#/edit-profile' }
  ]
};

const ProfileSideBarLayout = ({ children, linkItems }) => (
  <Row>
    <Col xs={3}>
      <LeftSideBar user={{}} />
    </Col>
    <Col xs={6}>
      {children}
    </Col>
    <Col xs={3}>
      <RightSideBar linkItems={linkItems} />
    </Col>
  </Row>
);

ProfileSideBarLayout.propTypes = propTypes;
ProfileSideBarLayout.defaultProps = defaultProps;

export default ProfileSideBarLayout;
