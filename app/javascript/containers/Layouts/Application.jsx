import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import HeaderNavBar from '../../components/HeaderNavBar';
import { fetchCurrentUser } from '../../api/userApi';

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

class Application extends Component {
  componentDidMount() {
    fetchCurrentUser();
  }
  render() {
    return (
      <div>
        <HeaderNavBar navItems={this.props.navItems} />
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}

Application.propTypes = propTypes;
Application.defaultProps = defaultProps;

export default Application;
