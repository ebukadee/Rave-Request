import { data } from "autoprefixer";
import useFetch from "../hooks/useFetch";

export default function Song() {
  const [data] = useLoaderData();
  return (
    <section className="w-full h-[100vh] bg-primary">
      <div>
        <img src={data?.data.albumOfTrack.coverArt.sources[1].url} />
        <h3>{data?.data.name}</h3>
        <h3>{data?.data.artists.items[0].profile.name}</h3>
      </div>
    </section>
  );
}


export async function  songsLoader  ({params}){
    const [data] = useFetch()

}
