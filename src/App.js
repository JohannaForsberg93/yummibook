import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
// import { Button, Nav } from 'react-bootstrap';
import CreateNew from './Components/CreateNew';
import Home from './Components/Home'; //Home after Sign-up
import MyBooks from './Components/MyBooks';
import PublicBooks from './Components/PublicBooks';
import Navbar from './Components/Navbar';



import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MyRecipes from './Components/MyRecipes';

function App() {
  const [logIn, setLogIn] = useState(true)


  return (
    <div className="App">
      <Router>
        <Navbar isLoggedIn={logIn} />

        {/* React går igenom varje path och renderar alla matchningar. Switch gör så att den stannar så fort den hittar en matchning. */}
        <Switch>
          {/* Om man har exact så kommer den inte matcha ex /new/id=73273783 */}
          <Route path="/home" component={Home} />
          <Route exact path="/books/new" component={CreateNew} />
          <Route path="/books/all" component={MyBooks} />
          <Route path="/public-books" component={PublicBooks} />
          <Route path="/books/recipes" component={MyRecipes} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
