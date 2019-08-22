import React from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import MeetStaff from './MeetStaff';

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
        <Navbar color='light' light expand='md'>
          <NavbarBrand to='/'>Loving Heart</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink tag={Link} to='/staff'>
                  Meet the staff
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to='/'>
                  Contact us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to='/Pictures'>
                  Pictures
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to=''>Availability</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
