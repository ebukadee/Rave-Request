import { useLoaderData, useParams } from "react-router-dom";

export default function Song() {
  const data = useLoaderData();
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
