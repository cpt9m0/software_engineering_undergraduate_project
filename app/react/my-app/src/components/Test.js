
import React, {Component} from 'react';
import '../newCss.css';
import News from './Layout/News';
import axios from 'axios';

import Header from './Header';

class Test extends Component {
    sendPost = event => {
        const headers = {
            'Content-Type': 'application/json',
        }
        const data = {
            "comment": "Test react",
            "total_score": 4,
            "food_rate": 4,
            "security_rate": 4,
            "location_rate": 4,
            "facility_rate": 4,
            "internet_rate": 4
        }
        let HOST = 'http://127.0.0.1:8000'

        axios.get(`${HOST}/university/get-university-rates/1/`, data, {headers:headers}).then(
            res => {
                console.log(res);
            }
          )          
    }
    render() {
        return(
            <div className="Home">
            <Header/>
            <div className="Test">
                <button onClick={this.sendPost}>send post</button>
            </div>
            </div>
        );
    }
}

export default Test;