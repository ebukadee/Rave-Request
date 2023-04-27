import { data } from "autoprefixer";
import useFetch from "../hooks/useFetch";
import { useLoaderData, useParams } from "react-router-dom";

export default function Song() {
  const { data } = useLoaderData();
  const { songId } = useParams();
  return (
    <section className="w-full h-[100vh] bg-primary">
      <div>
        <h3>{songId}</h3>
        <img src={data?.data.albumOfTrack.coverArt.sources[1].url} />
        <h3>{data?.data.name}</h3>
        <h3>{data?.data.artists.items[0].profile.name}</h3>
      </div>
    </section>
  );
}

