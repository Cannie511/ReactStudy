import React from "react";
import axios from "axios";
import "../Demo.scss";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
class ListUsers extends React.Component{
    state ={
        listUser: []
    }
    async componentDidMount(){
        // axios.get('https://reqres.in/api/users?page=1')
        // .then(res=>{
        //     console.log(res)
        // })
        let res = await axios.get('https://reqres.in/api/users?page=2');
        this.setState({
            listUser: res && res.data && res.data.data ? res.data.data : []
        })
        
    }
    handleDetail = (user) =>{
        console.log("check user: ", user)
        this.props.history.push(`/user/${user.id}`)
    }
    render(){
        let {listUser} = this.state;
        return(
            <div className="container">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Ảnh</th>
                            <th>Tên</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUser && listUser.length > 0 &&
                        listUser.map((item, index)=>{
                            return(
                                <tr key={item.id} onClick={()=>this.handleDetail(item)}>
                                    <td>{item.id}</td>
                                    <td><img src={item.avatar} alt=""/></td>
                                    <td>{item.first_name} {item.last_name}</td>
                                    <td>{item.email}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default withRouter(ListUsers)