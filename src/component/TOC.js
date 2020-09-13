import React, { Component } from 'react';
class TOC extends Component{
  shouldComponentUpdate(newProps,newState){
    if(this.props.data === newProps.data){
      return false;
    } 
    return true;

  }
    render(){
      var lists = [];
      var i = 0;
      var data = this.props.data;
      while(i < data.length){
        lists.push(<li key={data[i].id}>
          <a
           href={"/content/"+data[i].id}
           data-id={data[i].id}
           onClick={function(e){
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id);
           }.bind(this)}
           >{data[i].title}</a>
          </li>)
        i=i+1;
      };
      return(
        <div>
          <ul>
          {lists}
          </ul>
        </div>
      );
    }
  }

  export default TOC;
  