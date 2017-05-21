import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import LeftSideBar from '../../components/LeftSideBar';
import RightSideBar from '../../components/RightSideBar';

const propTypes = {
  children: PropTypes.object.isRequired
};

const MainLayout = ({ children }) => (
  <Row>
    <Col xs={3}>
      <LeftSideBar user={{}} />
    </Col>
    <Col xs={6}>
      {children}
    </Col>
    <Col xs={3}>
      <RightSideBar user={{}} />
    </Col>
  </Row>
);

MainLayout.propTypes = propTypes;

export default MainLayout;
