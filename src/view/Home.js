import React from "react";
import Color from "./HOC/Color";
import logo from "../assets/images/z4839306224186_eb3bbfd993afcdd8091bd991dd928231.jpg";
import { connect } from "react-redux";
class Home extends React.Component {
  handleDelete = (user) =>{
    console.log('click!', user);
   
    this.props.deleteUserRedux(user);
  }
  render() {
    console.log('>>>check props: ', this.props.dataRedux);
    let listUser = this.props.dataRedux;

    return (
      <>
        <h1>Hello Cannie - 5112002</h1>
        <img src={logo} style={{ width: "400px" }} alt="" />
        <div>
          {listUser && listUser.length > 0 &&
          listUser.map((item, index)=>{
            return(
              <div key={item.id}><h2>{index+1}. {item.name} - <span onClick={()=>this.handleDelete(item)}>Delete</span></h2></div>
            )
          })}
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return { dataRedux: state.user };
};
const mapDispatchToProps = (dispatch) => {
  return{
    deleteUserRedux: (userDelete)=>dispatch({ type: 'DELETE_USER', payload: userDelete})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
