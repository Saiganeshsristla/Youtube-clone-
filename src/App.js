import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Store from "./utils/Store";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchResult from "./components/SearchResult";

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body/>,
  children: [
    {
      path: "/",
      element: <MainContainer/>
    },
    {
      path: "watch",
      element: <WatchPage/>
    },
    {
      path:"search/:query",
      element: <SearchResult/>
    }
  ]
}])

function App() {
  return (
    <Provider store={Store}>
      <Header />
      <RouterProvider router={appRouter}/>
    </Provider>
  );
}

export default App;
