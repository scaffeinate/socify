import React from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.object.isRequired
};

const MainLayout = ({ children }) => (
  <Row>
    <Col xs={12}>
      {children}
    </Col>
  </Row>
);

MainLayout.propTypes = propTypes;

export default MainLayout;
