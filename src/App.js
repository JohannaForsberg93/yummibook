import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Nav } from 'react-bootstrap';
import CreateNew from './Components/CreateNew';
import Home from './Components/Home'; //Home after Sign-up
import MyBooks from './Components/MyBooks';
import PublicBooks from './Components/PublicBooks';
import Navbar from './Components/Navbar';
import StartPage from './Components/StartPage';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* Dölj StartPage när man är inloggad */}
        {/* <StartPage /> */}
        {/* React går igenom varje path och renderar alla matchningar. Switch gör så att den stannar så fort den hittar en matchning. */}
        <Switch>
          {/* Om man har exact så kommer den inte matcha ex /new/id=73273783 */}
          <Route exact path="/new" component={CreateNew} />
          <Route path="/home" component={Home} />
          <Route path="/my-books" component={MyBooks} />
          <Route path="/public-books" component={PublicBooks} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
