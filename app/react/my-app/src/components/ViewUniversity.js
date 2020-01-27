
import React, {Component} from 'react';
import '../newCss.css';
import Header from './Header';
import { Redirect } from 'react-router-dom';
import RateUni from './Layout/RateUni';
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


class ViewUniversity extends React.Component {
    
    constructor() {
        super();
     
      }

      state = {
        rateList: [
          {
            "username": "96441119",
            "food_rate": "4",
            "sequrity_rate": "2",
            "location_rate": "3",
            "internet_rate": "1",
            "facility_rate": "2",
            "overall_score":"3",
            "comment": "not bad"
          }
        ],
        redirectUniversityRate:false,
        university: "a"
      } 

        setRedirectUniversityRate = () => {
          this.setState({
            redirectUniversityRate: true
          })
        }

        renderRedirectUniversityRate = () => {
          if (this.state.redirectUniversityRate) {
            return <Redirect to={{pathname: './UniversityRate',
            state: {
              id: this.state.id,
              university: this.state.university
            }
           }} />
          }
        }

        get_data = () => {
          const headers = {
            'Content-Type': 'application/json',
          }
          let HOST = 'http://127.0.0.1:8000';
  
          axios.get(`${HOST}/university/get-university-rates/?name=${this.props.location.state.name}`, {}, {headers:headers}).then(
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
            <h2>دانشگاه: {this.props.location.state.name}</h2>
            <h1 id="scorep">امتیاز {this.props.location.state.overall_score}</h1>
            <hr/>
            <div>{this.renderRedirectUniversityRate()}<button className="buttonStudent" onClick={this.setRedirectUniversityRate}><span>ارزیابی دانشگاه</span></button></div>
            <div className="comments">
                Comments
            </div>
            <RateUni rateList={this.state.rateList}/>
        </div>
      </div>
    );
  }
}


//<h3>شماره تماس: {jsonData.phone}</h3>
//<h3>کد پستی: {jsonData.postalCode}</h3>
//<h4>سایت: {jsonData.webpage}</h4>      
//<p>نشانی: {jsonData.address}</p>
export default ViewUniversity;