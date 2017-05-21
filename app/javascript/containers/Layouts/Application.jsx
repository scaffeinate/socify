import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import HeaderNavBar from '../../components/HeaderNavBar';

const propTypes = {
  children: PropTypes.object.isRequired,
  navItems: PropTypes.array
};

const defaultProps = {
  navItems: [
    { key: 0, name: 'Home', path: '/#/' },
    { key: 1, name: 'Profile', path: '/#/profile' }
  ]
};

const Application = ({ children, navItems }) => (
  <div>
    <HeaderNavBar navItems={navItems} />
    <Container>
      {children}
    </Container>
  </div>
);

Application.propTypes = propTypes;
Application.defaultProps = defaultProps;

export default Application;
