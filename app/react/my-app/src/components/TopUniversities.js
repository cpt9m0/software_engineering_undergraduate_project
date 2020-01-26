
import React, {Component} from 'react';
import '../newCss.css';
import Header from './Header';
import { Redirect } from 'react-router-dom';
import TopUniversity from './Layout/TopUniversity';
import axios from 'axios';
 
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

  get_data = () => {
    const headers = {
      'Content-Type': 'application/json',
    }
    let HOST = 'http://127.0.0.1:8000';
    axios.get(`${HOST}/university/get-top-universities/`, {}, {headers:headers}).then(
      res => {
        var universities = res.data;
        this.setState({universitiesList: universities})
      }
    )
  }

  state = {
    universitiesList: []
  }

  componentWillMount(){        
    this.get_data();
  }

  render() {
    
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