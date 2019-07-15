import React from 'react'
// import ReactDOM from 'react-dom'
import {Editor,
        EditorState,
        // RichUtils,
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

  saveUpdatedContent = () => {
    const contentState = this.state.editorState.getCurrentContent()
    console.log("Content State: ", contentState)
    const blogPostBody = JSON.stringify(convertToRaw(contentState))
    console.log("Converted to Raw: ", blogPostBody)
    fetch(this.props.baseURL + '/blogposts/' + this.props.post._id, {
        method: 'PUT',
        body: JSON.stringify({
          blogPostBody
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
        this.setState({
            blogPosts: copyBlogPosts
        })
    }).catch (error => console.error({'Error': error}))
  }

    render () {
        return (
            <div className="UpdatePost">
              <div className="hidden">{this.props.content}</div>
              <button onClick={this.saveUpdatedContent}>SAVE</button>
              <Editor
                editorState={this.state.editorState}
                onChange={this.onChange}
              />
              {/* <button onClick={this.saveUpdatedContent}>SAVE</button> */}

            </div>
        )
    }
}

export default UpdatePost
