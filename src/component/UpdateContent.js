import React, { Component } from 'react';
class UpdateContent extends Component{
    constructor(props){
      super(props);
      this.state ={
        id:this.props.data.id,
        title:this.props.data.title,
        desc:this.props.data.desc
      }
      this.inpuFormHandler = this.inpuFormHandler.bind(this);
        }
    inpuFormHandler(e){
      this.setState({[e.target.name]:e.target.value})
    }
    render(){
      console.log(this.props.data);
      return (
        <div>
          <h1>
          Update
          </h1>
          <form action="/create_process" method="post"
          onSubmit={function(e){
             e.preventDefault();
             this.props.onSubmit(
              this.state.id,
              this.state.title,
             this.state.desc
             );
          }.bind(this)}
          >
            <p>
              <input type="hidden" name="id" value={this.state.id}></input>
              <input
               type="text"
                name="title"
                 placeholder="title"
                 value={this.state.title}
                 onChange={this.inpuFormHandler}
                 >
                   
                 </input>
            </p>
            <p>
              <textarea 
              name="desc"
               placeholder="description"
               value={this.state.desc}
               onChange={this.inpuFormHandler}
               ></textarea>
            </p>
            <p>
              <input type="submit"></input>
            </p>
          </form>
        </div>
      );
    }
  }

export default UpdateContent;