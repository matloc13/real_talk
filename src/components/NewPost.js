
import React from 'react'

class NewPost extends React.Component {
    state = {
        title: '',
        blogPostBody: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(this.props.baseURL + '/blogposts', {
            method: 'POST',
            body: JSON.stringify({
                title: this.state.title,
                blogPostBody: this.state.blogPostBody
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then (res => res.json())
        .then(resJson => {
            this.setState({
                title: '',
                blogPostBody: ''
            })
            this.props.addBlogPost(resJson)
        }).catch (error => console.error({'Error': error}))
    }


    render () {
        return (
            <div>
              <form onSubmit={this.handleSubmit}>

                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  name="title"
                  placeholder="Sample Title"
                  id="title"
                  onChange={this.props.handleChange}

                />
                <input
                  type="hidden"
                  name="author"
                  id="author"
                  value="usertest"
                />
                {/* <input
                  type="date"
                  name="date"
                  id="date"
                value={()=> date.now()}/> */}

                <label htmlFor="blogPostBody">Body</label>
                <input
                  type="textarea"
                  name="blogPostBody"
                  id="blogPostBody"
                  onChange={this.props.handleChange}

                />



                    <input type="submit" value="Submit New Post"/>
                </form>
            </div>
        )
    }
}

export default NewPost
