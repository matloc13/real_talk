// THIS PAGE IS TOTALLY DEAD, MAN. GOOD WORK TO WHOMEVER MADE IT, THOUGH
// 
// import React from 'react'
// // import MyEditor from './MyEditor'
//
// class NewPost extends React.Component {
//     state = {
//         title: '',
//         blogPostBody: '',
//         author: ''
//     }
//
//     handleChange = (event) => {
//         this.setState({
//             [event.target.id]: event.target.value
//         })
//     }
//     handleSubmit = (event) => {
//         event.preventDefault();
//         fetch(this.props.baseURL + '/blogposts', {
//             method: 'POST',
//             body: JSON.stringify({
//                 title: this.state.title,
//                 blogPostBody: this.state.blogPostBody,
//                 author: this.state.author
//             }),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         }).then (res => res.json())
//         .then(resJson => {
//           this.props.addBlogPost(resJson)
//             this.setState({
//                 title: '',
//                 blogPostBody: '',
//                 author: ''
//             })
//
//         }).catch (error => console.error({'Error': error}))
//     }
//
//
//     render () {
//         return (
//             // <div>
//             //   <MyEditor />
//             // </div>
//         )
//     }
// }
//
// export default NewPost
