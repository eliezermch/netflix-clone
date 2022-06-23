import axios from "axios";

const API_KEY = "eaa274ab94f09f6970f1cccdc38f24ff";
const API_KEY_IMDB = "k_dd3br0b9";
// + "k_awj490vh"
// "k_bdfppuax"
// "k_lje94aw3"
// "k_sb8bbr69"
// "k_tqf2o3si"
// +
// "k_czcwl32n"
// "k_zxz837o9"
// "k_8mkwub1j"
// "k_zdi41bi7"
// "k_i1qgep2h"
// "k_v2g2yxzz"

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  params: {
    api_key: API_KEY,
  },
});

function getTredingNetflixOriginal() {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await api(`/discover/tv?with_networks=213`);
      const movies = data.results;
      resolve(movies);
    } catch (error) {
      reject(error);
    }
  });
}

function getTredingMovies() {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await api(`/trending/movie/day`);
      const movies = data.results;
      resolve(movies);
    } catch (error) {
      reject(error);
    }
  });
}

function getTredingMoviesActions() {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await api(`/discover/movie?with_genres=28`);
      const movies = data.results;
      resolve(movies);
    } catch (error) {
      reject(error);
    }
  });
}

function getTredingMoviesHorror() {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await api(`/discover/movie?with_genres=27`);
      const movies = data.results;
      resolve(movies);
    } catch (error) {
      reject(error);
    }
  });
}

function getTredingMoviesRomance() {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await api(`/discover/movie?with_genres=10749`);
      const movies = data.results;
      resolve(movies);
    } catch (error) {
      reject(error);
    }
  });
}

function getSearchFilms(value) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        `https://imdb-api.com/en/API/Search/${API_KEY_IMDB}/${value}`
      );
      const data = await response.json();
      resolve(data.results);
    } catch (error) {
      reject(error);
    }
  });
}

function getTrailerFilmsId(id) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        `https://imdb-api.com/en/API/YouTubeTrailer/${API_KEY_IMDB}/${id}`
      );
      const data = await response.json();
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
}

function getYoutubeTrailerFilms(id) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        `https://imdb-api.com/API/YouTube/${API_KEY_IMDB}/${id}`
      );
      const data = await response.json();
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
}

function getFilmById(id) {
  return new Promise(async (resolve, reject) => {
    try {
      const { data: movie } = await api(`/movie/${id}`);
      resolve(movie);
    } catch (error) {
      reject(error);
    }
  });
}

function getVideoById(id) {
  return new Promise(async (resolve, reject) => {
    try {
      const { data: movie } = await api(`/movie/${id}/videos`);
      resolve(movie);
    } catch (error) {
      reject(error);
    }
  });
}

export {
  getTredingNetflixOriginal,
  getTredingMoviesActions,
  getTredingMovies,
  getTredingMoviesHorror,
  getTredingMoviesRomance,
  getFilmById,
  getVideoById,
  getSearchFilms,
  getYoutubeTrailerFilms,
  // eslint-disable-next-line comma-dangle
  getTrailerFilmsId,
};
