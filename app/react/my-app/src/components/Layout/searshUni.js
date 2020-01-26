import React, {Component} from 'react';
import propTypes from 'prop-types';
import searchUniItems from './searchUniItems';

class searchUni extends Component {

    render() {
        return this.props.UnisList.map((sUni) => (
            <searchUniItems key = {sUni.id} sUni = {news} />
        ));
    }
}

searchUni.propTypes = {
    sUni: propTypes.array.isRequired
}

export default searchUni;