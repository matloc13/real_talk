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
    const blogPostBody = JSON.stringify(convertToRaw(contentState))
    fetch(this.props.baseURL + '/blogposts', {
        method: 'POST',
        body: JSON.stringify({
            // title: this.state.title,
            blogPostBody: blogPostBody,
            // author: this.state.author
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then (res => res.json())
    .then(resJson => {
      console.log(resJson)
      const blogPostBody = convertFromRaw(JSON.parse(resJson))
      this.props.addBlogPost(blogPostBody)
      this.setState({
        editorState: this.state.editorState
      })
    }).catch (error => console.error({'Error': error}))
    // window.localStorage.setItem('content', JSON.stringify(convertToRaw(contentState)))
    // console.log(window.localStorage)
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
