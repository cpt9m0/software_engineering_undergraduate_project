import React, {Component} from 'react';
import logo from '../images/ostadrate.png';
import '../App.css';
import { Redirect } from 'react-router-dom'

class Logintoregister extends Component {
    state = {
        redirectProfessor: false,
        redirectStudent:false,
        redirectHome: false
      } 
    
        setRedirectProfessor = () => {
          this.setState({
              redirectProfessor: true
          })
        }
        setRedirectStudent = () => {
          this.setState({
              redirectStudent: true
          })
        }

        renderRedirectProfessor = () => {
          if (this.state.redirectProfessor) {
            return <Redirect to='./RegisterOstad' />
          }
        }
        renderRedirectStudent = () => {
          if (this.state.redirectStudent) {
            return <Redirect to='./Register' />
          }
        }
      
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
             <h1>انتخاب کنید</h1>

        <div>{this.renderRedirectStudent()}<button className="buttonStudent" onClick={this.setRedirectStudent}><span>دانشجو</span></button></div>
        <div>{this.renderRedirectProfessor()}<button className="buttonOstad" onClick={this.setRedirectProfessor}><span>استاد</span></button></div>
            </div>
        );
    }
}

export default Logintoregister;