
import React, {Component} from 'react';
import '../newCss.css';
import Header from './Header';
import News from './Layout/News';
import { Redirect } from 'react-router-dom';

class Home extends Component {

  state = {
    newsList: [
      {
        id: 1,
        title: "بررسی لغو امتیاز فرزندان اساتید توسط شورای انقلاب فرهنگی",
        url: "https://www.unp.ir/news/university/university-news/89015"
      },
      {
        id: 2,
        title: "سامانه پیشخوان ارائه خدمات آموزشی در وزارت بهداشت راه اندازی می شود",
        url: "https://www.unp.ir/news/university/university-news/89014"
      },
      {
        id: 3,
        title: "از پایان‌نامه‌های تحصیلات تکمیلی با موضوع مدیریت سبز حمایت مالی می شود",
        url: "https://www.unp.ir/news/university/university-news/89013"
      }
    ],
    redirectTopProfessors: false,
    redirectTopUniversities: false,
  }


  setRedirectTopProfessors = () => {
    this.setState({
      redirectTopProfessors: true
    })
  }

  renderRedirectTopProfessors = () => {
    if (this.state.redirectTopProfessors) {
      return <Redirect to='./TopProfessors' />
    }
  }

  setRedirectTopUniversities = () => {
    this.setState({
      redirectTopUniversities: true
    })
  }

  renderRedirectTopUniversities = () => {
    if (this.state.redirectTopUniversities) {
      return <Redirect to='./TopUniversities' />
    }
  }


    render() {
        return(
            <div className="Home">
                <Header/>
                <div className="allBackground">
                  <div className="Tops">
                  <table>
                    <td className="PButton" onClick={this.setRedirectTopProfessors}>{this.renderRedirectTopProfessors()}اساتید برتر</td>
                    <td className="UButton" onClick={this.setRedirectTopUniversities}>{this.renderRedirectTopUniversities()}دانشگاه های برتر</td>
                  </table>
                  </div>
                  <div className="News">
                    <News newsList={this.state.newsList}/>
                  </div>
                </div>
            </div>
            
        );
    }
}

export default Home;