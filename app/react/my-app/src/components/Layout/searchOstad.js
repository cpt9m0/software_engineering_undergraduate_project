import React, {Component} from 'react';
import propTypes from 'prop-types';
import searchOstadItems from './searchOstadItems';

class searchOstad extends Component {

    render() {
        return this.props.OstadsList.map((sOstad) => (
            <searchOstadItems key = {sOstad.id} sOsatd = {sOstad}/>
        ));
    }
}

searchOstad.propTypes = {
    sOstad: propTypes.array.isRequired
}

export default searchOstad;