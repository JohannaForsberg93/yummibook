import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import CreateNew from './Components/CreateNew';
import Home from './Components/Home'; //Home after Sign-up
import MyBooks from './Components/MyBooks';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MyRecipes from './Components/MyRecipes';
import NavbarComponent from './Components/NavbarComponent';

function App() {
  const [logIn] = useState(true)


  return (
    <div className="App">
      <Router>
        <NavbarComponent isLoggedIn={logIn} />
        {/* <Link to={{ pathname: "/books/recipes", state: { _id: "" } }}>Recipes</Link>
        <Link to={{ pathname: "/books/all" }}>Books All</Link>
        <Link to={{ pathname: "/books/new" }}>New</Link> */}

        {/* React går igenom varje path och renderar alla matchningar. Switch gör så att den stannar så fort den hittar en matchning. */}
        <Switch>
          {/* Om man har exact så kommer den inte matcha ex /new/id=73273783 */}
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route path="/books/new" component={CreateNew} />
          <Route path="/books/all" component={MyBooks} />
          <Route path="/books/recipes" component={MyRecipes} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
