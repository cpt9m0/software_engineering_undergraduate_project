import React, { Component } from 'react'
import propTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import  '../../newCss.css';

export class TopUniversityItem extends Component {

    state = {
        redirectUniversity:false
      } 

        setRedirectUniversity = () => {
          this.setState({
            redirectUniversity: true
          })
        }

        renderRedirectUniversity = () => {
          if (this.state.redirectUniversity) {
            return <Redirect to='./ViewUniversity' />
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
