import React, { Component } from 'react'
import propTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import  '../../newCss.css';

export class RateItem extends Component {


    render() {
        const{username, overall_score, food_rate, sequrity_rate, location_rate, internet_rate,facility_rate,comment} = this.props.rate;
        
        return (
            <div>
            <div className="rateButton1">
                <h3> {username} </h3>
                <div className="rateButton4">
                    <table>
                        <tr>
                            <td>overall_score: {overall_score}</td>
                            <td>food_rate: {food_rate}</td>
                            <td>sequrity_rate: {sequrity_rate}</td>
                            <td>location_rate: {location_rate}</td>
                            
                        </tr>
                    </table>
                    <table>
                        
                        <tr>
                            <td>internet_rate: {internet_rate}</td>
                            <td>facility_rate: {facility_rate}</td>
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
