import React from 'react'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import { Link } from 'react-router-dom'

class InfoNav extends React.Component {
  render() {
    return(
      <nav className="navbar">
        <NavbarToggler onClick={this.toggle} />
        <span>{this.props.user}</span>
        <Link to="/index">Index</Link>
        <Link to="/newPost">New</Link>
        <Link to="/showPost">Show Post</Link>
        <Link to="/update">Update</Link>
      </nav>
    )
  }
}
export default InfoNav
