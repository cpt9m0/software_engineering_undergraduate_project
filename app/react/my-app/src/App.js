import React from 'react';
import Login from './components/Login';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Register from './components/Register';
import Logintoregister from './components/Logintoregister';
import RegisterOstad from './components/RegisterOstad';
import ProfessorRate from './components/ProfessorRate';
import TopProfessors from './components/TopProfessors';
import ViewProfessor from './components/ViewProfessor';
import UniversityRate from './components/UniversityRate';
import TopUniversities from './components/TopUniversities';
import ViewUniversity from './components/ViewUniversity';
import Addpage from './components/Addpage';
import Test from './components/Test';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Comments from './components/Layout/Comment';
import ContactUs from './components/ContactUs';
import resultsearchPage from './components/resultsearchPage';

function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/Logintoregister" component={Logintoregister}/>
        <Route exact path="/Register" component={Register}/>
        <Route exact path="/RegisterOstad" component={RegisterOstad}/>
        <Route exact path="/ProfessorRate" component={ProfessorRate}/>
        <Route exact path="/UniversityRate" component={UniversityRate}/>
        <Route exact path="/Comment" component={Comments}/>
        <Route exact path="/Addpage" component={Addpage}/>
        <Route exact path="/Test" component={Test}/>
        <Route exact path="/TopProfessors" component={TopProfessors}/>
        <Route exact path="/TopUniversities" component={TopUniversities}/>
        <Route exact path="/ViewProfessor" component={ViewProfessor}/>
        <Route exact path="/ViewUniversity" component={ViewUniversity}/>
        <Route exact path="/AboutUs" component={AboutUs}/>
        <Route exact path="/ContactUs" component={ContactUs}/>
        <Route exact path="/resultsearchPage" component={resultsearchPage}/>
      </Switch>
    </Router>
    
  );
}

export default App;


//<Router>
//      <Switch>
//        <Route exact path="/" ><Login /></Route>
//        <Route path="/Logintoregister"><Logintoregister /></Route>
//        <Switch>
//        <Route path="/Logintoregister/Register"><Register /></Route>
//        <Route path="/Logintoregister/RegisterOstad"><RegisterOstad /></Route>
//        </Switch>
//        
//      </Switch>
//    </Router>