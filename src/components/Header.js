
import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Header extends Component {

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(this.props.baseURL+ '/blogposts', {
            method: 'DELETE'
        }).then(res => res.json())
        .then(resJson => {

        })
    }

    render () {
        return (
                this.props.currentUser ?
                <nav className="navbar">
                  <a className="btn" href="/"><h1>Real Talk</h1></a>
                    <h4 className="mr-n5"></h4>
                    <form onSubmit={this.props.handleSubmit}>
                        <input className="btn" type="submit" value="Logout" />
                    </form>
                </nav>
                :
                <nav className="navbar">
                  <a className="btn" href="/"><h1>Real Talk</h1></a>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </nav>
        )
    }
}

export default Header
