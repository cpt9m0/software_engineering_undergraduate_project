import React, {Component} from 'react';
import propTypes from 'prop-types';
import Header from './Header';

class ContactUs extends Component {

    render() {
        
        return(
            <div>
            <Header/>
            <div className="allBackground">
                <h1>ارتباط با ما</h1>
            </div>
            </div>
            
        );
    }
}

export default ContactUs;