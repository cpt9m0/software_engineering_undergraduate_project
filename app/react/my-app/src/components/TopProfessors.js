
import React, {Component} from 'react';
import '../newCss.css';
import Header from './Header';
import { Redirect } from 'react-router-dom';
import TopProfessor from './Layout/TopProfessor';
 
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
        professorsList: [
          {
            id: "1",
            first_name: "behrooz",
            last_name: "minaii",
            university: "IUST",
            likes: "10",
            dislikes: "1",
            overall_score: "10",
            comment: "gooood"
          },
          {
            id: "1",
            first_name: "sauleh",
            last_name: "etemadi",
            university: "IUST",
            likes: "15",
            dislikes: "5",
            overall_score: "9",
            comment: "not bad"
          }
        ]
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