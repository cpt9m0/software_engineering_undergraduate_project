import logo from '../images/ostadrate.png';
import React, {Component} from 'react';
import '../newCss.css';
import '../App.css'
import Login from './Login';
import { Redirect } from 'react-router-dom';
import VP from './Layout/VP';

  
class Header extends Component {

    state = {
        redirectLoginReg: false,
        redirectHome: false,
        redirectAbout:false,
        redirectContact:false,
        redirectSearch: false ,
        value: ""
      } 
    
        setRedirectLoginReg = () => {
          this.setState({
            redirectLoginReg: true
          })
        }

        renderRedirectLoginReg = () => {
          if (this.state.redirectLoginReg) {
            return <Redirect to='./Login' />
          }
        }

        setRedirectHome = () => {
            this.setState({
              redirectHome: true
            })
          }
          setGotoSearch = () => {
            this.setState({
              redirectSearch: true
            })
          }

          renderSearch = () => {
            if (this.state.redirectSearch) {
              return <Redirect to='./resultsearchPage' />
            }
          }
  
          renderRedirectHome = () => {
            if (this.state.redirectHome) {
              return <Redirect to='./' />
            }
          }
        
          setRedirectAbout = () => {
            this.setState({
              redirectAbout: true
            })
          }

          handleChange = event => {
            this.setState({
              value: event.target.value
            })
          }
  
          renderRedirectAbout = () => {
            if (this.state.redirectAbout) {
              return <Redirect to='./AboutUs' />
            }
          }

          setRedirectContact = () => {
            this.setState({
              redirectContact: true
            })
          }
  
          renderRedirectContact = () => {
            if (this.state.redirectContact) {
              return <Redirect to='./ContactUs' />
            }
          }


    render() {
        return(
        <div className="header">
            <img src= {logo} className="image"></img>
            <div className="loginRegButton" onClick={this.setRedirectLoginReg}>
                {
                    this.props.username!=null
                    ?
                        <h3>خوش آمدید {this.props.username}</h3>
                    :
                        <div>
                    {this.renderRedirectLoginReg()}
                    ورود / ثبت نام
                            <div className="homeButton" onClick={this.setRedirectHome}>
                                {this.renderRedirectHome()}
                            </div>
                        </div>
                }
            </div>
            

            <div className="contactButton" onClick={this.setRedirectContact}>
            {this.renderRedirectContact()} 
                تماس با ما       
            </div>
            <div className="aboutButton" onClick={this.setRedirectAbout}>
            {this.renderRedirectAbout()} 
                درباره سایت    
            </div>
            <form className="searchBar" onSubmit={this.setGotoSearch}>
              {this.renderSearch()}
              
                <input type = "text" name = "search" placeholder = "استاد یا دانشگاه مورد نظر خود را جستجو کنید" onChange={this.handleChange}></input>
            </form>
            </div>
        
        );
    }
}
//<OnSearch value={this.state.value}/>
export default Header;