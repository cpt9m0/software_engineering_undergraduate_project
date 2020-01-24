import React, {Component} from 'react';
import propTypes from 'prop-types';
import Header from './Header';

class AboutUs extends Component {

    render() {
        
        return(
            <div>
            <Header/>
            <div className="allBackground">
                <h1>درباره ما</h1>
            </div>
            </div>
            
        );
    }
}

export default AboutUs;