import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Ranking from "./pages/Ranking";
import Main from "./components/Main/Main";
import About from "./pages/About";
import Board from "./pages/Board";
import CreatePost from "./pages/CreatePost";
import useWatchLocation from "./hooks/useWatchLocation";

function App() {
  const watchState = useWatchLocation("/board/create");

  const router = [
    { path: "/", element: <Home /> },
    {
      path: "/login",
      // element: <Login />,
    },
    {
      path: "/signup",
      // element: <Signup />
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/board",
      element: <Board />,
    },
    {
      path: "/board/create",
      element: <CreatePost />,
    },
    {
      path: "/ranking",
      element: <Ranking />,
    },
  ];

  return (
    <>
      <Main>
        {!watchState && <Header />}
        <Routes>
          {router.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Main>
    </>
  );
}

export default App;
