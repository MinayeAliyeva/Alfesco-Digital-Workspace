import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import logo from "../../images/logo.png";
import axios from "axios";
import { useState } from "react";
const BASE_URL = "http://localhost:3000/admin";

const Login = () => {
  const navigate=useNavigate()
  const [arr, setArr] = useState([]);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  //data cekme
  const fetchData = async () => {
    let res = await axios.get(BASE_URL);
    let data = res.data;
    setArr(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handkeClick = (e) => {
    e.preventDefault();
    arr.map((admin) => {
      console.log(admin.userName);
      console.log(admin.password);
      console.log(name);
      console.log(password);
    
      if (name == admin.userName && password == admin.password) {
       navigate('/admin')
      } else {
        console.log("---");
      }
    });
  };

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
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Username:"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password:"
            />
            <button onClick={handkeClick}>Sign in</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
