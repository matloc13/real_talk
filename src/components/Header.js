
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Login from './NewSession.js'
import RegisterUser from './RegisterUser.js'

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
          <header>
            {
              this.props.currentUser ?
                <nav className="navbar">
                  <a className="btn" href="/"><h1>Real Talk</h1></a>
                  <h4 className="mr-n5">{this.props.currentUser.username}</h4>
                  <form onSubmit={this.handleSubmit}>
                    <input className="btn" type="submit" value="Logout" />
                  </form>
                </nav>
              :
              <nav className="navbar">
                <a className="btn" href="/"><h1>Real Talk</h1></a>
                <Router>
                  <Route path="/login" render={(props) => <Login {...props} baseURL={this.props.baseURL} handleChange={this.props.handleChange}/>}/>

                  <Link to="/login">Login</Link>

                  <Route path="/register" render={(props) => <RegisterUser {...props} handleChange={this.props.handleChange} baseURL={this.props.baseURL} addUser={this.props.addUser}/>}/>

                  <Link to="/register">Register</Link>


                </Router>
              </nav>
              </nav>
            }
              </header>

        )
    }
}

export default Header
