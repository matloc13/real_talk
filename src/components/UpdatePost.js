import React from 'react'
import ReactDOM from 'react-dom'
import {Editor,
        EditorState,
        RichUtils,
        convertToRaw,
        convertFromRaw} from 'draft-js'

class UpdatePost extends React.Component {
  state = {
    editorState: EditorState.createWithContent(convertFromRaw(JSON.parse(this.props.content)))

  }

  onChange = (editorState) => {
    this.setState({
      editorState
    })
  }

    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     fetch(this.props.baseURL + '/blogposts/' + this.props.post._id, {
    //         method: 'PUT',
    //         body: JSON.stringify({
    //             title: this.state.title,
    //             blogPostBody: this.state.blogPostBody
    //         }),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     }).then (res => res.json())
    //     .then(resJson => {
    //       const copyBlogPosts = [...this.props.posts]
    //       const findIndex = this.props.posts.findIndex(post => post._id === resJson._id)
    //       copyBlogPosts[findIndex].title = resJson.title
    //       copyBlogPosts[findIndex].blogPostBody = resJson.blogPostBody
    //         this.props.addBlogPost(resJson)
    //         this.setState({
    //             blogPosts: copyBlogPosts
    //         })
    //     }).catch (error => console.error({'Error': error}))
    // }

    render () {
        return (
            <div className="UpdatePost">
              <div className="hidden">{this.props.content}</div>
              <Editor
                editorState={this.state.editorState}
                onChange={this.onChange}
              />
              <button onClick={this.saveContent}>SAVE</button>

            </div>
        )
    }
}

export default UpdatePost
