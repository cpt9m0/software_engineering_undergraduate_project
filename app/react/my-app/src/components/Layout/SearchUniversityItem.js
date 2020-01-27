import React, { Component } from 'react'
import propTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import  '../../newCss.css';

export class SearchUniversityItem extends Component {

    state = {
        redirectUniversity:false,
        name: this.props.university.name, 
        overall_score: this.props.university.overall_score,
        likes: this.props.university.likes,
        dislikes: this.props.university.dislikes       
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
                    name: this.state.name,
                    overall_score: this.state.overall_score,
                    likes: this.state.likes,
                    dislikes: this.state.dislikes
                } }}/>
          }
        }

    render() {
        const{name, overall_score } = this.props.university;
        return (
        <div> {this.renderRedirectUniversity()}
            <div className="UniButton" onClick={this.setRedirectUniversity}>
                <table>
                    <tr>
                        <td id="But">دانشگاه {name}</td>
                        <td id="score">امتیاز {overall_score}</td>
                    </tr>

                </table>
            </div>
        </div>    
            
        )
    }
}

SearchUniversityItem.propTypes = {
    searchUniversityItem: propTypes.object.isRequired
}

export default SearchUniversityItem;
