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
    editToDo: {},
  };

  addNewToDo = (ToDo) => {
    this.setState({
      listToDo: [...this.state.listToDo, ToDo],
    });
    toast.success("Thêm mới thành công!");
  };
  handleDeleteToDo = (ToDo) => {
    let currentToDo = this.state.listToDo;
    currentToDo = currentToDo.filter((item) => item.id !== ToDo.id);
    this.setState({
      listToDo: currentToDo,
    });
    toast.success("Xóa thành công " + ToDo.title);
    console.log(ToDo.title);
  };
  handleEditToDo = (ToDo) => {
    let {editToDo} =this.state;
    let isEmptyObj = Object.keys(editToDo).length === 0;
    //save
    if(isEmptyObj === false && editToDo.id === ToDo.id){
      let listCopy = [...this.state.listToDo];
      //lấy id của list copy
      let index = listCopy.findIndex((item)=>item.id === ToDo.id)
      //cập nhật lại title của listcopy và gán cho list ban dầu
      listCopy[index].title = editToDo.title;
      this.setState({
        listToDo: listCopy,
        editToDo:{}
      })
      toast.success('Cập nhật thành công '+ editToDo.title)
      return;
    }
    //edit
    this.setState({
      editToDo: ToDo,
    });
  };
  handleChangeTitle = (event) => {
    let editCopy = { ...this.state.editToDo };
    editCopy.title = event.target.value;
    this.setState({
      editToDo: editCopy,
    });
  };
  render() {
    let { listToDo, editToDo } = this.state;
    let isEmptyObj = Object.keys(editToDo).length === 0;
    return (
      <div className="container">
        <AddToDo addNewToDo={this.addNewToDo} />
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
                      <td>
                        {isEmptyObj === true ? (
                          <span>
                            {index + 1}. {item.title}
                          </span>
                        ) : (
                          <>
                            {editToDo.id === item.id ? (
                              <span>
                                {index + 1}.{" "}
                                <input
                                  value={editToDo.title}
                                  onChange={(event) =>
                                    this.handleChangeTitle(event)
                                  }
                                />
                              </span>
                            ) : (
                              <span>
                                {index + 1}. {item.title}
                              </span>
                            )}
                          </>
                        )}
                      </td>
                      <td>
                        <button onClick={() => this.handleEditToDo(item)}>
                          {isEmptyObj === false && editToDo.id === item.id
                            ? "Save"
                            : "Edit"}
                        </button>
                        &nbsp;
                        <button style={{background:'red'}} onClick={() => this.handleDeleteToDo(item)}>
                          Delete
                        </button>
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
