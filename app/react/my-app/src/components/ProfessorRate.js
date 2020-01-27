
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


class ProfessorRate extends React.Component {
    
    constructor() {
        super();
     
        this.state = {
          overall_score:1,
          quality: 1,
          grade_rate: 1,
          difficulty: 1,
          notebook: false,
          attendance: false
        };
      }

  onStarClickOverall(nextValue, prevValue, name) {
    this.setState({overall_score: nextValue});
  }
  onStarClickQuality(nextValue, prevValue, name) {
    this.setState({quality: nextValue});
  }
  onStarClickDifficulty(nextValue, prevValue, name) {
    this.setState({difficulty: nextValue});
  }
  onStarClickGradeRate(nextValue, prevValue, name) {
    this.setState({grade_rate: nextValue});
  }
  toggleChangeNotebook = () => {
    this.setState({notebook: !this.notebook})
  }
  toggleChangeAttendance = () => {
    this.setState({attendance: !this.attendance})
  }
 
  render() {
    const { overall_score } = this.state;
    const { quality } = this.state;
    const { grade_rate} = this.state;
    const { difficulty } = this.state;
    const { notebook } = this.state;
    const { attendance } = this.state;
    
    return (                
      <div>
        <Header/> 
        <div className="allBackground">
            <div className="infoPart">
                <h1>استاد مینایی</h1>
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
                          value={quality}
                          onStarClick={this.onStarClickQuality.bind(this)}/></td>
                        <td><p>کیفیت تدریس : {quality}</p></td>
                    </tr>
                    <tr className="row">
                        <td><StarRatingComponent 
                          name="rate3" 
                          starCount={5}
                          value={difficulty}
                          onStarClick={this.onStarClickDifficulty.bind(this)}/></td>
                        <td><p>میزان سختگیری : {difficulty}</p></td>
                    </tr>
                    <tr className="row">
                        <td><StarRatingComponent 
                          name="rate4" 
                          starCount={5}
                          value={grade_rate}
                          onStarClick={this.onStarClickGradeRate.bind(this)}/></td>
                        <td><p>کیفیت نمره دهی : {grade_rate}</p></td>
                    </tr>
                    <tr className="row">
                        <td><input type="checkbox"
                          checked={this.state.notebook}
                          onChange={this.toggleChangeNotebook.bind(this)}
                        /></td>
                        <td><p>دفتر : {notebook ? 'دارد' : 'ندارد'}</p></td>
                    </tr>
                    <tr className="row">
                        <td><input type="checkbox"
                          checked={this.state.attendance}
                          onChange={this.toggleChangeAttendance.bind(this)}
                        /></td>
                        <td><p>حضور و غیاب : {attendance ? 'دارد' : 'ندارد'}</p></td>
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

export default ProfessorRate;