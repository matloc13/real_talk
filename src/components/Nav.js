import React from 'react'

import { Link } from 'react-router-dom'

class Nav extends React.Component {
  render() {
    return(
      <nav className="navbar">
        <span>{this.props.user}</span>
        <Link to="/index">Index</Link>
        <Link to="/newPost">New</Link>
        <Link to="/showPost">Show Post</Link>
        <Link to="/update">Update</Link>
      </nav>
    )
  }
}
export default Nav
