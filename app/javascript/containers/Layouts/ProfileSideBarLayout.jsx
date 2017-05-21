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
    { label: 'Profile', key: 1, icon: 'icon-user', path: '/' },
    { label: 'Photo Albums', key: 2, icon: 'icon-picture', path: '/' },
    { label: 'Friends', key: 3, icon: 'icon-users', path: '/' },
    { label: 'Edit Profile', key: 4, icon: 'icon-pencil', path: '/' }
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
