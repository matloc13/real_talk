import React, { Component } from 'react'

import ShowEditor from './ShowEditor.js'

class ShowPost extends Component {

// componentDidMount() {
//   this.setState({
//     post: this.props.post
//   })
// }

  render() {
    return (
      <div className="showPost">
        {/* <h2>{this.props.post.title}</h2> */}
        <p>{this.props.post.blogPostBody}</p>

        {/* <ShowEditor
          content={this.state.post.blogPostBody}
        /> */}


      </div>
    )
  }
}

export default ShowPost
