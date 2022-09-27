import React , {useState} from 'react'
import "../Css/Profileform.css"
import { getToken } from '../Services/employee.service'
import Apploader from '../Components/Apploader'
import { loginValidation } from '../Validations/Formvalidation'

function Loginpage(props) {

  const [userName , setUserName] = useState("")
  const [password , setPassword] = useState("")
  const [asyncState , setAssyncState] = useState(false)
 
  // Fetch and Store token to local storage
  
  const LoginSubmit = async(e) => {
    e.preventDefault();

  if(loginValidation(userName , password)){
    
    setAssyncState(true)
    const { token }  = await getToken({
      userName,
      password
    });
    props.setToken({token : token});
    setAssyncState(false)
  }
  }

  return (
    <div className="App">
    
      <div className='container'>

          <h1>Login Page</h1>
          <p>Please Login to see Employee Details*</p>
          <form>
            <div className='row'>
              <div className='column'>
                <label>User name</label>
                <input type="text" onChange={(e) => {setUserName(e.target.value)}}/>
              </div>
              <div className='column'>
                <label>Password</label>
                <input type="password" onChange={(e) => {setPassword(e.target.value)}}/>
              </div>
            </div>
            
            <button className="loginbutton" onClick={LoginSubmit}>Login</button>
          </form>
        </div>
        {asyncState ? <Apploader/> : ""}
    </div>
  );
}

export default Loginpage;
