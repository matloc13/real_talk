import React from 'react'
import ReactDOM from 'react-dom'
import {
  Editor,
  EditorState,
  RichUtils,
  convertFromRaw,
  convertToRaw
} from 'draft-js'

class ShowEditor extends React.Component {
  state = {
    editorState: EditorState.createWithContent(convertFromRaw(JSON.parse(this.props.content))
      //I believe a "decorator" needs to be declared here to fix formattting
    )
  }
  render () {
    return (
      <div className="showDiv">
        <Editor
          editorState={this.state.editorState}
          readOnly={true}
        />
      </div>
    )
  }
}

export default ShowEditor;
