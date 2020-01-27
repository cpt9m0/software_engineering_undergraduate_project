import React, {Component} from 'react';
import propTypes from 'prop-types';
import SearchUniversityItem from './SearchUniversityItem';

class SearchUniversity extends Component {

    render() {
        return this.props.universityList.map((university) => (
            <SearchUniversityItem id = {university.username} university = {university}/>
        ));
    }
}

SearchUniversity.propTypes = {
    university: propTypes.array.isRequired
}

export default SearchUniversity;