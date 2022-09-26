import React , { Component } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from "react-redux";
import "../Css/Profileform.css"
import { Link } from 'react-router-dom'
import { findEmployeeById , retrieveEmployeeDetails } from '../Actions/Employees';
import { updatedStartDate } from '../Helpers/datehelper';
import Apploader from './Apploader';
import { ValidateForm } from '../Validations/Formvalidation';

class ProfileForm extends Component{

      constructor(props) {
        super(props);

        this.state={
          asyncState : false,
          employeeDetails : { experience : false },
          employeeUpdateDetails : {},

        }    
      }

      componentDidMount = async() => {

        if(this.props.id){

          this.setState({asyncState : true}) 
          await this.props.retrieveEmployeeDetails();

          this.props.employeeById.filter((data) => {
          if(data.id === this.props.id){
   
               this.setState({employeeDetails : { 
                  ...this.state.employeeDetails,
                  name : data.name,
                  email : data.email,
                  gender : data.gender,
                  dob : data.dob,
                  country : data.country,
                  experience : data.experience
           }})
          }
         })        
         this.setState({asyncState : false})   
        }     
      }
    
      handleChange = (e) => {

        this.setState({employeeDetails : { 
          ...this.state.employeeDetails,
          [e.target.name]: e.target.value}})
      }

      handleCreate = async(e) => {
        e.preventDefault();     
        if(ValidateForm(this.state.employeeDetails)){

          this.setState({asyncState : true})    
          this.props.id ? 
          await this.props.onUpdate(this.props.id,this.state.employeeDetails) : 
          await this.props.onCreate(this.state.employeeDetails);
          this.setState({asyncState : false})
        }    
      }

      render(){

        return(

         <div className='mainform'> 
          <div className='container'>
            <h1>GRAPELIME INNOVATIONS</h1>    
            <p className='form'>{this.props.id ? "Update User*" : "Register a new user*"}</p>      
              <form>
                <div className='row'>
                         <div className='column'>
                           <label>name</label>
                            <input type="text" name="name"  
                               value={this.state.employeeDetails.name ? this.state.employeeDetails.name : ""}
                               onChange={(e) => {this.handleChange(e)}}/>
                          </div>
                          <div className='column'>
                            <label>email</label>
                            <input type="email" name="email" 
                              value={this.state.employeeDetails.email ? this.state.employeeDetails.email : ""}
                              onChange={(e) => {this.handleChange(e)}}/>
                          </div>
                        </div>

                        <div className='row'>
                            <div className='column'>
                              <label>male</label>
                              <input type="radio" id="male" name="gender" value="male"
                                checked={this.state.employeeDetails.gender === "male" ? true : false}
                                onChange={(e) => {this.handleChange(e)}}/>
                            </div>
                            <div className='column'>
                              <label>female</label>
                              <input type="radio" id="female" name="gender" value="female"
                                checked={this.state.employeeDetails.gender === "female" ? true : false}
                                onChange={(e) => {this.handleChange(e)}}/>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='column'>
                              <label>D.O.B</label>
                              <DatePicker
                                name="dob"
                                dateFormat="dd-MM-yyyy"
                                selected={updatedStartDate(this.state.employeeDetails.dob)}
                                onChange={(date) =>this.setState({employeeDetails : { 
                                ...this.state.employeeDetails,
                                ["dob"]: date}})}
                              />
                            </div>

                        <div className='column'>
                          <label>Experience</label>
                              <input 
                                type="checkbox" 
                                checked={this.state.employeeDetails.experience ? this.state.employeeDetails.experience : false}
                                onChange={() => {  this.setState({employeeDetails : { 
                                ...this.state.employeeDetails,
                                "experience" : !this.state.employeeDetails.experience}})}}  
                              />
                          </div>

                          <div className='column'>
                            <label>Country</label><br/>
                            <select id="country" name="country"  
                              value={this.state.employeeDetails.country ? this.state.employeeDetails.country  : ""}
                              onChange={(e) => {this.handleChange(e)}}
                            >
                              <option value="">Select Country</option>
                              <option value="australia">Australia</option>
                              <option value="canada">Canada</option>
                              <option value="usa">USA</option>
                            </select>
                         </div>       
                        </div>
                     
                        <div className='form'>
                        {this.props.id ? 
                           <button type='submit' onClick={(e) => {this.handleCreate(e)}}>Update</button>
                        :  <button type='submit' onClick={(e) => {this.handleCreate(e)}}>Create</button>
                        }<br/>
                        <Link to="/">
                          <button>Employee List</button>
                        </Link>
                        </div>
                      </form>
                     {this.state.asyncState ? <Apploader/> : null}                    
          </div>
        
        </div>
        )
      }
}

const mapStateToProps = (state) => {

  
    return {
      employeeById : state.employees,
    };
  };

export default connect(mapStateToProps, {findEmployeeById , retrieveEmployeeDetails})(ProfileForm);

