import logo from './logo.svg';
import './App.css';
import SurveyTwo from './components/surveyDisplays/surveyTwo';
import SurveyComponent from "./components/surveyCreator/surveyCreator"
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Layout from './Layout';

function App() {
   return (
    <Router>
      <div className="App">
       
     <Switch>
      <Route exact path="/" component={Layout }/>
      <Route exact path="/survey" component={SurveyTwo }/>
      <Route exact path="/survey-creator" component={SurveyComponent} />
        
     </Switch>
    </div>
    </Router>
  );
}

export default App;
