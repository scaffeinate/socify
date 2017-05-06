import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,
  Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './styles.css';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.dropdownToggle = this.dropdownToggle.bind(this);
    this.state = {
      isOpen: false,
      isDropdownOpen: false
    };
  }
  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }
  dropdownToggle() {
    this.setState({ isDropdownOpen: !this.state.isDropdownOpen });
  }
  render() {
    return (
      <div>
        <Navbar light toggleable fixed={'top'} color={'navbar-color'}>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href="/">Socify</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Sudhar</NavLink>
              </NavItem>
              <NavItem>
                <Dropdown isOpen={this.state.isDropdownOpen} toggle={this.dropdownToggle}>
                  <DropdownToggle caret>Profile</DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem><NavLink href="/">Edit Profile</NavLink></DropdownItem>
                    <DropdownItem><NavLink href="/">Change Password</NavLink></DropdownItem>
                    <DropdownItem><NavLink href="/">Logout</NavLink></DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
              <NavItem>
                <NavLink href="/">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Sign up</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Sign in</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

NavBar.propTypes = {
};


export default NavBar;
