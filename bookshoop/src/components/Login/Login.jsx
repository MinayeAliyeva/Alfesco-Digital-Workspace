import React from "react";
import "./Login.scss";
import logo from "../../images/logo.png";
const Login = () => {
  return (
    <div className="parent-div">
      <div className="main-div"> 
        <form className="form">
          <div className="title-side">
            <img className="logo" src={logo} alt="" />
            <div className="heading-desc">
              {" "}
              <h2>Alfresco</h2>
              <p>make business flow</p>
            </div>
          </div>
          <h3 className="heading">Alfresco Identity Service</h3>
          <div className="inputs"> 
          <input type="text" placeholder="Username:" />
          <input type="password" placeholder="Password" />
          <button>Sign in</button>
          </div>
        
        </form>
      </div>
    </div>
  );
};

export default Login;
