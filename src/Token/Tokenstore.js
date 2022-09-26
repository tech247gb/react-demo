import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

export default function Tokenstore() {

  const navigate = useNavigate();

  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    localStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
    navigate('/');
  };

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