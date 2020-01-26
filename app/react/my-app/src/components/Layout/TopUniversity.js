import React, {Component} from 'react';
import propTypes from 'prop-types';
import TopUniversityItem from './TopUniversityItem';

class TopUniversity extends Component {

    render() {
        return this.props.universitiesList.map((topUniversity) => (
            <TopUniversityItem id = {topUniversity.id} topUniversity = {topUniversity}/>
        ));
    }
}

TopUniversity.propTypes = {
    topUniversity: propTypes.array.isRequired
}

export default TopUniversity;