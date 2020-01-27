import React, {Component} from 'react';
import '../App.css';
import '../newCss.css';
import Header from './Header';
import { Redirect } from 'react-router-dom';
import SearchUniversity from "./Layout/SearchUniversity";
import SearchProfessor from "./Layout/SearchProfessor";

class resultsearchPage extends Component {
    constructor() {
        super();
      }

    state = {
        universityList: [
            {
                "name": "IUST",
                "overall_score": "5",
                "likes": "10",
                "dislikes": "2"
            }
        ],
        professorList: [
            {
                "username": "1",
                "first_name": "Behrooz",
                "last_name": "minaaii",
                "university": "IUST",
                "overall_score": "5",
                "likes": "15",
                "dislikes": "5"
            }
        ]
      }

    render() {
        
        return(
            <div>
            <Header/>

            <div class="split left">
                <h2>نتایج جستجو دانشگاه مورد نظر</h2>
                <SearchUniversity universityList={this.state.universityList}/>
            </div>
            <div class="split right">
                <h2>نتایج جستجو بر اساس استاد مورد نظر</h2>
                <SearchProfessor professorList={this.state.professorList}/>
            </div>
            </div>
            
        );
    }
}

export default resultsearchPage;