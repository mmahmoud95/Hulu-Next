const API_KEY = process.env.API_KEY;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    fetchTrending: {
        title: "Trending",
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    },
    fetchTopRated: {
        title: "Top Rated",
        url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    },
    fetchActionMovies: {
        title: "Action",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    },
    fetchComedyMovies: {
        title: "Comedy",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    },
    fetchHororMovies: {
        title: "Horor",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    },
    fetchRomanceMovies: {
        title: "Romance",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    },
    fetchMysteryMovies: {
        title: "Mystery",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    },
    fetchSciFiMovies: {
        title: "Sci-Fi",
        url: `/discover/movie?api_key=${API_KEY}&with_generes=878`,
    },
    fetchWestern: {
        title: "Western",
        url: `/discover/movie?api_key=${API_KEY}&with_generes=37`,
    },
    fetchAnimation: {
        title: "Animation",
        url: `/discover/movie?api_key=${API_KEY}&with_generes=16`,
    },
    fetchTV: {
        title: "TV Movie",
        url: `/discover/movie?api_key=${API_KEY}&with_generes=10770`,
    },
};
