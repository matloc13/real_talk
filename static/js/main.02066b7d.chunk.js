(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{189:function(e,t,n){"use strict";n.r(t);n(88);var a=n(0),o=n.n(a),r=n(22),s=n.n(r),c=(n(93),n(84)),l=n(31),i=n(5),u=n(6),d=n(8),h=n(7),m=n(9),p=n(19),b=n(25),f=(n(94),n(4)),g=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={editorState:f.EditorState.createEmpty()},n.saveContent=function(){var e=n.state.editorState.getCurrentContent();console.log("Content State: ",e);var t=JSON.stringify(Object(f.convertToRaw)(e));console.log("Converted to Raw: ",t),fetch(n.props.baseURL+"/blogposts",{method:"POST",body:JSON.stringify({blogPostBody:t}),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){console.log("resJson: ",e),n.props.addBlogPost(e)}).catch(function(e){return console.error({Error:e})})},n.onChange=function(e){n.setState({editorState:e})},n.onBoldClick=function(){n.onChange(f.RichUtils.toggleInlineStyle(n.state.editorState,"BOLD"))},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"handleKeyCommand",value:function(e,t){var n=f.RichUtils.handleKeyCommand(t,e);return n?(this.onChange(n),"handled"):"not-handled"}},{key:"render",value:function(){return o.a.createElement("div",{className:"textEditorWrapper"},o.a.createElement("button",{onClick:this.onBoldClick},"Bold"),o.a.createElement(f.Editor,{className:"textEditor",editorState:this.state.editorState,handleKeyCommand:this.handleKeyCommand,onChange:this.onChange}),o.a.createElement("button",{onClick:this.saveContent,color:"primary",size:"sm"},"SAVE"))}}]),t}(o.a.Component),E=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).handleSubmit=function(e){e.preventDefault(),fetch(n.props.baseURL+"/blogposts",{method:"DELETE"}).then(function(e){return e.json()}).then(function(e){})},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return this.props.currentUser?o.a.createElement("nav",{className:"navbar"},o.a.createElement("a",{className:"btn",href:"/"},o.a.createElement("h1",null,"Real Talk")),o.a.createElement("h4",{className:"mr-n5"}),o.a.createElement("form",{onSubmit:this.props.handleSubmit},o.a.createElement("input",{className:"btn",type:"submit",value:"Logout"}))):o.a.createElement("nav",{className:"navbar"},o.a.createElement("a",{className:"btn",href:"/"},o.a.createElement("h1",null,"Real Talk")),o.a.createElement(p.b,{to:"/login"},"Login"),o.a.createElement(p.b,{to:"/register"},"Register"))}}]),t}(a.Component),v=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("nav",{className:"second navbar"},o.a.createElement("span",null,this.props.user),o.a.createElement(p.b,{to:"/index"},"Index"),o.a.createElement(p.b,{to:"/newPost"},"New"))}}]),t}(o.a.Component),O=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={editorState:f.EditorState.createWithContent(Object(f.convertFromRaw)(JSON.parse(n.props.content)))},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"showDiv"},o.a.createElement(f.Editor,{editorState:this.state.editorState,readOnly:!0}))}}]),t}(o.a.Component),j=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={editorState:f.EditorState.createWithContent(Object(f.convertFromRaw)(JSON.parse(n.props.content)))},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"showPost"},o.a.createElement("div",{className:"hidden"},this.props.content),o.a.createElement(f.Editor,{editorState:this.state.editorState}))}}]),t}(a.Component),C=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={editorState:f.EditorState.createWithContent(Object(f.convertFromRaw)(JSON.parse(n.props.content)))},n.onChange=function(e){n.setState({editorState:e})},n.saveUpdatedContent=function(){var e=n.state.editorState.getCurrentContent();console.log("Content State: ",e);var t=JSON.stringify(Object(f.convertToRaw)(e));console.log("Converted to Raw: ",t),fetch(n.props.baseURL+"/blogposts/"+n.props.post._id,{method:"PUT",body:JSON.stringify({blogPostBody:t}),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){var t=Object(l.a)(n.props.posts),a=n.props.posts.findIndex(function(t){return t._id===e._id});t[a].title=e.title,t[a].blogPostBody=e.blogPostBody,n.setState({blogPosts:t})}).catch(function(e){return console.error({Error:e})})},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"UpdatePost"},o.a.createElement("div",{className:"hidden"},this.props.content),o.a.createElement(f.Editor,{editorState:this.state.editorState,onChange:this.onChange}),o.a.createElement("button",{onClick:this.saveUpdatedContent},"SAVE"))}}]),t}(o.a.Component),y=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={name:"",username:"",password:""},n.handleSubmit=function(e){e.preventDefault(),fetch(n.props.baseURL+"/blogposts/",{method:"POST",body:JSON.stringify({name:n.state.name,username:n.state.username,password:n.state.password}),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){n.setState({name:"",username:"",password:""}),n.props.addUser(e)}).catch(function(e){return console.error({Error:e})})},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"container card"},o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"name",name:"name"},"Name:"),o.a.createElement("input",{name:"name",id:"name",type:"text",onChange:this.handleChange})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"username",name:"username"},"Username:"),o.a.createElement("input",{name:"username",id:"text",type:"text",onChange:this.handleChange})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"password",name:"password"},"Password:"),o.a.createElement("input",{name:"password",id:"password",type:"password",onChange:this.handleChange})),o.a.createElement("input",{type:"submit",value:"Create New User"})))}}]),t}(a.Component),P=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"container"},this.props.blogPosts.map(function(t){return o.a.createElement("div",{className:"indexItem",key:t._id},o.a.createElement("h2",{onClick:function(){return e.props.showPost(t)}},t.title),o.a.createElement("span",{onClick:function(){return e.props.deleteBlogPost(t._id)}},"X"),o.a.createElement(p.b,{to:"/update",onClick:function(){return e.props.showPost(t)}},"Edit "),o.a.createElement(p.b,{to:"/showPost",onClick:function(){return e.props.showPost(t)}},"All"),o.a.createElement(O,{content:t.blogPostBody}))}))}}]),t}(a.Component),S=(n(188),Object({NODE_ENV:"production",PUBLIC_URL:"/real_talk"}).REACT_APP_BASEURL);S="https://realtalkblog.herokuapp.com",console.log("Current Base URL: ",S);var w=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={users:[],blogPosts:[],blogPost:{},content:""},n.getBlogPosts=function(){fetch(S+"/blogposts").then(function(e){return console.log(e),e.json()},function(e){return console.error(e)}).then(function(e){return n.setState({blogPosts:e})},function(e){return console.error(e)})},n.addUser=function(e){var t=Object(l.a)(n.state.users);t.unshift(e),n.setState({users:t})},n.addBlogPost=function(e){var t=Object(l.a)(n.state.blogPosts);t.unshift(e),n.setState({blogPosts:t})},n.handleChange=function(e){n.setState(Object(c.a)({},e.target.id,e.target.value))},n.deleteBlogPost=function(e){fetch(S+"/blogposts/"+e,{method:"DELETE"}).then(function(t){var a=n.state.blogPosts.findIndex(function(t){return t._id===e}),o=Object(l.a)(n.state.blogPosts);o.splice(a,1),n.setState({blogPosts:o})})},n.showPost=function(e){var t=n.state.blogPosts.findIndex(function(t){return t._id===e._id}),a=n.state.blogPosts[t].blogPostBody;n.setState({blogPost:e,content:a})},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getBlogPosts()}},{key:"render",value:function(){var e=this;return o.a.createElement(p.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(E,null),o.a.createElement(v,{user:this.state.users.username}),o.a.createElement(b.c,null,o.a.createElement(b.a,{path:"/register",render:function(t){return o.a.createElement(y,Object.assign({},t,{handleChange:e.handleChange,baseURL:S,addUser:e.addUser}))}}),this.state.blogPosts?o.a.createElement(b.a,{path:"/index",render:function(t){return o.a.createElement(P,Object.assign({},t,{blogPosts:e.state.blogPosts,showPost:e.showPost,deleteBlogPost:e.deleteBlogPost}))}}):"no content",o.a.createElement(b.a,{path:"/newPost",render:function(t){return o.a.createElement(g,Object.assign({},t,{baseURL:S,addBlogPost:e.addBlogPost}))}}),o.a.createElement(b.a,{path:"/showPost",render:function(t){return o.a.createElement(j,Object.assign({},t,{post:e.state.blogPost,posts:e.state.blogPosts,content:e.state.content}))}}),o.a.createElement(b.a,{path:"/update",render:function(t){return o.a.createElement(C,Object.assign({},t,{post:e.state.blogPost,baseURL:S,posts:e.state.blogPosts,content:e.state.content,addBlogPost:e.addBlogPost}))}}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},87:function(e,t,n){e.exports=n(189)},93:function(e,t,n){},94:function(e,t,n){}},[[87,1,2]]]);
//# sourceMappingURL=main.02066b7d.chunk.js.map