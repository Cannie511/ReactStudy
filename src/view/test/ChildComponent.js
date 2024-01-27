import React from "react";


class ChildComponent extends React.Component {
  state = {
    show: false
  }
  handleShowHide = () =>{
    this.setState({
      show: !this.state.show
    })
  }
  handleHide = () =>{
    this.setState({
      show: false
    })
  }
  handleClickDelete = (job)=>{
   this.props.deleteJob(job)
  }
  
  render() {
    let { arr } = this.props;
    let {show} = this.state;
    
    return (
      <>
        {show === false ? <div><button className="btn-show" style={{color:'red'}} onClick={()=>this.handleShowHide()}>Show</button></div>
        :
          <>
            <div>Jobs List</div>
            <div>
              {
                arr.map((item, index) => {
                  return (
                    <div key={item.id}>
                      {item.title} - {item.sal} - <span onClick={()=>this.handleClickDelete(item)}>X</span>
                    </div>
                  )
                })
              }
            </div>
         
        <div><button onClick={()=>this.handleShowHide()}>Hide</button></div>
        </>
        }
      </>
    );
  }
}
// const ChildComponent = (props) => {
//   let { name, age, arr } = props;
//   return (
//     <>
//       <div>ChildComponent - {name} - {age}</div>
//       <div>
//         {
//           arr.map((item, index) => {
//             if (item.sal <= 5000) {
//               return (
//                 <div key={item.id}>
//                   {item.title} - {item.sal}$
//                 </div>
//               )
//             }
//           })
//         }
//       </div>
//     </>
//   );
// }
export default ChildComponent;
