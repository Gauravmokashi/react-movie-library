import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { Pagination } from "./common/pagination";
import { paginate } from "../utils/paginate";
import { GenereList } from "./common/genereList";
import { getGenres } from "../services/fakeGenreService";
import MovieTable from "./common/movieTable";
import { NavLink } from "react-router-dom";
import _ from "lodash";

export class Movies extends Component {
  state = {
    movies: [],
    genere: [],
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" },
    currentGenere: "All Generes",
  };

  componentDidMount = () => {
    const genere = [{ name: "All Generes", _id: "" }, ...getGenres()];
    this.setState({ movies: getMovies(), genere });
  };

  handleDelete = (movie) => {
    this.state.movies.splice(this.state.movies.indexOf(movie), 1);
    this.setState({ movie });
  };

  handleLike = (movie) => {
    movie.liked = !movie.liked;
    this.setState({ movie });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenereSelect = (genere) => {
    let movies;
    if (!genere._id) {
      movies = getMovies();
    } else {
      movies = getMovies().filter((m) => {
        return m.genre._id === genere._id;
      });
    }
    this.setState({ currentGenere: genere, currentPage: 1 });
    // this.setState({movies:getMovies()})
    this.setState({ movies });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  render() {
    const { length: count } = this.state.movies;
    if (count === 0) {
      return <p>There are no movies in database.</p>;
    }

    const sorted = _.orderBy(
      this.state.movies,
      [this.state.sortColumn.path],
      [this.state.sortColumn.order]
    );

    const movies = paginate(
      sorted,
      this.state.currentPage,
      this.state.pageSize
    );

    return (
      <React.Fragment>
        <div className="row">
          <GenereList
            genere={this.state.genere}
            currentGenere={this.state.currentGenere}
            onItemSelect={this.handleGenereSelect}
          />
          <div>
            <NavLink className="nav-link" to="/movies/new">
              <button className="btn btn-primary">New Movie</button>
            </NavLink>
            <p>There are {count} movies in database.</p>
            <MovieTable
              movies={movies}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
              sortColumn={this.state.sortColumn}
            />
          </div>
        </div>
        <Pagination
          itemCount={count}
          pageSize={this.state.pageSize}
          currentPage={this.state.currentPage}
          onPageChange={this.handlePageChange}
        ></Pagination>
      </React.Fragment>
    );
  }
}

export default Movies;
