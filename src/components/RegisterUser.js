
import React, {Component} from 'react'
// import {Redirect} from 'react-router-dom'


class RegisterUser extends Component {
    state = {
        name: '',
        username: '',
        password: '',
        redirect: false
    }

    // renderRedirect = () => {
    //     if (this.state.redirect) {
    //         return <Redirect to='/' />
    //     }
    // }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(this.props.baseURL + '/users', {
            method: 'POST',
            body: JSON.stringify({
                name: this.props.name,
                username: this.props.username,
                password: this.props.password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(resJson => {
            // console.log(resJson.name)
            this.setState({
                name: '',
                username: '',
                password: '',
            })
            this.props.addUser(resJson)
        }).catch(error => console.error({'Error': error}))

    }

    render () {
        return (
            <div className="container card">
                <form className="m-2" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name" name="name">Name:</label>
                        <input name="name" id="name" type="text" onChange={this.props.handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="username" name="username">Username:</label>
                        <input name="username" id="username" type="text" onChange={this.props.handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password" name="password">Password:</label>
                        <input name="password" id="password" type="password" onChange={this.props.handleChange}/>
                    </div>


                    <input type="submit" value="Create New User" />
                </form>
            </div>
        )
    }
}


export default RegisterUser
