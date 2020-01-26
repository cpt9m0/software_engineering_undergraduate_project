
import React, {Component} from 'react';
import '../newCss.css';
import Header from './Header';
import News from './Layout/News';
import { Redirect, withRouter } from 'react-router-dom';
import axios from 'axios';

class Home extends Component {

  state = {
    newsList: [],
    redirectTopProfessors: false,
    redirectTopUniversities: false,
  }

  get_data = () => {
    const headers = {
      'Content-Type': 'application/json',
    }
    let HOST = 'http://127.0.0.1:8000';

    axios.get(`${HOST}/news/get-all-news/`, {}, {headers:headers}).then(
      res => {
          this.setState({newsList: res.data})
      }
    )
  }

  componentWillMount = function () {

    this.get_data();
    console.log(this.state.newsList);
    
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
                <Header username = {this.props.username}/>
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

export default withRouter(Home);