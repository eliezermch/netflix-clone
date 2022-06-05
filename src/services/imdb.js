const API_KEY = "k_v2g2yxzz";
// "k_awj490vh"
// "k_bdfppuax"
// "k_lje94aw3"
// "k_sb8bbr69"
// "k_tqf2o3si"
// "k_dd3br0b9"
// "k_czcwl32n"
// "k_zxz837o9"
// "k_8mkwub1j"
// "k_zdi41bi7"
// "k_i1qgep2h"
//

function getTredingMovies() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        `https://imdb-api.com/en/API/MostPopularMovies/${API_KEY}`
      );
      const data = await response.json();
      resolve(data.items);
    } catch (error) {
      reject(error);
    }
  });
}

function getTredingTvShows() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        `https://imdb-api.com/en/API/MostPopularTVs/${API_KEY}`
      );
      const data = await response.json();
      resolve(data.items);
    } catch (error) {
      reject(error);
    }
  });
}

function getComingSoonFilms() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        `https://imdb-api.com/en/API/ComingSoon/${API_KEY}`
      );
      const data = await response.json();
      resolve(data.items);
    } catch (error) {
      reject(error);
    }
  });
}

function getSearchFilms(value) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        `https://imdb-api.com/en/API/Search/${API_KEY}/${value}`
      );
      const data = await response.json();
      resolve(data.results);
    } catch (error) {
      reject(error);
    }
  });
}

export {
  getTredingTvShows,
  getTredingMovies,
  getComingSoonFilms,
  // eslint-disable-next-line comma-dangle
  getSearchFilms,
};
