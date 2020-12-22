import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Topbar';
import Notes from './components/Notes';
import Createnote from './components/CreateNote';
import CurrentNote from './components/CurrentNote';
import { data } from "./data.json";
import { useState, useEffect } from 'react';

function App() {
  const [state, setState] = useState([]);  
  useEffect(() => {
    setState(data);
  }, []);
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Notes notesData={state} />
        </Route>
        <Route path="/note" exact>
          <Createnote setState={setState} state={state} />
        </Route>
        <Route path="/note/:id">
          <CurrentNote setState={setState} state={state} /> 
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
