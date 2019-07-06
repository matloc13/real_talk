import React, { Component } from 'react'
import {
  Editor,
  EditorState,
  convertFromRaw,
  // convertToRaw
} from 'draft-js'
// import ShowEditor from './ShowEditor.js'

class ShowPost extends Component {

state = {
  editorState: EditorState.createWithContent(convertFromRaw(JSON.parse(this.props.content)))
}
// componentDidMount() {
//   this.findPost(this.props.post)
// }
// findPost = (post) => {
//   const copyBlogPosts = [...this.props.posts]
//   const findIndex = this.props.posts.findIndex(blogpost => blogpost._id === post._id)
//
//   copyBlogPosts[findIndex].blogPostBody
//   this.setState({
//     thispost:
//   })
// }

  render() {
    return (
      <div className="showPost">
        {/* <h2>{this.props.post.title}</h2> */}
        {/* <p>{this.props.post.blogPostBody}</p> */}
        {/* {console.log(this.props.post.blogPostBody)} */}
        <div className="hidden">{this.props.content}</div>
        <Editor
          editorState={this.state.editorState}
        />


      </div>
    )
  }
}

export default ShowPost
