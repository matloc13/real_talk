
import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Login from './NewSession.js'
import RegisterUser from './RegisterUser.js'

class Header extends Component {

  state = {
    user: {
      name: '',
      username: '',
      password: ''
    }
  }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(this.props.baseURL + '/sessions', {
            method: 'DELETE'
        }).then(res => res.json())
        .then(resJson => {
          console.log(resJson)
            this.setState({
                user: {
                  name: '',
                  username: '',
                  password: ''
                }
            })

            // this.props.getUser()
        })
    }

    render () {
        return (
          <header>
            {console.log(this.props.user)}
            {
              // (this.props.user != null && this.props.user.username != '') 
              this.props.user ?
                <nav className="navbar">
                    <a className="btn" href="/"><h1>Real Talk</h1></a>
                    <h4 className="mr-n5">{this.props.user.username}</h4>
                    <form onSubmit={this.handleSubmit}>
                    <input className="btn" type="submit" value="Logout" />
                    </form>
                </nav>
              :
              <nav className="navbar">
                <a className="btn" href="/"><h1>Real Talk</h1></a>
                <Router>

                    <Link to="/login">Login</Link>
                    <Route path="/login" render={(props) => <Login {...props} baseURL={this.props.baseURL} handleChange={this.props.handleChange} username={this.props.username} password={this.props.password} getUser={this.props.getUser}/>}/>


                    <Link to="/register">Register</Link>
                    <Route path="/register" render={(props) => <RegisterUser {...props} handleChange={this.props.handleChange} baseURL={this.props.baseURL} addUser={this.props.addUser} name={this.props.name} username={this.props.username} password={this.props.password}/>}/>

                </Router>
              </nav>
            }
          </header>
        )
    }
}

export default Header
