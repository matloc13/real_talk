import React from 'react'
import ReactDOM from 'react-dom'
import {
  Editor,
  EditorState,
  convertFromRaw,
  convertToRaw
} from 'draft-js'

class ShowEditor extends React.Component {
  state = {
    editorState: EditorState.createWithContent(
      convertFromRaw(JSON.parse(this.props.content))
    )
  }
  render () {
    return (
      <div>
        <Editor
          editorState={this.state.editorState}
        />
      </div>
    )
  }
}

export default ShowEditor;
