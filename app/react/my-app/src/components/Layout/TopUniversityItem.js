import React, { Component } from 'react'
import propTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import  '../../newCss.css';

export class TopUniversityItem extends Component {

    state = {
        redirectUniversity:false,
        id: this.props.topUniversity.id, 
        university: this.props.topUniversity.university, 
        likes: this.props.topUniversity.likes, 
        dislikes: this.props.topUniversity.dislikes, 
        overall_score: this.props.topUniversity.overall_score , 
        comment: this.props.topUniversity.comment
      } 

        setRedirectUniversity = () => {
          this.setState({
            redirectUniversity: true
          })
        }

        renderRedirectUniversity = () => {
          if (this.state.redirectUniversity) {
            return <Redirect to={{pathname:'./ViewUniversity',
                state: {
                    id: this.state.id,
                    likes: this.state.likes,
                    dislikes: this.state.dislikes,
                    university: this.state.university,
                    overall_score: this.state.overall_score,
                    comment: this.state.comment
                } }}/>
          }
        }

    render() {
        const{id, university, likes, dislikes, overall_score, comment } = this.props.topUniversity;
        return (
        <div> {this.renderRedirectUniversity()}
            <div className="UniversityButton" onClick={this.setRedirectUniversity}>
                <table>
                    <tr>
                        <td id="But">دانشگاه {university}</td>
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

TopUniversityItem.propTypes = {
    topUniversityItem: propTypes.object.isRequired
}

export default TopUniversityItem;
