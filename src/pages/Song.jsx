import visualiser from "../assets/visualiser.svg"

import { useLoaderData, useParams } from "react-router-dom";

export default function Song() {
  const data = useLoaderData();
  const { songId } = useParams();
  return (
    <section className="w-full h-[100vh] bg-primary flex items-center justify-center ">
      <div>
          <img
            src={data?.tracks[0]?.album?.images[1]?.url}
            alt="Album cover"
            className="rounded-full"
          />

        <h3>{data?.tracks[0]?.name}</h3>
        <h3>{data?.tracks[0]?.artists[0].name}</h3>
        <audio controls>
          <source src={data?.tracks[0]?.preview_url} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </section>
  );
}
