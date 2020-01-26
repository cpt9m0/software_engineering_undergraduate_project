import React, { Component } from 'react'
import propTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import  '../../newCss.css';

export class TopProfessorItem extends Component {

    state = {
        redirectProfessor:false, 
        id: this.props.topProfessor.id, 
        first_name: this.props.topProfessor.first_name,
        last_name: this.props.topProfessor.last_name,
        university: this.props.topProfessor.university, 
        likes: this.props.topProfessor.likes, 
        dislikes: this.props.topProfessor.dislikes, 
        overall_score: this.props.topProfessor.overall_score , 
        comment: this.props.topProfessor.comment
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
                    likes: this.state.likes,
                    dislikes: this.state.dislikes,
                    university: this.state.university,
                    overall_score: this.state.overall_score,
                    comment: this.state.comment
                } }}/>
          }
        }

    render() {
        const{id, first_name, last_name, university, likes, dislikes, overall_score, comment } = this.props.topProfessor;
        return (
            <div> {this.renderRedirectProfessor()}
            <div className="ProfessorButton" onClick={this.setRedirectProfessor}>
                <table>
                    <tr>
                        <td id="But">استاد {first_name} {last_name}</td>
                        <td id="But">{university}</td>
                        <td id="But">likes: {likes}</td>
                        <td id="But">dislikes: {dislikes}</td>
                        <td id="score">امتیاز {overall_score}</td>
                    </tr>

                </table>
            </div>
            </div>
            
        )
    }
}

TopProfessorItem.propTypes = {
    topProfessorItem: propTypes.object.isRequired
}

export default TopProfessorItem;
