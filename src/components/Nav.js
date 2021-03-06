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
  state = {
    hamburgerIcon: true
  }
  hamNav = ()=> {
    const hIcon = document.getElementById('hIcon')
    hIcon.classList.toggle('change')
    this.setState({

      hamburgerIcon: !this.state.hamburgerIcon
    })
  }
  render() {
    return(
<div>
  {
    this.state.hamburgerIcon ?
      <nav className="second navbar">
        {/* <span>{this.props.user}</span> */}
        <div id="hIcon" className="hamburgerIcon"
          onClick={this.hamNav}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </nav>
    :
    <nav className="second navbar">
      <div id="hIcon" className="hamburgerIcon"
        onClick={this.hamNav}>
        <div className="change bar1"></div>
        <div className="change bar2"></div>
        <div className="change bar3"></div>
      </div>
      <div></div>
      <div>
        <Link to="/index">Articles</Link>
        <Link to="/newPost">New Article</Link>
      </div>
    </nav>
  }
</div>


    )
  }
}
export default InfoNav
