import React, { Component } from 'react';
import TOC from "./component/TOC"
import ReadContent from "./component/ReadContent"
import './App.css';
import Subject from "./component/Subject"
import Control from "./component/Contorl"
import CreateContent from "./component/CreateContent"
import UpdateContent from "./component/UpdateContent"
class App extends Component{
  constructor(props){
    super(props);
    this.max_content_id=3
    this.state = {
          mode:"welcome",
          selected_content_id:2,
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

getReadContent(){
  let i = 0;
    while(i<this.state.contents.length){
      let data = this.state.contents[i];
      if(data.id === this.state.selected_content_id){
        return data;
      break;
      }
      i=i+1;
    }
}   

getContent(){
  var _title, _desc , _article = null;
  if(this.state.mode === 'Welcome'){
    _title = this.state.welcome.title;
    _desc = this.state.welcome.desc;
    _article = <ReadContent title={_title} desc={_desc}></ReadContent>
  }else if(this.state.mode === 'read'){
    let _content = this.getReadContent();
    _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
  }else if(this.state.mode === 'create'){
    _article = <CreateContent onSubmit={function(_title,_desc){
      this.max_content_id = this.max_content_id+1;
      // let _contents = this.state.contents.concat({id:this.max_content_id,title:_title,desc:_desc})
     let newContents = Array.from(this.state.contents);
     newContents.push({id:this.max_content_id,
    title:_title, desc:_desc});

      this.setState({
          contents:newContents,
          mode:'read',
          selected_content_id:this.max_content_id
      })
    }.bind(this)}></CreateContent>
  }
  else if(this.state.mode === 'update'){
    let _content = this.getReadContent();
    _article = <UpdateContent data={_content} onSubmit={
      function(_id,_title,_desc){
     let _contents = Array.from(this.state.contents);
     let i = 0;
     while(i<_contents.length){
      if(_contents[i].id === _id) {
        _contents[i] = {
          id:_id,
          title:_title,
          desc:_desc};
          break;
      }
      i=i+1;
     }
      this.setState({
          contents:_contents,
          mode:"read"
      })
    }.bind(this)}></UpdateContent>
  }

return _article;
}

render(){
    return(
    <div className="App">
      <Subject
       title={this.state.Subject.title}
       sub={this.state.Subject.sub}
         onChangePage={function(){
           this.setState({
             mode:'Welcome'
           })
         }.bind(this)}>
       </Subject>
      <TOC onChangePage={function(id){
        this.setState({
          mode:'read',
          selected_content_id:Number(id)
        });
      }.bind(this)}
       data={this.state.contents}></TOC>
       <Control onChangeMode={function(_mode){
       if(_mode === 'delete'){
          if(window.confirm('really??')){
            let _contents = Array.from(this.state.contents);
           let i = 0;
           while(i < _contents.length){
              if(_contents[i].id === this.state.selected_content_id){
                _contents.splice(i,1);
                break;
              }
              i=i+1;
           }  
           this.setState({
             contents:_contents,
             mode:'welcome'
           });
           alert("삭제되었습니다");
          }
       }else{
         this.setState({
           mode:_mode
         })
       }
       }.bind(this)}></Control>
      {this.getContent()}
    </div>
  );
}
}


export default App;
