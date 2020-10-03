import Joi from "joi-browser";
import React from "react";
import { getGenres } from "../services/fakeGenreService";
import { getMovies } from "../services/fakeMovieService";
import Form from "./common/form";

export class NewMovie extends Form {
  state = {
    data: {
      title: "",
      genre: "",
      numberInStock: "",
      dailyRentalRate: "",
    },
    movies: [],
    genere: [],
    errors: {},
  };

  componentDidMount = () => {
    const genere = [{ name: "All Generes", _id: "" }, ...getGenres()];
    this.setState({ movies: getMovies(), genere });
  };

  schema = {
    title: Joi.string().required().min(5).label("Title"),
    genre: Joi.string().required().label("Genre"),
    numberInStock: Joi.number().required().max(100).label("Number in Stock"),
    dailyRentalRate: Joi.number().required().max(10).required("Rate"),
  };

  doSubmit(movie) {
    movie = {
      _id: "asasasasasas",
      publishDate: "2018-01-03T19:04:28.809Z",
      liked: false,
      ...movie,
    };
    console.log("NewMovie -> doSubmit -> movie", movie);

    console.log("NewMovie -> doSubmit ->  this.state.movies",  this.state.movies)
    let movies = this.state.movies.push(movie);
    this.setState({ movies });
    //call the Server
    console.log("movie Added");
  }
  render() {
    return (
      <div>
        <h1>Moive Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderInput("genre", "Genre")}
          {this.renderInput("numberInStock", "Number in Stock")}
          {this.renderInput("dailyRentalRate", "Rate")}
          {this.renderButton("Submit")}
        </form>
      </div>
    );
  }
}

export default NewMovie;
