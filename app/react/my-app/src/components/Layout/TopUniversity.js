import React, {Component} from 'react';
import propTypes from 'prop-types';
import TopUniversityItem from './TopUniversityItem';

class TopUniversity extends Component {

    render() {
        return this.props.universitiesList.map((topUniversity) => (
            <TopUniversityItem name = {topUniversity.name} topUniversity = {topUniversity}/>
        ));
    }
}

TopUniversity.propTypes = {
    topUniversity: propTypes.array.isRequired
}

export default TopUniversity;