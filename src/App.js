import React, { Component } from 'react';
import TOC from "./component/TOC"
import Content from "./component/Content"
import './App.css';
import Subject from "./component/Subject"

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
          mode:"Welcome",
          Subject:{
            title:"WEB",
            sub:"World Wide Web !!"},
            welcome:{
              title:"Hello",
              desc:"Hello React~"
            },

            contents:[
              {id:1,title:'HTML',desc:"HTML is HyperText.."},
              {id:2,title:'CSS',desc:"CSS is for design"},
              {id:3,title:"JavaScript",desc: "JavaScript is for Interactive"
                }
            ]
      }
    }
  

render(){
  var _title, _desc = null;
  if(this.state.mode === 'Welcome'){
    _title = this.state.welcome.title;
    _desc = this.state.welcome.desc;
  }else if(this.state.mode === 'read'){
    _title = this.state.contents[0].title;
    _desc = this.state.contents[0].desc;

  };

  return(
    <div className="App">
      <Subject
       title={this.state.Subject.title}
       sub={this.state.Subject.sub}>
       </Subject>
      <TOC
       data={this.state.contents}></TOC>
      <Content
       title={_title}
       desc={_desc}></Content>
    </div>
  );
}
}


export default App;
