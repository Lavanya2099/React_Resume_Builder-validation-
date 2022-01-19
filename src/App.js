import logo from './logo.svg';
import './App.css';
import EducationDetails from './components/EducationDetails';
 import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import PersonDetails from './components/PersonDetails';
import ProjectsDeveloped from './components/ProjectsDeveloped';
import ExperienceDetails from './components/ExperienceDetails';
import ExtraDetails from './components/ExtraDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import { IconName} from 'bootstrap-icons/bs'



function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Switch>
      <Route exact path='/'>
      <PersonDetails/>
      </Route>
      <Route  path='/educationDetails'>
      <EducationDetails />
      </Route>
      <Route  path='/projectDeveloped'>
      <ProjectsDeveloped/>
      </Route>
      <Route path='/experienceDetails'>
      <ExperienceDetails/>
      </Route>
      <Route  path='/extraDetails'>
      <ExtraDetails/>
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
