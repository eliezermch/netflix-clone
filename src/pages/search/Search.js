import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

// Global State
import { useGlobalState } from "../../context/Context";

// Components
import { Nav } from "../../components/nav/Nav";
import { Row } from "../../components/row/Row";
import { Footer } from "../../components/footer/Footer";

// Services
import { getSearchFilms } from "../../services/imdb";

import "./search.css";

const Search = () => {
  const [state, dispatch] = useGlobalState();

  // Navigation
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("q");

  useEffect(() => {
    if (searchQuery) {
      (async () => {
        if (searchQuery !== state.searchFilms.value) {
          const data = await getSearchFilms(searchQuery);
          dispatch({ searchFilms: { value: searchQuery, items: data } });
        }
      })();
    }
  }, [searchQuery]);

  return (
    <>
      <Nav />
      <main className="search-container">
        <Row style="list" items={state.searchFilms.items} />
      </main>

      <Footer />
    </>
  );
};

export { Search };
