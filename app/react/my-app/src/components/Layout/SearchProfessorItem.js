import React, { Component } from 'react'
import propTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import  '../../newCss.css';

export class SearchProfessorItem extends Component {

    state = {
        redirectProfessor:false, 
        id: this.props.professor.username, 
        first_name: this.props.professor.first_name,
        last_name: this.props.professor.last_name,
        university: this.props.professor.university, 
        overall_score: this.props.professor.overall_score ,
        likes: this.props.professor.likes,
        dislikes: this.props.professor.dislikes
      } 

        setRedirectProfessor = () => {
          this.setState({
            redirectProfessor: true
          })
        }

        renderRedirectProfessor = () => {
          if (this.state.redirectProfessor) {
            return <Redirect to={{pathname:'./ViewProfessor',
                state: {
                    id: this.state.id,
                    first_name: this.state.first_name,
                    last_name:this.state.last_name,
                    university: this.state.university,
                    overall_score: this.state.overall_score,
                    likes: this.state.likes,
                    dislikes: this.state.dislikes
                } }}/>
          }
        }

    render() {
        const{username, first_name, last_name, university, overall_score } = this.props.professor;
        
        return (
            <div> {this.renderRedirectProfessor()}
            <div className="UniButton" onClick={this.setRedirectProfessor}>
                <table>
                    <tr>
                        <td id="But">استاد {first_name} {last_name}</td>
                        <td id="But">{university}</td>
                        <td id="score">امتیاز {this.props.professor.overall_score}</td>
                    </tr>

                </table>
            </div>
            </div>
            
        )
    }
}

SearchProfessorItem.propTypes = {
    searchProfessorItem: propTypes.object.isRequired
}

export default SearchProfessorItem;
