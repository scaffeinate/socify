import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Input } from 'reactstrap';
import HeaderNav from './HeaderNav';
import './styles.css';

const propTypes = {
  navItems: PropTypes.array
};

const defaultProps = {
  navItems: []
};

class HeaderNavBar extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }
  render() {
    return (
      <div>
        <Navbar light toggleable fixed={'top'} color={'navbar-color'}>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href="/#/">Socify</NavbarBrand>
          <Input type="text" name="search" placeholder="Search" />
          <Collapse isOpen={this.state.isOpen} navbar>
            <HeaderNav navItems={this.props.navItems} />
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

HeaderNavBar.propTypes = propTypes;
HeaderNavBar.defaultProps = defaultProps;

export default HeaderNavBar;
