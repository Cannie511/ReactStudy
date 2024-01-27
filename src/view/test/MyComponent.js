import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
import ToDoList from "../ToDoList";
class MyComponent extends React.Component {
  state = {
    arr: [
      { id: 1, title: "Dev", sal: "5000" },
      { id: 2, title: "Test", sal: "2000" },
      { id: 3, title: "MA", sal: "50000" },
    ],
  };
  addNewJob = (job) => {
    console.log("job: ", job);
    // let currentJob = this.state.arr;
    // currentJob.push(job);
    this.setState({
      arr: [...this.state.arr, job], // 3 chấm copy lại phần tử của mảng, job là tạo thêm 1 phần tử = lệnh push
      // arr: currentJob
    });
  };
  deleteJob = (job) => {
    let currentJob = this.state.arr;
    currentJob = currentJob.filter((item) => item.id !== job.id);
    this.setState({
      arr: currentJob,
    });
  };
  render() {
    return (
      <>
        {/* <AddComponent addJob = {this.addNewJob}/>
        <ChildComponent name={this.state.firstname} arr = {this.state.arr} deleteJob = {this.deleteJob}/> */}
      </>
    );
  }
}
export default MyComponent;
