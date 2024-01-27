import React from "react";
class AddComponent extends React.Component {
    state = {
        JobsName: "",
        Salary: "",
    }
    handleChangeJobsName = (event) => {
        this.setState({
            JobsName: event.target.value,
        });
    };
    handleChangeSalary = (event) => {
        this.setState({
            Salary: event.target.value,
        });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        if(!this.state.JobsName||!this.state.Salary){
            alert('Vui lòng nhập đủ thông tin')
            return;
        }
        console.log('job: ', this.state);
        this.props.addJob({
            id: Math.floor(Math.random()*1001),
            title: this.state.JobsName,
            sal: this.state.Salary
        })
        this.setState({
            JobsName: '',
            Salary: ''
        })
    };
    render() {
        return (
            <>
                <form>
                    <label htmlFor="fname">Job Name:</label>
                    <br />
                    <input
                        type="text"
                        value={this.state.JobsName}
                        onChange={(event) => this.handleChangeJobsName(event)}
                    />
                    <br />
                    <label htmlFor="lname">Salary:</label>
                    <br />
                    <input
                        type="text"
                        value={this.state.Salary}
                        onChange={(event) => this.handleChangeSalary(event)}
                    />
                    <br />
                    <input
                        type="submit"
                        value="Submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />
                </form>
            </>
        )
    }
}
export default AddComponent