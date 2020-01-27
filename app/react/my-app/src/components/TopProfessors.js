
import React, {Component} from 'react';
import '../newCss.css';
import Header from './Header';
import { Redirect, withRouter } from 'react-router-dom';
import TopProfessor from './Layout/TopProfessor';
import axios from 'axios';
 
//var jsonData = require('../../file.json');

//var data = [
//    {
//      "id": 1,
//      "university": "علم و صنعت",
//      "likes": "6",
//      "dislikes": "3",
//      "date": "۱۳۹۸/۵/۲۲",
//      "overall_score": "۶۰۸",
//      "food_rate":"",
//      "sequrity_rate": "",
//      "location_rate": "",
//      "comment": "",
//      "internet_rate": "",
//      "facility_rate": ""
//    }
//];


class TopProfessors extends React.Component {
    
    constructor() {
        super();
      }


      state = {
        redirectProfessor:false,
        professorsList: []
      }

      get_data = () => {
        const headers = {
          'Content-Type': 'application/json',
        }
        let HOST = 'http://127.0.0.1:8000';

        axios.get(`${HOST}/user/get-top-professors/`, {}, {headers:headers}).then(
          res => {
            var rates = res.data;
            
            console.log(rates);
            this.setState({professorsList: rates})
          }
        )
      }

      componentWillMount(){        
        this.get_data();
      }
      
      componentWillUnmount() {
        this.props.history.goForward();
      }

        setRedirectProfessor = () => {
          this.setState({
            redirectProfessor: true
          })
        }

        renderRedirectProfessor = () => {
          if (this.state.redirectProfessor) {
            return <Redirect to='./ViewProfessor' />
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
          <TopProfessor professorsList={this.state.professorsList}/>
        </div>
      </div>
    );
  }
}


//const { overall_score } = this.state;
//const { name } = this.state;
//const { university } = this.state;
//const { likes } = this.state;
//const { dislikes } = this.state;
//const jsonData = {
//    overall_score: 8.8,
//    name: "مینایی",
//    university: "علم و صنعت",
//    likes: "10",
//    dislikes: "3"
//}

//<div> {this.renderRedirectProfessor()}
//            <div className="ProfessorButton" onClick={this.setRedirectProfessor}>
//                <table>
//                    <tr>
//                        <td id="But">استاد {jsonData.name}</td>
//                        <td id="But">{jsonData.university}</td>
//                        <td id="But">likes: {jsonData.likes}</td>
//                        <td id="But">dislikes: {jsonData.dislikes}</td>
//                        <td id="score">امتیاز {jsonData.overall_score}</td>
//                    </tr>
//
//                </table>
//            </div>
//            </div>

export default TopProfessors;