import React from 'react'
import ReactDOM from 'react-dom'
import {Editor,
        EditorState,
        RichUtils,
        convertToRaw,
        convertFromRaw} from 'draft-js'
// import './App.css'

class MyEditor extends React.Component {
  state = {
    editorState: EditorState.createEmpty()
  }
  saveContent = () => {
    const contentState = this.state.editorState.getCurrentContent()
    window.localStorage.setItem('content', JSON.stringify(convertToRaw(contentState)))
    console.log(window.localStorage)
  }

  onChange = (editorState) => {
    this.setState({
      editorState
    })
  }
  handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command)
    if (newState) {
      this.onChange(newState)
      return 'handled'
    }
    return 'not-handled'
  }
  _onBoldClick = () => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'))
  }
  render () {
    return (
      <div>
        <button onClick={this._onBoldClick}>Bold</button>
        <Editor
          editorState={this.state.editorState}
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.onChange}
        />
        <button onClick={this.saveContent}>SAVE</button>
      </div>
    )
  }
}


export default MyEditor;
