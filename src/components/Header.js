import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/AppSlice";

const Header = () => {
  const dispatch = useDispatch();

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className=" grid grid-flow-col shadow-xl">
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
        <input
          className="border border-gray-400 w-1/2 h-8 mt-4 rounded-l-full p-2 px-4"
          type="text" spellCheck="false"
        ></input>
        <button className="border border-gray-400 rounded-r-full bg-gray-200 h-8 px-4 pt-[0.5px]">
          🔍
        </button>
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
