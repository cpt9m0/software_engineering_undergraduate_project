
import React, {Component} from 'react';
import logo from '../images/ostadrate.png';
import { Redirect } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class Register extends Component {
  state = {
    redirectHome: false
  }

  constructor(props) {
    super(props);
    this.state = {
      Universities: []
     
    };
  }

  get_universities(){
    const headers = {
      'Content-Type': 'application/json',
    }
    let HOST = 'http://127.0.0.1:8000';

    axios.get(`${HOST}/university/get-all-universities/`, {}, {headers:headers}).then(
      res => {
        var data = res.data;
        
        console.log(data);
        this.setState({Universities: data})
      }
    )
  }

  componentWillMount(){
    this.get_universities();
  }

  componentDidMount() {}

  setRedirectHome = () => {
    this.setState({
      redirectHome: true
    })
  }

  renderRedirectHome = () => {
    if (this.state.redirectHome) {
      return <Redirect to='./' />
    }
  }

  doRegister = e => {
    e.preventDefault();
    var username = document.getElementById("username").value;
    var uni = document.getElementById("uni").value;
    var email = document.getElementById("email").value;
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;

    if (password1 === password2){
      const headers = {
        'Content-Type': 'application/json',
      }
      const data = {
        "username": username,
        "email": email,
        "university": uni,
        "password": password2
      }
      console.log(data);
      axios.post('http://localhost:8000/user/register-user/', data, {headers: headers}).then(
        res => {
          if(res.status == 201){
            window.location.replace("Login");
          }
        }
      ).catch(error => {
        if (error){
          alert("There is an error");
        }
      })
    }else{
      alert("رمز عبور مطابقت ندارد")
    }

  }



  render() {

    const { Universities } = this.state;

    let UniversitiesList = Universities.length > 0
      && Universities.map((item, i) => {
      return (
        <option key={i} value={item.id}>{item.name}</option>
      )
    }, this);
  
    return (

    <div className="App">
       <img src= {logo} className="userr"></img>
<div className="sidebar">
<a href="#home" onClick={this.setRedirectHome}>{this.renderRedirectHome()}صفحه اصلی</a>
  <a href="#contact">تماس با ما</a>
  <a href="#about">درباره سایت</a>

</div>
<form className="searchBar" >
     <input type = "text" name = "search" placeholder = "استاد یا دانشگاه مورد نظر خود را جستجو کنید"></input>
     </form>
      <div className="registerbox">
        <h2>ثبت نام دانشجو</h2>
        
        <form onSubmit={this.doRegister}>
          <p>شماره دانشجویی</p>
          <input type="text" name="" id="username" placeholder="شماره دانشجویی خود را وارد کنید"></input>
          <div >
          <select id="uni" className="selectUni2">
          {UniversitiesList}
        </select>
        </div>
          <p>ایمیل</p>
          <input type="email" name="" id="email" placeholder="ایمیل خود را وارد کنید"></input>
          
          <p>رمز عبور</p>
          <input type="password" name="" id="password1" placeholder="**********"></input>
          <p>تایید رمز عبور</p>
          <input type="password" name="" id="password2" placeholder="**********"></input>
          
          <input type="submit" name="" value="تایید"></input>
        </form>
        </div> 
       
        </div>
    );
  }
}

export default Register;
