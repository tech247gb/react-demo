import React from "react";
import ProfileForm  from "../Components/ProfileForm";
import { connect } from "react-redux";
import { createEmployee , updateEmployee , retrieveEmployeeDetails} from '../Actions/Employees';
import { useNavigate , useParams } from 'react-router-dom'


function ManageForm(props) {

  const navigate = useNavigate();  

  const {id} = useParams();
     
  const onCreate = async(details) => {

   await props.createEmployee(details)
   await props.retrieveEmployeeDetails()
   navigate(`/`)
  }

  const onUpdate = async(id,details) => {

   await props.updateEmployee(id,details)  
   await props.retrieveEmployeeDetails()
   navigate(`/`)
  }

    return (    

      <div>  
        <ProfileForm onCreate={onCreate} id={id} onUpdate={onUpdate} navigate={navigate}/>          
      </div>

    );
  }

export default connect(null, { createEmployee , updateEmployee , retrieveEmployeeDetails})(ManageForm);