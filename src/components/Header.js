import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/AppSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const [SearchQuery, setSearchQuery] = useState("");
  const [Suggestions, setSuggestions] = useState([]);
  const [ShowSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[SearchQuery]) {
        setSuggestions(searchCache[SearchQuery]);
      } else {
        getSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [SearchQuery]);

  const getSuggestions = async () => {
    console.log("API fetching..." + SearchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + SearchQuery);
    const json = await data.json();

    setSuggestions(json[1]);
    dispatch(cacheResults({ [SearchQuery]: json[1] }));
  };

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className=" grid grid-flow-col shadow-xl fixed w-full bg-white">
      <div className=" m-2 flex col-span-1">
        <img
          className="h-10 mt-3 cursor-pointer"
          alt="hamburger-logo"
          src="https://static.vecteezy.com/system/resources/previews/002/292/406/original/hamburger-menu-line-icon-free-vector.jpg"
          onClick={() => handleToggleMenu()}
        ></img>
        <a href="/">
          <img
            className="h-16 cursor-pointer"
            alt="youtube-logo"
            src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
          ></img>
        </a>
      </div>

      <div className=" col-span-10 ml-44 mt-2">
        <div>
          <input
            className="border border-gray-400 w-1/2 h-8 mt-4 rounded-l-full p-2 px-4"
            type="text"
            spellCheck="false"
            value={SearchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          ></input>
          <a href={"/search/" + SearchQuery}>
            <button className="border border-gray-400 rounded-r-full bg-gray-200 h-8 px-4 pt-[0.5px]">
              🔍
            </button>
          </a>
        </div>
        {ShowSuggestions && (
          <div className="fixed bg-white w-[30rem] ml-2 px-3 py-3 shadow-lg rounded-lg">
            <ul>
              {Suggestions.map((Suggestion, i) => (
                <li key={i} className="p-2 hover:bg-gray-100">
                  🔍 {Suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1">
        <img
          className="h-6 mt-6"
          alt="user-icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81iX4Mo49Z3oCPSx-GtgiMAkdDop2uVmVvw&usqp=CAU"
        ></img>
      </div>
    </div>
  );
};

export default Header;
