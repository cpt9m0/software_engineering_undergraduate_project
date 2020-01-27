import React, {Component} from 'react';
import propTypes from 'prop-types';
import RateItem from './RateItem';

class Rate extends Component {

    render() {
        return this.props.rateList.map((rate) => (
            <RateItem id = {rate.username} rate = {rate}/>
        ));
    }
}

Rate.propTypes = {
    rate: propTypes.array.isRequired
}

export default Rate;