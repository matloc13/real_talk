
import React, {Component} from 'react'


class RegisterUser extends Component {
    state = {
        name: '',
        username: '',
        password: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(this.props.baseURL + '/blogposts/', {
            method: 'POST',
            body: JSON.stringify({
                name: this.state.name,
                username: this.state.username,
                password: this.state.password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(resJson => {
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
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name" name="name">Name:</label>
                        <input name="name" type="text" onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="username" name="username">Username:</label>
                        <input name="username" type="text" onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password" name="password">Password:</label>
                        <input name="password" type="password" onChange={this.handleChange} />
                    </div>
                    

                    <input type="submit" value="Create New User" />
                </form>
            </div>
        )
    }
}


export default RegisterUser