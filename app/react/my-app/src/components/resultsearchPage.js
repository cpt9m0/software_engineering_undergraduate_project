import React, {Component} from 'react';
import '../App.css';
import '../newCss.css';
import Header from './Header';
import { Redirect } from 'react-router-dom';

class resultsearchPage extends Component {

    render() {
        
        return(
            <div>
            <Header/>

            <div class="split left">
           <h2>نتایج جستجو دانشگاه مورد نظر</h2>
            </div>
            <div class="split right">
                <h2>نتایج جستجو بر اساس استاد مورد نظر</h2>
  
  </div>
            </div>
            
        );
    }
}

export default resultsearchPage;