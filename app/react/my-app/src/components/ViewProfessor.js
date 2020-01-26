
import React, {Component} from 'react';
import '../newCss.css';
import Header from './Header';
import { Redirect } from 'react-router-dom';
import TopProfessorItem from './Layout/TopProfessorItem';
 
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


class ViewProfessor extends React.Component {
    
    constructor() {
        super();
      }

      state = {
        redirectProfessorRate:false
      } 

        setRedirectProfessorRate = () => {
          this.setState({
            redirectProfessorRate: true
          })
        }

        renderRedirectProfessorRate = () => {
          if (this.state.redirectProfessorRate) {
            return <Redirect to='./ProfessorRate' />
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
        overall_score: 8.8,
        name: "مینایی",
        university: "علم و صنعت",
        email: "b_minaei-at-iust.ac.ir",
        phone: "+98-21-73225330",
        fax: "+98-21-73021616",
        address: " تهران، نارمک، دانشگاه علم و صنعت، دانشکده مهندسی کامپیوتر، اتاق 309",
        webpage: "http://webpages.iust.ac.ir/b_minaei",
        likes: "10",
        dislikes: "3"
    }
    
    return (                
      <div>
        <Header/> 
        <div className="allBackground">
            <h1>استاد {this.props.location.state.first_name} {this.props.location.state.last_name}</h1>
            <h1 id="scorep">امتیاز {this.props.location.state.overall_score}</h1>
            <h1 id="plikes">likes: {this.props.location.state.likes}</h1>
            <h1 id="pdislikes">dislikes: {this.props.location.state.dislikes}</h1>
            <h2>دانشگاه: {this.props.location.state.university}</h2>
            <hr/>
            <div>{this.renderRedirectProfessorRate()}<button className="buttonStudent" onClick={this.setRedirectProfessorRate}><span>ارزیابی استاد</span></button></div>
            <div className="comments">
                Comments
            </div>
        </div>
      </div>
    );
  }
}


//<h3>ایمیل: {jsonData.email}</h3>
//<h3>شماره تماس: {jsonData.phone}</h3>
//<h3>فکس: {jsonData.fax}</h3>
//<h4>سایت: {jsonData.webpage}</h4>      
//<p>نشانی: {jsonData.address}</p>

export default ViewProfessor;