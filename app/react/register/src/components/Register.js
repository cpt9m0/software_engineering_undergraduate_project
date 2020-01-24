import React, { Component } from 'react'
import '../App.css';
//import propTypes from 'prop-types';

export class Register extends Component {
    render() {
        function checkPass() {
            var password= document.getElementById('psw').value ;
            var confirm= document.getElementById('confirm-psw').value;
            if (confirm!=password){
                var msg = document.getElementById("msg")
                var field = document.getElementById("submit")
                msg.innerHTML = "password not match"
                field.disabled = true;
            }
            else {
                var msg = document.getElementById("msg")
                var field = document.getElementById("submit")
                field.disabled = false;
                msg.innerHTML = ""
            }


        }

        return(

            <div class="main-container">
            <div className="main-forms">
                <div className="register-form">
                    <form className='register-back'>
                        <h1>Register</h1>
                        <div className="register-row">
                            <i className="user"></i>
                            <input type="text"
                            placeholder="FIRST NAME"/>
                        </div>
                        
                        <div className="register-row">
                            <i className="last-name"></i>
                            <input type="text" 
                            placeholder="LAST NAME"/>
                        </div>
                        <div className="register-row">
                            <i className="studentId"></i>
                            <input type="text"
                            placeholder="STUDENT ID"/>
                        </div>
                        <div className="register-row">
                            <i className="email"></i>
                            <input type="text"
                            placeholder="EMAIL"/>
                        </div>
                        <div className="register-row">
                            <i className="password"></i>
                            <input type="password" id = "psw" 
                            placeholder="PASSWORD" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required/>
                        </div>
                        <div className="register-row">
                            <i className="confirm-password"></i>
                            <input type="password" id = "confirm-psw"
                            placeholder="CONFIRM PASSWORD" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                            title="Repeat password" required onChange={checkPass}/>
                        </div>
                        <p id="msg" style={msg}></p>
                        <div className="register-row">
                            <a href="#">
                                <i className="submit"></i>
                                <button id="submit" disabled>SUBMIT</button>
                            </a>
                        </div>
                    </form>
                </div>
            </div>
            </div>
            
        )
    }
}

//const style = {
//    background: '#0074e4',
//    color: '#fff',
//    textAlign: 'center',
//    margin: '25%',
//    //marginRight: '25%',
//    width: '50%'
//}

const msg = {
    textAlign: 'center',
    fontSize: '12px'
}

export default Register;