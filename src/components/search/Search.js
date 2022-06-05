import { useEffect, useRef, useState } from "react";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";

// Images
import searchIcon from "../../assets/images/icons/icon-search-white.png";

// Styles
import "./search.css";

function Search() {
  // Navigation
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("q");
  const isSearchPage = location.pathname === "/search";

  // Ref
  const searchInput = useRef(null);

  // States
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (isSearchPage && searchInput) {
      searchInput.current.focus();
    }
  }, []);

  useEffect(() => {
    setSearchValue(searchQuery || "");
  }, [searchQuery]);

  /* Handles */

  const handleSearch = (e) => {
    const val = e.target.value;
    if (val.length === 0) {
      searchParams.delete("q");
      navigate("/");
    } else if (val.length === 1 && !isSearchPage) {
      navigate(`search?q=${val}`);
    } else {
      if (val.length) {
        setSearchParams({ q: val });
      }
    }
  };

  return (
    <div className="nav-input__container">
      <button>
        <img
          className="nav-search-icon"
          src={searchIcon}
          alt="White search icon"
        />
      </button>
      <input
        value={searchValue}
        onChange={handleSearch}
        className="nav-search-input"
        type="text"
        placeholder="Search"
        ref={searchInput}
      />
    </div>
  );
}

export { Search };
