
import React, {Component} from 'react';
import '../newCss.css';
import Header from './Header';
import { Redirect } from 'react-router-dom';
 
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
     
        this.state = {
          overall_score: 1,
          name: "",
          university: "",
          likes: "",
          dislikes: ""
        };
      }

      state = {
        redirectUniversityRate:false
      } 

        setRedirectUniversityRate = () => {
          this.setState({
            redirectUniversityRate: true
          })
        }

        renderRedirectUniversityRate = () => {
          if (this.state.redirectUniversityRate) {
            return <Redirect to='./UniversityRate' />
          }
        }

      //componentDidMount() {
      //  axios.get('/user/get-top-professors', data, {headers:headers}).then(
      //    res => console.log(res.data)
      //  )
      //}
  render() {
    const { overall_score } = this.state;
    const { name } = this.state;
    const { university } = this.state;
    const { likes } = this.state;
    const { dislikes } = this.state;
    const jsonData = {
        overall_score: 6.8,
        university: "علم و صنعت",
        phone: "(9821+)77451500-9",
        webpage: "http://www.iust.ac.ir/",
        postalCode: "13114-16846",
        address: " ایران، تهران، رسالت، خیابان هنگام، خیابان دانشگاه، دانشگاه علم و صنعت ایران",
        likes: "6",
        dislikes: "3"
    }
    
    return (                
      <div>
        <Header/> 
        <div className="allBackground">
            <h2>دانشگاه: {jsonData.university}</h2>
            <h1 id="scorep">امتیاز {jsonData.overall_score}</h1>
            <h1 id="plikes">likes: {jsonData.likes}</h1>
            <h1 id="pdislikes">dislikes: {jsonData.dislikes}</h1>
            <hr/>
            <h3>شماره تماس: {jsonData.phone}</h3>
            <h3>کد پستی: {jsonData.postalCode}</h3>
            <h4>سایت: {jsonData.webpage}</h4>      
            <p>نشانی: {jsonData.address}</p>
            <div>{this.renderRedirectUniversityRate()}<button className="buttonStudent" onClick={this.setRedirectUniversityRate}><span>ارزیابی دانشگاه</span></button></div>
            <div className="comments">
                Comments
            </div>
        </div>
      </div>
    );
  }
}

export default ViewUniversity;