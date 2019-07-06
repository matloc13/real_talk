import React, { Component } from 'react'
import {
  Editor,
  EditorState,
  convertFromRaw,
  convertToRaw
} from 'draft-js'
import ShowEditor from './ShowEditor.js'

class ShowPost extends Component {

// state = {
//   editorState: EditorState.createWithContent(convertFromRaw(JSON.parse(this.props.post.blogPostBody)))
// }
componentDidMount() {
  this.findPost
}
findPost = () => {
  
}

  render() {
    return (
      <div className="showPost">
        {/* <h2>{this.props.post.title}</h2> */}
        <p>{this.props.post.blogPostBody}</p>
        {console.log(this.props.post.blogPostBody)}
        {/* <Editor
          editorState={this.state.editorState}
        /> */}


      </div>
    )
  }
}

export default ShowPost
