import React from 'react'
import ReactDOM from 'react-dom'
import {Editor,
        EditorState,
        RichUtils,
        convertToRaw,
        convertFromRaw} from 'draft-js'

import { Button } from 'reactstrap';

// import './App.css'

class MyEditor extends React.Component {
  state = {
    editorState: EditorState.createEmpty()
  }
  saveContent = () => {
    const contentState = this.state.editorState.getCurrentContent()
    console.log("Content State: ", contentState)
    const blogPostBody = JSON.stringify(convertToRaw(contentState))
    console.log("Converted to Raw: ", blogPostBody)
    fetch(this.props.baseURL + '/blogposts', {
        method: 'POST',
        body: JSON.stringify({
          blogPostBody
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .then(resJson => {
      console.log("resJson: ", resJson)
      this.props.addBlogPost(resJson)
    }).catch (error => console.error({'Error': error}))
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
  onBoldClick = () => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState,'BOLD'))
  }
  render () {
    return (
      <div className="textEditorWrapper">
        <button onClick={this.onBoldClick}>Bold</button>
        <Editor
          className="textEditor"
          editorState={this.state.editorState}
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.onChange}
        />
        <button onClick={this.saveContent} color="primary" size="sm">SAVE</button>
      </div>
    )
  }
}


export default MyEditor;
