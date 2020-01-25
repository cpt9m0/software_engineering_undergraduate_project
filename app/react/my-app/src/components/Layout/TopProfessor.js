import React, {Component} from 'react';
import propTypes from 'prop-types';
import TopProfessorItem from './TopProfessorItem';

class TopProfessor extends Component {

    render() {
        return this.props.professorsList.map((topProfessor) => (
            <TopProfessorItem id = {topProfessor.id} topProfessor = {topProfessor}/>
        ));
    }
}

TopProfessor.propTypes = {
    topProfessor: propTypes.array.isRequired
}

export default TopProfessor;