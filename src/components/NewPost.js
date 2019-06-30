
import React from 'react'

class NewPost extends React.Component {
    state = {
        title: '',
        blogPostBody: '',
        author: ''
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
                blogPostBody: this.state.blogPostBody,
                author: this.state.author
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then (res => res.json())
        .then(resJson => {
          this.props.addBlogPost(resJson)
            this.setState({
                title: '',
                blogPostBody: '',
                author: ''
            })

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
                  onChange={this.handleChange}
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
                <textarea
                  type="textarea"
                  name="blogPostBody"
                  id="blogPostBody"
                  onChange={this.handleChange}

                ></textarea>



                    <input type="submit" value="Submit New Post"/>
                </form>
            </div>
        )
    }
}

export default NewPost
