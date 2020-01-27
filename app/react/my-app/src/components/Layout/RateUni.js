import React, {Component} from 'react';
import propTypes from 'prop-types';
import RateUniItem from './RateUniItem';

class RateUni extends Component {

    render() {
        return this.props.rateList.map((rate) => (
            <RateUniItem id = {rate.username} rate = {rate}/>
        ));
    }
}

RateUni.propTypes = {
    rate: propTypes.array.isRequired
}

export default RateUni;