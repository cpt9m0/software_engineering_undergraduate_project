
import logo from '../images/ostadrate.png';
import React, {Component} from 'react';
import '../App.css';
import Register from './Register';
import Logintoregister from './Logintoregister';
import { Redirect } from 'react-router-dom';
import axios from 'axios';


class Login extends Component {
  state = {
    redirect: false,
    redirectHome:false,
    username: "",
    password: "",
    isLogin: false
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

    loginOnClick = event => {
      
      var username1 = document.getElementById("username").value;
      var password1 = document.getElementById("password").value;
      const headers = {
        'Content-Type': 'application/json',
      }
      const data = {
        'username': username1,
        'password': password1
      }
      
      axios.post('/user/login-user/', data, {headers:headers}).then(
        res => console.log(res.data)
      )
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
        <form>
          <p>نام کاربری</p>
          <input type="text" name="" id="username" placeholder="شماره دانشجویی"></input>
          <p>رمز عبور</p>
          <input type="password" id="password" name="" placeholder="**********"></input>
          <div>{this.renderRedirectTest()}<input type="button" name="" value="ورود" onClick={this.loginOnClick}></input></div>
        </form>
    </div>
    <div>
        {this.renderRedirect()}
        <button className="button" onClick={this.setRedirect}><span>ثبت نام</span></button>
    </div>
        </div>
    );
  }
}

export default Login;