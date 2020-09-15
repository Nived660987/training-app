import withRoot from './withRoot';
import React, {useState,useEffect} from 'react';
import './App.css';
import Axios from 'axios';
import AppAppBar from './views/AppAppBar';
import AppFooter from './views/AppFooter';
import ProductHero from './views/ProductHero';
import ProductCategories from './views/ProductCategories';
import { Typography,Button, Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import CustomerService from './views/CustomerService';
import ProductHeroLayout from './views/ProductHeroLayout';
import Nav from './Nav';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './About';
import Home from "./authentication/pages/Home";
import Login from "./authentication/auth/Login";
import Register from "./authentication/auth/Register";
import UserContext from './context/UserContext';
import Header from './authentication/layout/Header';
import Covid from "./Covid";


function App() {

  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post(
        "http://localhost:5000/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await Axios.get("http://localhost:5000/users/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };
    checkLoggedIn();
  }, []);
  
  return (
    <Router>
      <UserContext.Provider value={{userData,setUserData}}>
       
    <div className="App">
   <Header/>
    <Switch> 
    <Route path="/Covid" component={Covid}  />
    <Route path="/Login" component={Login}  />
    <Route path="/Register" component={Register}  />
     
    <ProductHero/>

    </Switch>
   </div>
   </UserContext.Provider>
   </Router>
   
  );
}



export default withRoot(App);
 