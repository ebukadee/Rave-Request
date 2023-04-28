import axios from "axios";
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
    loader: async function songLoader({ params }) {
      const options = {
        method: "GET",
        url: "https://spotify23.p.rapidapi.com/tracks/",
        params: {
          ids: params.songId,
        },

        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_SPOTIFY_API_KEY,
          "X-RapidAPI-Host": import.meta.env.VITE_API_HOST,
        },
      };
      const response = await axios.request(options);
      const data = await response.data;
      return data;
    },
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
