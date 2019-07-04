
import React from 'react'

class UpdatePost extends React.Component {
    state = {
        title: '',
        blogPostBody: ''

    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(this.props.baseURL + '/blogposts/' + this.props.post._id, {
            method: 'PUT',
            body: JSON.stringify({
                title: this.state.title,
                blogPostBody: this.state.blogPostBody
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then (res => res.json())
        .then(resJson => {
          const copyBlogPosts = [...this.props.posts]
          const findIndex = this.props.posts.findIndex(post => post._id === resJson._id)
          copyBlogPosts[findIndex].title = resJson.title
          copyBlogPosts[findIndex].blogPostBody = resJson.blogPostBody
            this.props.addBlogPost(resJson)
            this.setState({
                blogPosts: copyBlogPosts
            })
        }).catch (error => console.error({'Error': error}))
    }

    componentDidMount () {
      this.setState({
        title: this.props.post.title,
        blogPostBody: this.props.post.blogPostBody
      })
    }

    render () {
        return (
            <div className="UpdatePost">
              <form onSubmit={this.handleSubmit}>

                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  name="title"
                  defaultValue={this.props.post.title}
                  // value={this.state.title}
                  id="title"
                  onChange={this.handleChange}
                />

                <label htmlFor="blogPostBody">Body</label>
                <input
                  type="textarea"
                  name="blogPostBody"
                  defaultValue={this.props.post.blogPostBody}
                  // value={this.state.blogPostBody}
                  id="blogPostBody"
                  onChange={this.handleChange}
                />
                <input type="submit" value="Submit changes"/>

                </form>
            </div>
        )
    }
}

export default UpdatePost
