
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


class TopProfessors extends React.Component {
    
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
        overall_score: 8.8,
        name: "مینایی",
        university: "علم و صنعت",
        likes: "10",
        dislikes: "3"
    }
    
    return (                
      <div>
        <Header/> 
        <div className="allBackground">
            <div className="ProfessorButton">
                <table>
                    <tr>
                        <td>استاد {jsonData.name}</td>
                        <td>{jsonData.university}</td>
                        <td>likes: {jsonData.likes}</td>
                        <td>dislikes: {jsonData.dislikes}</td>
                        <td id="score">امتیاز {jsonData.overall_score}</td>
                    </tr>

                </table>
            </div>
        </div>
      </div>
    );
  }
}

export default TopProfessors;