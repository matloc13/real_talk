import React, { useState } from 'react'

import { Link } from ' react-router-dom'

class Nav extends React.Component {
  render() {
    return(
      <nav>
        <Link to="/">Index</Link>
        <Link to="/newPost">New</Link>

      </nav>
    )
  }
}
