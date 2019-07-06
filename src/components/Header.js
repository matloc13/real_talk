
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Login from './NewSession.js'
import RegisterUser from './RegisterUser.js'

class Header extends Component {

<<<<<<< HEAD
=======
  state = {
    user: {
      name: '',
      username: '',
      password: ''
    }
  }

>>>>>>> 57ae8657359322b5b3971106744387036793ed48
    handleSubmit = (event) => {
        event.preventDefault();
        fetch(this.props.baseURL + '/sessions', {
            method: 'DELETE'
        }).then(res => res.json())
        .then(resJson => {
<<<<<<< HEAD

=======
          console.log(resJson)
            this.setState({
                user: {
                  name: '',
                  username: '',
                  password: ''
                }
            })

            // this.props.getUser()
>>>>>>> 57ae8657359322b5b3971106744387036793ed48
        })
    }

    render () {
        return (
          <header>
<<<<<<< HEAD
            {
              this.props.currentUser ?
                <nav className="navbar">
                  <a className="btn" href="/"><h1>Real Talk</h1></a>
                  <h4 className="mr-n5">{this.props.currentUser.username}</h4>
                  <form onSubmit={this.handleSubmit}>
=======
            {console.log(this.props.user)}
            {
              // (this.props.user != null && this.props.user.username != '') 
              this.props.user ?
                <nav className="navbar">

                    <a className="btn" href="/"><h1>Real Talk</h1></a>
                    <h4 className="mr-n5">{this.props.user.username}</h4>
                    <form onSubmit={this.handleSubmit}>
>>>>>>> 57ae8657359322b5b3971106744387036793ed48
                    <input className="btn" type="submit" value="Logout" />
                  </form>
                </nav>
              :
              <nav className="navbar">
                <a className="btn" href="/"><h1>Real Talk</h1></a>
                <Router>
                  <Route path="/login" render={(props) => <Login {...props} baseURL={this.props.baseURL} handleChange={this.props.handleChange}/>}/>

<<<<<<< HEAD
                  <Link to="/login">Login</Link>
=======
                    <Link to="/login">Login</Link>
                    <Route path="/login" render={(props) => <Login {...props} baseURL={this.props.baseURL} handleChange={this.props.handleChange} username={this.props.username} password={this.props.password} getUser={this.props.getUser}/>}/>
>>>>>>> 57ae8657359322b5b3971106744387036793ed48

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
