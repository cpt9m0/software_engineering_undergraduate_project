
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


class TopUniversities extends React.Component {
    
    constructor() {
        super();
     
        this.state = {
          overall_score: 1,
          name: "",
          likes: "",
          dislikes: ""
        };
      }

      //componentDidMount() {
      //  axios.get('/user/get-top-professors', data, {headers:headers}).then(
      //    res => console.log(res.data)
      //  )
      //}
  render() {
    const jsonData = {
        id: 1,
        university: "علم و صنعت",
        likes: "6",
        dislikes: "3",
        score: "۶.۸"
      }
    
    return (                
      <div>
        <Header/> 
        <div className="allBackground">
            <div className="UniversityButton">
                <table>
                    <tr>
                        <td id="But">دانشگاه {jsonData.university}</td>
                        <td id="But">likes: {jsonData.likes}</td>
                        <td id="But">dislikes: {jsonData.dislikes}</td>
                        <td id="score">امتیاز {jsonData.score}</td>
                    </tr>

                </table>
            </div>
        </div>
      </div>
    );
  }
}

export default TopUniversities;