
import React, {Component} from 'react'


class NewSession extends Component {

    state = {
        currentUser: '',
        username: '',
        password: '',
        redirect: false
    }

    // setRedirect = () => {
    //     this.setState({
    //         redirect: true
    //     })
    // }

    // renderRedirect = () => {
    //     if (this.state.redirect) {
    //         return <Redirect to='/' />
    //     }
    // }


    handleSubmit = (event) => {
        event.preventDefault();
        fetch(this.props.baseURL + '/sessions', {
            method: 'POST',
            body: JSON.stringify({
                username: this.props.username,
                password: this.props.password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(resJson => {

            this.setState({
                currentUser: resJson.currentUser,
                username: resJson.username,
                password: resJson.password
            })
            this.props.getUser(this.state.currentUser)
            console.log(resJson.username)
            console.log(resJson.currentUser)
            // this.props.history.push('/')
        })
        // .catch(error => console.error({'Error': error}))
    }


    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username" name="username">Username:</label>
                    <input name="username" id="username" type="text" onChange={this.props.handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="password" name="password">Password:</label>
                    <input name="password" id="password" type="password" onChange={this.props.handleChange} />
                </div>


                <input type="submit" value="Login" />
            </form>

        )
    }
}


export default NewSession
