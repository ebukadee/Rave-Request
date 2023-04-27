import { createBrowserRouter, RouterProvider } from "react-router-dom";

import React from "react";
import Home from "./pages/Home";
import Jockey from "./pages/Jockey";
import Song from "./pages/Song";
import useFetch from "./hooks/useFetch";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/songs/:songId",
    element: <Song />,
  },
  {
    path: "/jockey",
    element: <Jockey />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
