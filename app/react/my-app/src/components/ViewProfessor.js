
import React, {Component} from 'react';
import '../newCss.css';
import Header from './Header';
import { Redirect } from 'react-router-dom';
import TopProfessorItem from './Layout/TopProfessorItem';
import Rate from './Layout/Rate';
import axios from 'axios';
 
//var jsonData = require('../../file.json');

var data = [
    {
      "id": 1,
      "university": "علم و صنعت",
      "likes": "6",
      "dislikes": "3",
      "date": "۱۳۹۸/۵/۲۲",
      "overall_score": "۶۰۸",
      "food_rate":"",
      "sequrity_rate": "",
      "location_rate": "",
      "comment": "",
      "internet_rate": "",
      "facility_rate": ""
    }
];


class ViewProfessor extends React.Component {
    
    constructor() {
        super();
      }
      
      state = {
        rateList: [
          {
            "username": "96441119",
            "professor": "Behrooz Minaii",
            "overall_score":"3",
            "university": "IUST",
            "quality": "4",
            "grade_rate": "2",
            "difficulty": "4",
            "notebook": false,
            "attendance": true,
            "comment": "goood"
          }
        ],
        redirectProfessorRate:false,
        first_name: "a",
        last_name: "b"
      } 

        setRedirectProfessorRate = () => {
          this.setState({
            redirectProfessorRate: true
          })
        }

        renderRedirectProfessorRate = () => {
          if (this.state.redirectProfessorRate) {
            return <Redirect to={{pathname: './ProfessorRate',
            state: {
              id: this.state.id,
              first_name: this.state.first_name,
              last_name:this.state.last_name
            }
           }} />
          }
        }


        get_data = () => {
          const headers = {
            'Content-Type': 'application/json',
          }
          let HOST = 'http://127.0.0.1:8000';
  
          axios.get(`${HOST}/user/get-rates/${this.props.location.state.id}`, {}, {headers:headers}).then(
            res => {
              var rates = res.data;
              
              console.log(rates);
              this.setState({rateList: rates})
            }
          )
        }


        componentWillMount(){
          this.get_data();
        }

      //componentDidMount() {
      //  axios.get('/user/get-top-professors', data, {headers:headers}).then(
      //    res => console.log(res.data)
      //  )
      //}
  render() {
    
    return (                
      <div>
        <Header/> 
        <div className="allBackground">
            <h1>استاد {this.props.location.state.first_name} {this.props.location.state.last_name}</h1>
            <h1 id="scorep">امتیاز {this.props.location.state.overall_score}</h1>
            <h2>دانشگاه: {this.props.location.state.university}</h2>
            <hr/>
            <div>{this.renderRedirectProfessorRate()}<button className="buttonStudent" onClick={this.setRedirectProfessorRate}><span>ارزیابی استاد</span></button></div>
            <div className="comments">
                Rates By Regular Students
            </div>
            <Rate rateList={this.state.rateList}/>
        </div>
      </div>
    );
  }
}


//<h3>ایمیل: {jsonData.email}</h3>
//<h3>شماره تماس: {jsonData.phone}</h3>
//<h3>فکس: {jsonData.fax}</h3>
//<h4>سایت: {jsonData.webpage}</h4>      
//<p>نشانی: {jsonData.address}</p>

export default ViewProfessor;