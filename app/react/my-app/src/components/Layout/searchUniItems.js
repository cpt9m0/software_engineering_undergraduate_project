import React, { Component } from 'react'
import propTypes from 'prop-types';
import { BrowserRouter as Link} from 'react-router-dom';
import  '../../newCss.css';

export class searchUniItem extends Component {

   
    render() {
        const{id, title} = this.props.sUni;
        return (
            <div className="UniItem">
                <h2>
                    { title }
                </h2>
              
            </div>
            
        )
    }
}

seacrshUniItem.propTypes = {
    searchuniItem: propTypes.object.isRequired
}

export default searchUniItem;
