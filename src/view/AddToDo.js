import React from "react";
import { toast } from "react-toastify";

class AddToDo extends React.Component {
    state = {
        title: ''
    }
    handleInput = (event) =>{
        this.setState({
            title: event.target.value
        })
    }
    handleAddToDo = ()=>{
        if(!this.state.title){
          toast.error('Thiếu thông tin!')
            return;
        }
        let ToDo = {
            id: Math.floor(Math.random()*1001),
            title: this.state.title
        }
        this.props.addNewToDo(ToDo)
        this.setState({
            title:''
        })
    }
  render() {
    let {title} = this.state;
    return (
      <div className="add-component">
        <input type="text" value={title} onChange={(event)=>this.handleInput(event)}/>
        <button onClick={()=>this.handleAddToDo()}>add new</button>
      </div>
    );
  }
}
export default AddToDo;
