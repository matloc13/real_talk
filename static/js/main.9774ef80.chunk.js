(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{188:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(22),s=n.n(o),c=(n(92),n(84)),l=n(31),i=n(4),u=n(5),p=n(7),d=n(6),m=n(8),h=n(16),b=n(25),g=(n(93),n(9)),f=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={editorState:g.EditorState.createEmpty()},n.saveContent=function(){var e=n.state.editorState.getCurrentContent();console.log("Content State: ",e);var t=JSON.stringify(Object(g.convertToRaw)(e));console.log("Converted to Raw: ",t),fetch(n.props.baseURL+"/blogposts",{method:"POST",body:JSON.stringify({blogPostBody:t}),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){console.log("resJson: ",e),n.props.addBlogPost(e)}).catch(function(e){return console.error({Error:e})})},n.onChange=function(e){n.setState({editorState:e})},n.onBoldClick=function(){n.onChange(g.RichUtils.toggleInlineStyle(n.state.editorState,"BOLD"))},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"handleKeyCommand",value:function(e,t){var n=g.RichUtils.handleKeyCommand(t,e);return n?(this.onChange(n),"handled"):"not-handled"}},{key:"render",value:function(){return r.a.createElement("div",{className:"textEditorWrapper"},r.a.createElement("button",{onClick:this.onBoldClick},"Bold"),r.a.createElement(g.Editor,{className:"textEditor",editorState:this.state.editorState,handleKeyCommand:this.handleKeyCommand,onChange:this.onChange}),r.a.createElement("button",{onClick:this.saveContent,color:"primary",size:"sm"},"SAVE"))}}]),t}(r.a.Component),E=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={currentUser:"",username:"",password:"",redirect:!1},n.handleSubmit=function(e){e.preventDefault(),fetch(n.props.baseURL+"/sessions",{method:"POST",body:JSON.stringify({username:n.props.username,password:n.props.password}),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){n.setState({currentUser:e.currentUser,username:e.username,password:e.password}),console.log(e.username),console.log(e.currentUser)})},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username",name:"username"},"Username:"),r.a.createElement("input",{name:"username",id:"username",type:"text",onChange:this.props.handleChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password",name:"password"},"Password:"),r.a.createElement("input",{name:"password",id:"password",type:"password",onChange:this.props.handleChange})),r.a.createElement("input",{type:"submit",value:"Login"}))}}]),t}(a.Component),v=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",username:"",password:"",redirect:!1},n.handleSubmit=function(e){e.preventDefault(),fetch(n.props.baseURL+"/users",{method:"POST",body:JSON.stringify({name:n.props.name,username:n.props.username,password:n.props.password}),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){n.setState({name:"",username:"",password:""}),n.props.addUser(e)}).catch(function(e){return console.error({Error:e})})},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container card"},r.a.createElement("form",{className:"m-2",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name",name:"name"},"Name:"),r.a.createElement("input",{name:"name",id:"name",type:"text",onChange:this.props.handleChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username",name:"username"},"Username:"),r.a.createElement("input",{name:"username",id:"username",type:"text",onChange:this.props.handleChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password",name:"password"},"Password:"),r.a.createElement("input",{name:"password",id:"password",type:"password",onChange:this.props.handleChange})),r.a.createElement("input",{type:"submit",value:"Create New User"})))}}]),t}(a.Component),O=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={user:{name:"",username:"",password:""}},n.handleSubmit=function(e){e.preventDefault(),fetch(n.props.baseURL+"/sessions",{method:"DELETE"}).then(function(e){return e.json()}).then(function(e){console.log(e),n.setState({user:{name:"",username:"",password:""}})})},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("header",null,console.log(this.props.user),this.props.user?r.a.createElement("nav",{className:"navbar"},r.a.createElement("a",{className:"btn",href:"/"},r.a.createElement("h1",null,"Real Talk")),r.a.createElement("h4",{className:"mr-n5"},this.props.user.username),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{className:"btn",type:"submit",value:"Logout"}))):r.a.createElement("nav",{className:"navbar"},r.a.createElement("a",{className:"btn",href:"/"},r.a.createElement("h1",null,"Real Talk")),r.a.createElement(h.a,null,r.a.createElement(b.a,{path:"/login",render:function(t){return r.a.createElement(E,Object.assign({},t,{baseURL:e.props.baseURL,handleChange:e.props.handleChange}))}}),r.a.createElement(h.b,{to:"/login"},"Login"),r.a.createElement(b.a,{path:"/login",render:function(t){return r.a.createElement(E,Object.assign({},t,{baseURL:e.props.baseURL,handleChange:e.props.handleChange,username:e.props.username,password:e.props.password,getUser:e.props.getUser}))}}),r.a.createElement(b.a,{path:"/register",render:function(t){return r.a.createElement(v,Object.assign({},t,{handleChange:e.props.handleChange,baseURL:e.props.baseURL,addUser:e.props.addUser}))}}),r.a.createElement(h.b,{to:"/register"},"Register"))))}}]),t}(a.Component),j=function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"second navbar"},r.a.createElement("span",null,this.props.user),r.a.createElement(h.b,{to:"/index"},"Index"),r.a.createElement(h.b,{to:"/newPost"},"New"))}}]),t}(r.a.Component),C=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={editorState:g.EditorState.createWithContent(Object(g.convertFromRaw)(JSON.parse(n.props.content)))},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"showDiv"},r.a.createElement(g.Editor,{editorState:this.state.editorState,readOnly:!0}))}}]),t}(r.a.Component),y=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={editorState:g.EditorState.createWithContent(Object(g.convertFromRaw)(JSON.parse(n.props.content)))},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"showPost"},r.a.createElement("div",{className:"hidden"},this.props.content),r.a.createElement(g.Editor,{editorState:this.state.editorState}))}}]),t}(a.Component),w=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={editorState:g.EditorState.createWithContent(Object(g.convertFromRaw)(JSON.parse(n.props.content)))},n.onChange=function(e){n.setState({editorState:e})},n.saveUpdatedContent=function(){var e=n.state.editorState.getCurrentContent();console.log("Content State: ",e);var t=JSON.stringify(Object(g.convertToRaw)(e));console.log("Converted to Raw: ",t),fetch(n.props.baseURL+"/blogposts/"+n.props.post._id,{method:"PUT",body:JSON.stringify({blogPostBody:t}),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){var t=Object(l.a)(n.props.posts),a=n.props.posts.findIndex(function(t){return t._id===e._id});t[a].title=e.title,t[a].blogPostBody=e.blogPostBody,n.setState({blogPosts:t})}).catch(function(e){return console.error({Error:e})})},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"UpdatePost"},r.a.createElement("div",{className:"hidden"},this.props.content),r.a.createElement(g.Editor,{editorState:this.state.editorState,onChange:this.onChange}),r.a.createElement("button",{onClick:this.saveUpdatedContent},"SAVE"))}}]),t}(r.a.Component),S=function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},this.props.blogPosts.map(function(t){return r.a.createElement("div",{className:"indexItem",key:t._id},r.a.createElement("h2",{onClick:function(){return e.props.showPost(t)}},t.title),r.a.createElement("span",{onClick:function(){return e.props.deleteBlogPost(t._id)}},"X"),r.a.createElement(h.b,{to:"/update",onClick:function(){return e.props.showPost(t)}},"Edit "),r.a.createElement(h.b,{to:"/showPost",onClick:function(){return e.props.showPost(t)}},"All"),r.a.createElement(C,{content:t.blogPostBody}))}))}}]),t}(a.Component),P=(n(187),Object({NODE_ENV:"production",PUBLIC_URL:"/real_talk"}).REACT_APP_BASEURL);P="https://realtalkblog.herokuapp.com",console.log("Current Base URL: ",P);var U=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={users:[],user:{name:"",username:"",password:""},blogPosts:[],blogPost:{},content:""},n.getBlogPosts=function(){fetch(P+"/blogposts").then(function(e){return console.log(e),e.json()},function(e){return console.error(e)}).then(function(e){return n.setState({blogPosts:e})},function(e){return console.error(e)})},n.getUser=function(e){fetch(P+"/users/"+e).then(function(e){return console.log(e),e.json()},function(e){return console.error(e)}).then(function(e){return n.setState({user:e})},function(e){return console.error(e)})},n.addUser=function(e){var t=Object(l.a)(n.state.users);t.unshift(e),n.setState({users:t})},n.addBlogPost=function(e){var t=Object(l.a)(n.state.blogPosts);t.unshift(e),n.setState({blogPosts:t})},n.handleChange=function(e){n.setState(Object(c.a)({},e.target.id,e.target.value))},n.deleteBlogPost=function(e){fetch(P+"/blogposts/"+e,{method:"DELETE"}).then(function(t){var a=n.state.blogPosts.findIndex(function(t){return t._id===e}),r=Object(l.a)(n.state.blogPosts);r.splice(a,1),n.setState({blogPosts:r})})},n.showPost=function(e){var t=n.state.blogPosts.findIndex(function(t){return t._id===e._id}),a=n.state.blogPosts[t].blogPostBody;n.setState({blogPost:e,content:a})},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getBlogPosts()}},{key:"render",value:function(){var e=this;return r.a.createElement(h.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(O,{baseURL:P,handleChange:this.handleChange,addUser:this.addUser,user:this.state.user}),r.a.createElement(j,{user:this.state.users.username}),r.a.createElement(b.c,null,this.state.blogPosts?r.a.createElement(b.a,{path:"/index",render:function(t){return r.a.createElement(S,Object.assign({},t,{blogPosts:e.state.blogPosts,showPost:e.showPost,deleteBlogPost:e.deleteBlogPost}))}}):"no content",r.a.createElement(b.a,{path:"/newPost",render:function(t){return r.a.createElement(f,Object.assign({},t,{baseURL:P,addBlogPost:e.addBlogPost}))}}),r.a.createElement(b.a,{path:"/showPost",render:function(t){return r.a.createElement(y,Object.assign({},t,{post:e.state.blogPost,posts:e.state.blogPosts,content:e.state.content}))}}),r.a.createElement(b.a,{path:"/update",render:function(t){return r.a.createElement(w,Object.assign({},t,{post:e.state.blogPost,baseURL:P,posts:e.state.blogPosts,content:e.state.content,addBlogPost:e.addBlogPost}))}}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},87:function(e,t,n){e.exports=n(188)},92:function(e,t,n){},93:function(e,t,n){}},[[87,1,2]]]);
//# sourceMappingURL=main.9774ef80.chunk.js.map