import React, { Component } from 'react'
import propTypes from 'prop-types';
import { BrowserRouter as Link} from 'react-router-dom';
import  '../../newCss.css';

export class NewsItem extends Component {

    // getStyle = () => {
    //     return {
    //         background: '#7F9EDC',
    //         padding: '10px',
    //         borderBottom: '1px #ccc dotted',
    //         padding: '20px',
    //     }
    // }
    render() {
        const{id, title, context} = this.props.news;
        return (
            <div className="newsItem">
                <h2>
                    { title }
                </h2>
                <p>
                    { context }
                </p>
            </div>
            
        )
    }
}

NewsItem.propTypes = {
    newsItem: propTypes.object.isRequired
}

export default NewsItem;
