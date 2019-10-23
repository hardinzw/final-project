import axios from "axios";
const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export function loadTMDB() {
    return(dispatch) => {
        return axios.get("https://api.themoviedb.org/3/search/movie?api_key=" + TMDB_API_KEY + "&query=")
        .then((response) => {
            dispatch(movieSearch(response.data))
        })
    }
}