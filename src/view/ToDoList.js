import React from "react";
import "./Demo.scss";
import AddToDo from "./AddToDo";
import { toast } from "react-toastify";
class ToDoList extends React.Component {
  state = {
    listToDo: [
      { id: "todo1", title: "Do Excercise" },
      { id: "todo2", title: "Play Basketball" },
      { id: "todo3", title: "Play Video Games" },
    ],
  };

  addNewToDo =(ToDo)=>{
    this.setState({
        listToDo: [...this.state.listToDo, ToDo]
    })
    toast.success('Thêm mới thành công!')
  }

  render() {
    let { listToDo } = this.state;
    return (
      <div className="container">
        <AddToDo addNewToDo = {this.addNewToDo}/>
        <div className="read-Todo">
          <table>
            <thead>
              <tr>
                <th>To do title</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {listToDo &&
                listToDo.length > 0 &&
                listToDo.map((item, index) => {
                  return (
                    <tr key={item.id}>
                      <td>{index+1}. {item.title}</td>
                      <td>
                        <button>Edit</button>&nbsp;
                        <button>Delete</button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default ToDoList;
