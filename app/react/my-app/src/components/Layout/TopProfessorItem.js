import React, { Component } from 'react'
import propTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import  '../../newCss.css';

export class TopProfessorItem extends Component {

    state = {
        redirectProfessor:false, 
        id: this.props.topProfessor.username, 
        first_name: this.props.topProfessor.first_name,
        last_name: this.props.topProfessor.last_name,
        university: this.props.topProfessor.university, 
        overall_score: this.props.topProfessor.overall_score 
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
                } }}/>
          }
        }

    render() {
        console.log(this.props.topProfessor);
        console.log(this.props.topProfessor['overall_score']);
        const{username, first_name, last_name, university, overall_score } = this.props.topProfessor;
        console.log(username);
        
        return (
            <div> {this.renderRedirectProfessor()}
            <div className="ProfessorButton" onClick={this.setRedirectProfessor}>
                <table>
                    <tr>
                        <td id="But">استاد {first_name} {last_name}</td>
                        <td id="But">{university}</td>
                        <td id="score">امتیاز {this.props.topProfessor.overall_score}</td>
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
