
import logo from '../images/ostadrate.png';
import React, {Component} from 'react';
import '../App.css';
import Register from './Register';
import Logintoregister from './Logintoregister';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Home from "./Home";

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'


class Login extends Component {
  state = {
    redirect: false,
    redirectHome:false,
    username: "",
    password: "",
    isLogin: false,
    loggedIn: false,
    returnedUsername: ""
  }
  
    componentWillMount = ()=>{
      this.setState({isLogin: false});
    }

    setRedirect = () => {
      this.setState({
        redirect: true
      })
    }
    renderRedirect = () => {
      if (this.state.redirect) {
        return <Redirect to='/Logintoregister' />
      }
    }

    setRedirectHome = () => {
      this.setState({
        redirectHome: true
      })
    }

    doLogin = event => {
      event.preventDefault();
      var username1 = document.getElementById("username").value;
      var password1 = document.getElementById("password").value;
      const headers = {
        'Content-Type': 'application/json',
      }
      const data = {
        'username': username1,
        'password': password1
      }
      
      axios.post('http://127.0.0.1:8000/user/login-user/', data, {headers:headers, withCredentials:true}).then(
        res => {
          if(res.data != null){
            console.log(res.data);
            this.setState({
              loggedIn: true,
              returnedUsername: res.data.username
            })

          }else{
            console.log("failed to log in");
          }
        }
      ).catch(error => {
        console.error(error.response);
        
      })
    }

    renderRedirectTest = () => {
      if(this.state.isLogin==true){
        return <Redirect to='./Test'/>
      }
    }

    renderRedirectHome = () => {
      if (this.state.redirectHome) {
        return <Redirect to='./' />
      }
    }


  render() {
    return (
        <div>
        {
          this.state.loggedIn?
                <Home username={this.state.returnedUsername}/>

              :
              <div className="App">
                <img src= {logo} className="userr"></img>
                <div className="sidebar">
                  <a href="#home" onClick={this.setRedirectHome}>{this.renderRedirectHome()}صفحه اصلی</a>
                  <a href="#contact">تماس با ما</a>
                  <a href="#about">درباره سایت</a>
                </div>

                <form className="searchBar">
                  <input type = "text" name = "search" placeholder = "استاد یا دانشگاه مورد نظر خود را جستجو کنید"></input>
                </form>

                <div className="loginbox">
                  <h2>ورود</h2>
                  <form onSubmit={this.doLogin}>
                    <p>نام کاربری</p>
                    <input type="text" name="" id="username" placeholder="شماره دانشجویی"></input>
                   
                    <p>رمز عبور</p>
                    <input type="password" id="password" name="" placeholder="**********"></input>
                    <div>{this.renderRedirectHome()}<input type="submit" name="" value="ورود" onClick={this.doLogin}></input></div>
                  </form>
                </div>
                <div>
                  {this.renderRedirect()}
                  <button className="button" onClick={this.setRedirect}><span>ثبت نام</span></button>
                </div>
              </div>

        }
        </div>


    );
  }
}

export default Login;