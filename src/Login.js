import React from 'react';
import { useNavigate } from "react-router-dom";

function Login() {
    
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `newPath`; 
      navigate(path);
    }

  return (
    <div>
      <h1>Login</h1>
      <button>Login</button>
    </div>
  );
}