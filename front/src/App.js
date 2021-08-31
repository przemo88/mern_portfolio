import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Pages from './components/Pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">Strona główna</Route>
        <Route path="/pages">
          <Pages/>
        </Route>
      </Switch>
      
   </Router>
 
  );
}

export default App;
