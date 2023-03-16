const API_KEY = "79377be97c37c8e0237a07879bad61df";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
    fetchNetflixOriginal: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
}
export default requests;