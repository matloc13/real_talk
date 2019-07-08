import React from 'react'
// import ReactDOM from 'react-dom'
import {
  Editor,
  EditorState,
  // RichUtils,
  convertFromRaw
  // convertToRaw
} from 'draft-js'
import CommentEditor from './Comment'

class ShowEditor extends React.Component {
  state = {
    editorState: EditorState.createWithContent(convertFromRaw(JSON.parse(this.props.content))),
    addComment: false
  }
  toggleAddComment = () => {
    this.setState({
      addComment: !this.state.addComment
    })
  }
  render () {
    return (
      <div className="showDiv">
        <Editor
          editorState={this.state.editorState}
          readOnly={true}
        />
        <button onClick={this.toggleAddComment}>Comment</button>
        {this.state.addComment ? <CommentEditor /> : null}
      </div>
    )
  }
}

export default ShowEditor;
