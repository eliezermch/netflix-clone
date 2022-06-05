import { useEffect } from "react";

// Context
import { useGlobalState } from "../../context/Context";

// Components
import { Nav } from "../../components/nav/Nav";
import { Banner } from "../../components/banner/Banner";
import { Row } from "../../components/row/Row";
import { Footer } from "../../components/footer/Footer";

// Services
import {
  getComingSoonFilms,
  getTredingMovies,
  // eslint-disable-next-line comma-dangle
  getTredingTvShows,
} from "../../services/imdb";

const Home = () => {
  const [state, dispatch] = useGlobalState();

  const bannerFilm =
    state.trendingTvShows[
      Math.floor(Math.random() * state.trendingTvShows.length)
    ] || undefined;

  useEffect(() => {
    (async () => {
      if (!state.trendingMovies.length) {
        const data = await getTredingMovies();
        dispatch({ trendingMovies: data });
      }
      if (!state.trendingTvShows.length) {
        const data = await getTredingTvShows();
        dispatch({ trendingTvShows: data });
      }
      if (!state.comingSoonFilms.length) {
        const data = await getComingSoonFilms();
        dispatch({ comingSoonFilms: data });
      }
    })();
  }, []);

  return (
    <>
      <Nav />

      <Banner film={bannerFilm} />

      <Row
        style="slider"
        items={state.trendingMovies}
        title="Trending Movies"
      />
      <Row
        style="slider"
        items={state.trendingTvShows}
        title="Trending Tv Shows"
      />
      <Row style="slider" items={state.comingSoonFilms} title="Coming Soon" />

      <Footer />
    </>
  );
};

export { Home };
