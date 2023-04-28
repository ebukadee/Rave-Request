import axios from "axios";

import { useLoaderData, useParams } from "react-router-dom";

export default function Song() {
  const { data } = useLoaderData();
  const { songId } = useParams();
  return (
    <section className="w-full h-[100vh] bg-primary">
      <div>
        <h3>{songId}</h3>
        <img src={data?.tracks[0].album.images[1].url} alt="Album cover" />
        <h3>{data?.tracks[0].name}</h3>
        <h3>{data?.tracks[0].artists[0].name}</h3>
      </div>
    </section>
  );
}

// loader function
export async function songLoader({ params }) {
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
  try {
    const response = await axios.request(options);
    // console.log(response.data);
    const data = await response.data;
    return data;
  } catch (error) {
    return error;
  }
}
