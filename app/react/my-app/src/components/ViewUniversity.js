
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
     
      }

      state = {
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
            <h1 id="plikes">likes: {this.props.location.state.likes}</h1>
            <h1 id="pdislikes">dislikes: {this.props.location.state.dislikes}</h1>
            <hr/>
            <div>{this.renderRedirectUniversityRate()}<button className="buttonStudent" onClick={this.setRedirectUniversityRate}><span>ارزیابی دانشگاه</span></button></div>
            <div className="comments">
                Comments
            </div>
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