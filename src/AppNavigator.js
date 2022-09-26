import React from 'react';
import { Route , Routes } from 'react-router-dom'
import { Provider } from "react-redux";
import { employeeStore } from "./Store/EmployeeStore";
import ListingPage from "./Pages/ListingPage";
import  ManageForm from "./Pages/ManageForm";
import Loginpage from "./Pages/Loginpage";
import { useNavigate } from 'react-router-dom'
import Tokenstore from './Token/Tokenstore';

function Appnavigator() {

  const navigate = useNavigate();

  const { token, setToken , removeToken} = Tokenstore();   


  if(!token) {
    return <Loginpage setToken={setToken} />
  }

    
    return (   

      <div>  
        <Provider store={employeeStore}>           
          <Routes> 
              <Route path="/" element={ <ListingPage removeToken={removeToken} navigate={navigate}/>}/>
              <Route path="/create" element={ <ManageForm/>} />
              <Route path="/create/:id" element={ <ManageForm/>} /> 
          </Routes>
        </Provider> 
      </div>
  
    
    );
  }

export default Appnavigator 