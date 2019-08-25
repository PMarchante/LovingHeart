import React from "react";
import { Link } from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className='navbar navbar-dark bg-primary' light expand='md'>
          <NavbarBrand tag={Link} to='/'>
            Loving Heart
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink className='navLink' tag={Link} to='/staff'>
                  Meet the staff
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='navLink' tag={Link} to='/contact'>
                  Contact us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='navLink' tag={Link} to='/pictures'>
                  Pictures
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='navLink' tag={Link} to='/availability'>
                  Availability
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
