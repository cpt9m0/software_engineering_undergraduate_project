import React, {Component} from 'react';
import propTypes from 'prop-types';
import SearchProfessorItem from './SearchProfessorItem';

class SearchProfessor extends Component {

    render() {
        return this.props.professorList.map((professor) => (
            <SearchProfessorItem id = {professor.username} professor = {professor}/>
        ));
    }
}

SearchProfessor.propTypes = {
    professor: propTypes.array.isRequired
}

export default SearchProfessor;