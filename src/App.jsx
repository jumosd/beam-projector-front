import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Ranking from "./pages/Ranking";
import Main from "./components/Main/Main";
import About from "./pages/About";
import Board from "./pages/Board";

function App() {
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
      path: "/ranking",
      element: <Ranking />,
    },
  ];

  return (
    <>
      <Header />
      <Main>
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
