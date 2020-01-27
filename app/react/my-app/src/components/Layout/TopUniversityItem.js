import React, { Component } from 'react'
import propTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import  '../../newCss.css';

export class TopUniversityItem extends Component {

    state = {
        redirectUniversity:false,
        name: this.props.topUniversity.name, 
        overall_score: this.props.topUniversity.overall_score ,         
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
                } }}/>
          }
        }

    render() {
        const{name, overall_score } = this.props.topUniversity;
        return (
        <div> {this.renderRedirectUniversity()}
            <div className="UniversityButton" onClick={this.setRedirectUniversity}>
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

TopUniversityItem.propTypes = {
    topUniversityItem: propTypes.object.isRequired
}

export default TopUniversityItem;
