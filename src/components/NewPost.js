
import React from 'react'

class NewPost extends React.Component {
    state = {
        title: '',
        blogPostBody: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(this.props.baseURL + '/blogposts', {
            method: 'POST',
            body: JSON.stringify({
                title: this.state.title,
                blogPostBody: this.state.blogPostBody
            }),
            header: {
                'Content-Type': 'application/json'
            }
        }).then (res => res.json())
        .then(resJson => {
            this.props.addBlogPost(resJson)
            this.setState({
                title: '',
                blogPostBody: ''
            })
        }).catch (error => console.error({'Error': error}))
    }


    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" placeholder="Sample Title" onChange={this.handleChange} />


                    <label htmlFor="blogPostBody">Body</label>
                    <input type="textarea" name="blogPostBody" onChange={this.handleChange} />

                    <input type="submit" value="Submit New Post"/>
                </form>
            </div>
        )
    }
}

export default NewPost