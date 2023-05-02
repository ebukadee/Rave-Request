import Visualiser from "../components/visualiser";
import { useLoaderData, useParams } from "react-router-dom";

export default function Song() {
  const data = useLoaderData();
  return (
    <section className="w-full h-[100vh] bg-primary  ">
      <div className=" h-[80%] flex flex-col gap-3 items-center justify-center">
        <img
          src={data?.tracks[0]?.album?.images[1]?.url}
          alt="Album cover"
          className="w-32 rounded-full"
        />
        <Visualiser />

        <div>
          <h3>{data?.tracks[0]?.name}</h3>
          <h3>{data?.tracks[0]?.artists[0].name}</h3>
        </div>
      </div>
      <audio controls className="h-[20%] pb-8">
        <source src={data?.tracks[0]?.preview_url} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </section>
  );
}
