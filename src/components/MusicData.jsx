import { useQuery } from "react-query";
import axios from "axios";

const getMusic = () => {
  const options = {
    method: "GET",
    url: "https://spotify23.p.rapidapi.com/search/",
    params: {
      q: "dunsin",
      type: "tracks",
      offset: "0",
      limit: "10",
      numberOfTopResults: "5",
    },

    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_SPOTIFY_API_KEY,
      "X-RapidAPI-Host": import.meta.env.VITE_API_HOST,
    },
  };
  return axios.request(options);
};
const MusicData = () => {
  const { isLoading, isError, data, error } = useQuery("musicData", getMusic);
  console.log(data?.data.tracks[0])

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  } else {
    return(
      // <div>
      //   {data?.data.tracks.map((track)=>(
      //     <div key={track.data.id}>
      //     <h3>{track.data.name}</h3>

      //     </div>
      //   ))}
      // </div>
      ""
    );
  }

  // return (<div>{

  //   // data.data.albums.items.map((what)=>{
  //   //   <>
  //   //   <h3>{JSON.stringify(what)}</h3>
  //   //   </>
  //   // })
  //   }</div>);
};

export default MusicData;
