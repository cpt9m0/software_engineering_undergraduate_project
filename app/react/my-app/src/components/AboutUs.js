import React, {Component} from 'react';
import propTypes from 'prop-types';
import Header from './Header';

class AboutUs extends Component {

    render() {
        
        return(
            <div>
            <Header/>
            <div className="allBackground">
                <h1>درباره ما</h1>
               <p>.اعضای تیم این پروژه تمام تلاش لازم برای اهداف این سایت را در حد توان خود فراهم کرده اند. علی آیتی مسئول مدیریت پروژه و همچنین در قسمت بک اند و صدرا حیدری مقدم و رضا قهرمانی با همکاری یکدیگر قسمت فرانت را انجام داده اند. میرحسین سیدنصیر و سها جعفری نیز در قسمت طراحی دیاگرام ها فعالیت داشته اند.</p>
            </div>
            </div>
            
        );
    }
}

export default AboutUs;