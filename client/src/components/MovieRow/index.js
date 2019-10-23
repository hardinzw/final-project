import React from 'react';
import './style.css';

class MovieRow extends React.Component {
    viewMovie() {
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id;
        window.location.href = url;       
    }
    
    render() {
        return <table key={this.props.movie.id}>
        <tbody> 
          <tr className="container">
          <img className="backdrop" src={this.props.movie.backdrop_path}></img> 
            <td className="media-poster">
              <img src={this.props.movie.poster_src} alt='poster'/>
            </td>
            <td className="media-info">
              <h3>{this.props.movie.title}</h3>
              <h4>Synopsis</h4>
              <p>{this.props.movie.overview}</p>
              <h4>User Ratings</h4>
              <p>{this.props.movie.vote_average}/10</p>
              <h4>Available Streaming Options</h4>
              <input type="button" onClick={this.viewMovie.bind(this)} value="View"/>
            </td>         
          </tr>                    
        </tbody>
      </table>
    }
}

export default MovieRow