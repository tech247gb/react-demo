import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

// Function to handle token in local storage

export default function Tokenstore() {

  const navigate = useNavigate();

  // fetch token from local storage

  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
  };

  const [token, setToken] = useState(getToken());

  // Set token to local storage

  const saveToken = userToken => {
    localStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
    navigate('/');
  };

 // Remove token from local storage

  const removeToken = () => {
    localStorage.setItem('token', JSON.stringify(""));
    setToken("");
  }  

  return {
    setToken: saveToken,
    removeToken : removeToken,
    token
  }
}