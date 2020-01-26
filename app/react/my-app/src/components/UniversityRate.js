
import React, {Component} from 'react';
import '../newCss.css';
import Header from './Header';
import { Redirect } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';
import Comments from './Layout/Comment';
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


class UniversityRate extends React.Component {
    
    constructor() {
        super();
     
        this.state = {
          overall_score:1,
          food_rate: 1,
          sequrity_rate: 1,
          location_rate: 1,
          internet_rate: 1,
          facility_rate: 1
        };
      }

  onStarClickOverall(nextValue, prevValue, name) {
    this.setState({overall_score: nextValue});
  }
  onStarClickFood(nextValue, prevValue, name) {
    this.setState({food_rate: nextValue});
  }
  onStarClickSequrity(nextValue, prevValue, name) {
    this.setState({sequrity_rate: nextValue});
  }
  onStarClickLocation(nextValue, prevValue, name) {
    this.setState({location_rate: nextValue});
  }
  onStarClickInternet(nextValue, prevValue, name) {
    this.setState({internet_rate: nextValue});
  }
  onStarClickFacility(nextValue, prevValue, name) {
    this.setState({facility_rate: nextValue});
  }
 
  render() {
    const { overall_score } = this.state;
    const { food_rate } = this.state;
    const { sequrity_rate } = this.state;
    const { location_rate } = this.state;
    const { internet_rate } = this.state;
    const { facility_rate } = this.state;
    const jsonData = {
      id: 1,
      university: "علم و صنعت",
      likes: "6",
      dislikes: "3",
      date: "۱۳۹۸/۵/۲۲",
      score: "۶.۸",
    }
    
    return (                
      <div>
        <Header/> 
        <div className="allBackground">
            <div className="infoPart">
                <h1>دانشگاه a</h1>
            </div>
            <div className="ratePart">
                <table>
                    <tr className="row">
                        <td><StarRatingComponent 
                          name="rate1" 
                          starCount={5}
                          value={overall_score}
                          onStarClick={this.onStarClickOverall.bind(this)}/></td>
                        <td><p>امتیاز از دید شما : {overall_score}</p></td>
                    </tr>
                    <tr className="row">
                        <td><StarRatingComponent 
                          name="rate2" 
                          starCount={5}
                          value={food_rate}
                          onStarClick={this.onStarClickFood.bind(this)}/></td>
                        <td><p>کیفیت غذا : {food_rate}</p></td>
                    </tr>
                    <tr className="row">
                        <td><StarRatingComponent 
                          name="rate3" 
                          starCount={5}
                          value={sequrity_rate}
                          onStarClick={this.onStarClickSequrity.bind(this)}/></td>
                        <td><p>امنیت : {sequrity_rate}</p></td>
                    </tr>
                    <tr className="row">
                        <td><StarRatingComponent 
                          name="rate4" 
                          starCount={5}
                          value={location_rate}
                          onStarClick={this.onStarClickLocation.bind(this)}/></td>
                        <td><p>دسترسی وسایل نقلیه عمومی(محل دانشگاه) : {location_rate}</p></td>
                    </tr>
                    <tr className="row">
                        <td><StarRatingComponent 
                          name="rate5" 
                          starCount={5}
                          value={internet_rate}
                          onStarClick={this.onStarClickInternet.bind(this)}/></td>
                        <td><p>کیفیت اینترنت : {internet_rate}</p></td>
                    </tr>
                    <tr className="row">
                        <td><StarRatingComponent 
                          name="rate6" 
                          starCount={5}
                          value={facility_rate}
                          onStarClick={this.onStarClickFacility.bind(this)}/></td>
                        <td><p>امکانات : {facility_rate}</p></td>
                    </tr>
                    <tr>
                      <td>
                      <textarea></textarea>
                      </td>
                      <td>
                        comment:
                      </td>
                    </tr>
                    <td></td>
                </table>
                <br/>
                <button className="submit" onClick={this.setRedirectStudent}><span>تایید</span></button>
            </div>
        </div>
      </div>
    );
  }
}

export default UniversityRate;