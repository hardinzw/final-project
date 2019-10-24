import React, { Component } from 'react';
import TvRow from '../components/TvRow';
import Headline from '../components/Headline'
import $ from 'jquery';
const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;

class TvPage extends Component {
  constructor(props) {
    super(props);
    this.state= {}

    this.performSearch("Lost");
  }

  searchHandler(event) {
    console.log(event.target.value);
    const boundObject = this;
    const searchTerm = event.target.value;
    boundObject.performSearch(searchTerm);
  }

  performSearch(searchTerm) {
    const urlString = "https://api.themoviedb.org/3/search/tv?api_key=670ce4fd89e289c48cab8e3e66610e09&query=" + searchTerm;
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("data retrieved");
        //console.log(searchResults);
        const results = searchResults.results;
        //console.log(results[0]);

        var tvRows = []

        results.forEach((tv) => {
          tv.poster_src="https://image.tmdb.org/t/p/w185" + tv.poster_path;
          tv.backdrop_path="https://image.tmdb.org/t/p/w780" + tv.backdrop_path;
          //console.log(movie.title);
          const tvRow = <TvRow key={tv.id} tv={tv}/>
          tvRows.push(tvRow)
        });

        this.setState({rows: tvRows})
      },
      error: (xhr, status, err) => {
      console.error("Failed to retreive data");
      }
    })
  }
  

render() {
  return (
    <div>
      <Headline />
      <div className="col-xs-12 search-container nopadding">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-lg-5">
            <form className="searchbox">
              {/* <label> */}
              <input
                ref="search suggestion"
                className="searchbox__input typeahead form-control"
                type="text"
                placeholder="Search TV Title..."
                id="q"
                onChange={this.searchHandler.bind(this)}
              />
              {/* </label> */}
            </form>
          </div>
        </div>
        {this.state.rows}
      </div>
    </div>
  );
 };
};

export default TvPage;