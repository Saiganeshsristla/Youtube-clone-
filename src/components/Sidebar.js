import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

    if(!isMenuOpen){
        return null;
    }

  return (
    <div className="ml-2 shadow-lg mt-2 p-2 w-60">
      <ul className="m-2">
        <li className="p-1 ml-3 cursor-pointer font-medium"><Link to="/">Home</Link></li>
        <li className="p-1 ml-3 cursor-pointer font-medium">Shorts</li>
        <li className="p-1 ml-3 cursor-pointer font-medium">Subsciptions</li>
      </ul>

      <ul className="m-2 mt-4">
        <li className="p-1 ml-3 cursor-pointer font-medium">Library</li>
        <li className="p-1 ml-3 cursor-pointer font-medium">History</li>
        <li className="p-1 ml-3 cursor-pointer font-medium">Your videos</li>
        <li className="p-1 ml-3 cursor-pointer font-medium">Watch laters</li>
        <li className="p-1 ml-3 cursor-pointer font-medium">Like videos</li>
      </ul>
      
      <ul className="m-2 mt-4">
        <h1 className="font-bold text-lg ml-3">Explore</h1>
        <li className="p-1 ml-3 cursor-pointer font-medium">Trending</li>
        <li className="p-1 ml-3 cursor-pointer font-medium">Shopping</li>
        <li className="p-1 ml-3 cursor-pointer font-medium">Music</li>
        <li className="p-1 ml-3 cursor-pointer font-medium">Movies</li>
        <li className="p-1 ml-3 cursor-pointer font-medium">Live</li>
        <li className="p-1 ml-3 cursor-pointer font-medium">Gaming</li>
        <li className="p-1 ml-3 cursor-pointer font-medium">News</li>
        <li className="p-1 ml-3 cursor-pointer font-medium">Sports</li>
        <li className="p-1 ml-3 cursor-pointer font-medium">Learning</li>
      </ul>
      
    </div>
  );
};

export default Sidebar;
