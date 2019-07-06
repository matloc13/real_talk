import React from 'react'
import ReactDOM from 'react-dom'
import {
  Editor,
  EditorState,
  RichUtils,
  convertFromRaw,
  convertToRaw
} from 'draft-js'

class CommentEditor extends React.Component {
  state = {
    editorState: EditorState.createEmpty()
  }
  onChange = (editorState) => {
    this.setState({
      editorState
    })
  }
  render () {
    return (
      <div className="showDiv">
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
        />
        <button>Post Comment</button>
      </div>
    )
  }
}

export default CommentEditor;
