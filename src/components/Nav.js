import React from 'react'

// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem } from 'reactstrap';

import { Link } from 'react-router-dom'

class InfoNav extends React.Component {
  render() {
    return(
      <nav className="second navbar">

        <span>{this.props.user}</span>
        <Link to="/index">Articles</Link> |
        <Link to="/newPost">New Article</Link>
        {/* <Link to="/showPost">Show Post</Link>
        <Link to="/update">Update</Link> */}

      </nav>
    )
  }
}
export default InfoNav
