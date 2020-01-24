import React, {Component} from 'react';
import propTypes from 'prop-types';
import NewsItem from './NewsItem';

class News extends Component {

    render() {
        return this.props.newsList.map((news) => (
            <NewsItem key = {news.id} news = {news} context = {news.context}/>
        ));
    }
}

News.propTypes = {
    news: propTypes.array.isRequired
}

export default News;