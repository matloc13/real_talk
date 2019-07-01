
import React from 'react'

class UpdatePost extends React.Component {
    state = {
        title: '',
        blogPostBody: ''
    }

    componentDidMount () {
        this.setState({
            title: this.props.title,
            blogPostBody: this.props.blogPostBody
        })
    }

    handleSubmit = (event) => {

        // event.preventDefault();
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
          const copyBlogPosts = [...this.props.post]
          const findIndex = this.props.posts.findIndex(post => post._id === resJson._id)
          copyBlogPosts[findIndex].title = resJson.title
          copyBlogPosts[findIndex].blogPostBody = resJson.blogPostBody
            this.setState({
                posts: copyBlogPosts
            })
        }).catch (error => console.error({'Error': error}))
        this.props.getBlogPosts();
    }

    render () {
        return (
            <div>
              <form onSubmit={this.handleSubmit}>

                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  defaultValue ={this.props.post.title}
                  onChange={this.handleChange}/>


                <label htmlFor="blogPostBody">Body</label>
                <input
                  type="textarea"
                  name="blogPostBody"
                  id="blogPostBody"
                  defaultValue={this.props.post.blogPostBody}
                  onChange={this.handleChange}
                />

                    <input type="submit" value="Submit changes"/>
                </form>
            </div>
        )
    }
}

export default UpdatePost
