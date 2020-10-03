import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import Movies from "./component/movies";
import Customers from "./component/customers";
import Rentals from "./component/rentals";
import NotFound from "./component/notFound";
import Navbar from "./component/navbar";
import MovieForm from "./component/movieForm";
import LoginForm from "./component/loginForm";
import ResgisterForm from "./component/resgisterForm";
import "./App.css";
import NewMovie from "./component/newMovie";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main className="container">
        <Switch>
          <Route path="/login" component={LoginForm}></Route>
          <Route path="/register" component={ResgisterForm}></Route>
          <Route path="/movies/new" component={NewMovie}></Route>
          <Route path="/movies/:id" component={MovieForm}></Route>
          <Route path="/movies" component={Movies}></Route>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/rentals" component={Rentals}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
