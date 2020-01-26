import React, { Component } from 'react'
import propTypes from 'prop-types';
import { BrowserRouter as Link} from 'react-router-dom';
import  '../../newCss.css';

export class searchOstadItem extends Component {

  
    render() {
        const{id, title} = this.props.sOstad;
        return (
            <div className="OstadItem">
                <h2>
                    { title }
                </h2>
               
            </div>
            
        )
    }
}

searchOstadItem.propTypes = {
    searchostadItem: propTypes.object.isRequired
}

export default searchOstadItem;
