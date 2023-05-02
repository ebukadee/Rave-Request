import Visualiser from "../components/visualiser";
import { useLoaderData, useParams } from "react-router-dom";

export default function Song() {
  const data = useLoaderData();
  return (
    <section className="w-full h-[100vh] bg-primary  ">
      <div className=" h-full flex flex-col items-center justify-center">
        <img
          src={data?.tracks[0]?.album?.images[1]?.url}
          alt="Album cover"
          className="rounded-full"
        />
        <Visualiser />

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
