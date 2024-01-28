import axios from "axios";
import React from "react";
import { withRouter } from "react-router-dom";
class UserDetail extends React.Component {
  state = {
    user: {},
  };
  async componentDidMount() {
    if (this.props.match && this.props.match.params) {
      let id = this.props.match.params.id;
      let res = await axios.get(`https://reqres.in/api/users/${id}`);
      this.setState({
        user: res && res.data && res.data.data ? res.data.data : {},
      });
      console.log(">check res",res);
    }
  }
  handleBack = () =>{
    // this.props.history.push('/user')
    window.history.back()
  }
  render() {
    let { user } = this.state;
    let isEmptyObj = Object.keys(user).length === 0;
    console.log(">>check user", user);
    return (
      <>
        <div>user detail with id: {user.id}</div>
        {isEmptyObj === false && (
          <>
           <img src={user.avatar} style={{borderRadius: '50%'}} alt=""/>
            <h2>
              NAME: {user.first_name} {user.last_name}
            </h2>
            <br/>
            <h4>EMAIL: {user.email}</h4>
           <button onClick={()=>this.handleBack()}>Back</button>
          </>
        )}
      </>
    );
  }
}
export default withRouter(UserDetail);
