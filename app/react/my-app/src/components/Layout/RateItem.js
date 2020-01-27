import React, { Component } from 'react'
import propTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import  '../../newCss.css';

export class RateItem extends Component {


    render() {
        const{username, professor,university, overall_score, quality, grade_rate, difficaullty,notebook, attendance, comment} = this.props.rate;
        
        return (
            <div>
            <div className="rateButton1">
                <h3> {username} </h3>
                <div className="rateButton4">
                    <table>
                        <tr>
                            <td>overall_score: {overall_score}</td>
                            <td>quality: {quality}</td>
                            <td>grade_rate: {grade_rate}</td>
                            <td>difficaullty: {difficaullty}</td>
                            
                        </tr>
                    </table>
                    <table>
                        
                    <tr>
                            <td>notebook: {notebook ? "دارد" : "ندارد" }</td>
                            <td>attendance: {attendance ? "دارد" : "ندارد" }</td>
                        </tr>
                    </table>
                    <table className="rateButton2">
                        <tr>
                            <td>comment: {comment}</td>
                        </tr>
                    </table>
                </div>
            </div>
            </div>
            
        )
    }
}

RateItem.propTypes = {
    rateItem: propTypes.object.isRequired
}

export default RateItem;
