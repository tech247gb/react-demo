import React, { Component } from "react";
import { connect } from "react-redux";
import "../Css/Listingpage.css"
import { convertDateToString } from "../Helpers/datehelper";
import { Link } from 'react-router-dom'
import { retrieveEmployeeDetails , deleteEmployee , deleteAllEmployees , findEmployeeByName} from "../Actions/Employees";
import Apploader from "../Components/Apploader";

class ListingPage extends Component {

    constructor(props) {
        super(props);

        this.state={
          asyncState : true,
          name : ""
        }
      }
 
    componentDidMount = async() => {
      await this.props.retrieveEmployeeDetails();
      this.state.asyncState = false
    }

    // Delete Employee using id

    onDelete = async(id,e) => {

      e.preventDefault();

      if (!window.confirm("Are you sure to delete?")) {
        return;
      }
      this.setState({asyncState : true}) 
      await this.props.deleteEmployee(id)
      this.setState({asyncState : false}) 
    }

  // Search employee using name

   searchByName = async() => {
    this.props.findEmployeeByName(this.state.name)
   }

  // Function to remove token from local storage

   handleLogout = () => {
    this.props.removeToken();
   }

  render() {

    const { employeeDetails } = this.props;
  
    return (
      <div>
        {this.state.asyncState ? <Apploader/> : ""}
        <div className='table'>
          <div className='table_header'>
            <p>Grapelime Innovations</p>
            <div>
            <input type="text" placeholder='Search Employee Name*' onChange={(e) => {this.setState({name : e.target.value})}}/>
            <button className='add_new' onClick={() => {this.searchByName()}}>search</button>
            <Link to="/create">
              <button className='add_new_employee'>+ Add New Employee</button>
            </Link> 
            </div>
            <div>
            <Link to="/">
              <button className='add_new' onClick={this.handleLogout}>Logout</button> 
            </Link> 
            </div>
          </div>
          <div className='table_section'>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>D.O.B</th>
                  <th>Country</th>
                  <th>Experience</th>
                  <th><i className="fa-solid fa-pen-to-square"></i></th>
                </tr>
              </thead>
              {employeeDetails ? (
              <tbody>
                {employeeDetails.map((data,index) => {

                  return(
                    <tr key={index}>
                      <td>{data.id}</td>
                      <td>{data.name}</td>
                      <td>{data.email}</td>
                      <td>{data.gender}</td>
                      <td>{convertDateToString(data.dob)}</td>
                      <td>{data.country}</td>
                      <td>{data.experience ? "Experienced" : "Fresher"}</td>
                      <td>
                        <button onClick={() => {this.props.navigate(`/create/${data.id}`)}}>
                          <i className="fa-solid fa-pen-to-square"></i>
                        </button>
                        <button onClick={(e) => {this.onDelete(data.id,e)}}>
                          <i className="fa-sharp fa-solid fa-trash"></i>
                        </button>
                      </td>
                    </tr> 
                  )
                })}
              </tbody>
              ): null}         
            </table>
          </div>                  
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      employeeDetails : state.employees,
    };
};

export default connect(mapStateToProps, { retrieveEmployeeDetails , deleteEmployee , deleteAllEmployees , findEmployeeByName})(ListingPage);