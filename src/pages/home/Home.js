import { useEffect, useState } from "react";

// Context
import { useGlobalState } from "../../context/Context";

// Components
import { Nav } from "../../components/nav/Nav";
import { Banner } from "../../components/banner/Banner";
import { Row } from "../../components/row/Row";
import { Footer } from "../../components/footer/Footer";

// Services
import {
  getTredingNetflixOriginal,
  getTredingMoviesHorror,
  getTredingMovies,
  getTredingMoviesRomance,
  // eslint-disable-next-line comma-dangle
  getTredingMoviesActions,
} from "../../services/imdb";

const Home = () => {
  const [state, dispatch] = useGlobalState();
  const [trendingNetflixOriginalRandom, setTrendingNetflixOriginalRandom] =
    useState([]);

  useEffect(() => {
    (async () => {
      if (!state.trendingNetflixOriginals.length) {
        const data = await getTredingNetflixOriginal();
        dispatch({ trendingNetflixOriginals: data });
      }
      if (!state.trendingMovies.length) {
        const data = await getTredingMovies();
        dispatch({ trendingMovies: data });
      }
      if (!state.trendingActions.length) {
        const data = await getTredingMoviesActions();
        dispatch({ trendingActions: data });
      }
      if (!state.trendingHorrors.length) {
        const data = await getTredingMoviesHorror();
        dispatch({ trendingHorrors: data });
      }
      if (!state.trendingRomance.length) {
        const data = await getTredingMoviesRomance();
        dispatch({ trendingRomance: data });
      }
    })();
  }, []);

  useEffect(() => {
    (() => {
      const bannerFilm =
        state.trendingNetflixOriginals[
          Math.floor(Math.random() * state.trendingNetflixOriginals.length)
        ] || undefined;
      setTrendingNetflixOriginalRandom(bannerFilm);
    })();
  }, [state.trendingNetflixOriginals]);

  return (
    <>
      <Nav />

      <Banner mode="default" film={trendingNetflixOriginalRandom} />

      <Row
        style="slider"
        items={state.trendingMovies}
        title="Trending Movies"
      />
      <Row style="slider" items={state.trendingActions} title="Action" />
      <Row style="slider" items={state.trendingHorrors} title="Horror" />
      <Row style="slider" items={state.trendingRomance} title="Romance" />

      <Row
        style="slider"
        items={state.trendingNetflixOriginals}
        title="Netflix Trendings"
      />

      <Footer />
    </>
  );
};

export { Home };
