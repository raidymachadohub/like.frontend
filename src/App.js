import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from 'react';
import  Blog from "./components/add-blog.component";
import ListBlog from "./components/list-blog.component";
import { Switch, Route, Link } from "react-router-dom";


class App extends Component {
  render(){
    return (
      <div>
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"></link>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/list" className="navbar-brand">
            Like
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Blog
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/list"]} component={ListBlog} />
            <Route exact path="/add" component={Blog} />     
          </Switch>
        </div>
      </div>
    );    
  }
}
export default App;
