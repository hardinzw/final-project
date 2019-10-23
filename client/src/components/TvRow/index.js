import React from 'react';
import './style.css';

class TvRow extends React.Component {
    viewTv() {
        const url = "https://www.themoviedb.org/tv/" + this.props.tv.id;
        window.location.href = url;       
    }
    
    render() {
        return <table key={this.props.tv.id}>
        <tbody>
          <tr className="container">
          <img className="backdrop" src={this.props.tv.backdrop_path}></img>
            <td className='media-poster'>
              <img src={this.props.tv.poster_src} alt='poster'/>
            </td>
            <td className='media-info'>
              <h3>{this.props.tv.name}</h3>
              <h4>Synopsis</h4>
              <p>{this.props.tv.overview}</p>
              <h4>User Ratings</h4>
              <p>{this.props.tv.vote_average}/10</p>
              <h4>Available Streaming Options</h4>
              <input type="button" onClick={this.viewTv.bind(this)} value="View"/>
            </td>
          </tr>
        </tbody>
      </table>
    }
}

export default TvRow