
import React, {Component} from 'react';
import '../newCss.css';
import Header from './Header';
import { Redirect } from 'react-router-dom';
import TopUniversity from './Layout/TopUniversity';
 
//var jsonData = require('../../file.json');

var data = [
    {
      "id": 1,
      "university": "دانشگاه علم و صنعت",
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
  }


  state = {
    universitiesList: [
      {
        id: "3",
        university: "Sharif",
        likes: "15",
        dislikes: "1",
        overall_score: "5",
        comment: "gooood"
      },
      {
        id: "4",
        university: "IUST",
        likes: "10",
        dislikes: "2",
        overall_score: "7",
        comment: "bad"
      },
      {
        id: "5",
        university: "Amirkabir",
        likes: "17",
        dislikes: "4",
        overall_score: "9",
        comment: "not bad"
      }
    ]
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
        score: "6.8"
      }
    
    return (                
      <div>
        <Header/> 
        <div className="allBackground">
          <TopUniversity universitiesList={this.state.universitiesList}/>
        </div>
      </div>
    );
  }
}

export default TopUniversities;