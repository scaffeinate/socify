import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import LeftSideBar from '../../components/LeftSideBar';
import RightSideBar from '../../components/RightSideBar';

const propTypes = {
  children: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired,
  linkItems: PropTypes.array
};

const defaultProps = {
  linkItems: [
    { value: 'NewsFeed', key: 0, icon: 'icon-newspaper', path: '/' },
    { value: 'Events', key: 1, icon: 'icon-calendar-empty', path: '/' },
    { value: 'Photo Albums', key: 2, icon: 'icon-picture', path: '/' },
    { value: 'Friends', key: 3, icon: 'icon-users', path: '/' },
    { value: 'Find Friends', key: 4, icon: 'icon-search', path: '/' }
  ]
};

const SideBarLayout = ({ children, currentUser, linkItems }) => (
  <Row>
    <Col xs={3}>
      <LeftSideBar user={currentUser} />
    </Col>
    <Col xs={6}>
      {children}
    </Col>
    <Col xs={3}>
      <RightSideBar linkItems={linkItems} />
    </Col>
  </Row>
);

const mapStateToProps = function (store) {
  return {
    currentUser: store.userState.currentUser
  };
};

SideBarLayout.propTypes = propTypes;
SideBarLayout.defaultProps = defaultProps;

export default connect(mapStateToProps)(SideBarLayout);
