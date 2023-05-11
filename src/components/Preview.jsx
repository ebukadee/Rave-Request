import { useState, useRef } from "react";

import useFetch from "../hooks/useFetch";
import useDebounce from "../hooks/useDebounce";
import { Link } from "react-router-dom";
import {
  MusicSquareSearch,
  SearchFavorite1,
  SearchStatus1,
} from "iconsax-react";

const Preview = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const [data, loading, error] = useFetch(debouncedSearchTerm);

  function handleClick(e) {
    e.preventDefault();
  }
  function handleOnChange(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <>
      <form className="flex flex-col my-2">
        <div className=" h-[40px] pl-2 rounded-md w-[300px] flex items-center gap-2 bg-mid">
          <MusicSquareSearch size={15} />
          <input
            className=" bg-transparent  placeholder:text-hint focus:outline-none"
            type="text"
            placeholder="Song name or Artist"
            id="user_name"
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
            onChange={handleOnChange}
          />
        </div>
      </form>

      <div className="absolute w-[300px] mt-16 bg-mid max-h-[300px] overflow-y-hidden rounded-b-xl break-words  ">
        <div className={!searchTerm ? "hidden" : "py-10"}>
          {data ? (
            data?.tracks?.map((track) => (
              <Link to={`/songs/${track?.data?.id}`} key={track?.data?.id}>
                <div className=" hover:bg-[#959595] p-4">
                  <div className="flex items-center justify-between gap-5 w-full  rounded-xl ">
                    <img
                      src={track?.data.albumOfTrack.coverArt.sources[1].url}
                      className="w-8 h-8 rounded-full "
                    />
                    <h3 className="text-[12px]  text-center ">
                      {track?.data.name}
                    </h3>
                    <h3 className="text-[10px] text-hint text-center">
                      {track?.data.artists.items[0].profile.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))
          ) : error ? (
            <div className="text-center">
              {error.message}: Don't panic,try again
            </div>
          ) : loading ? (
            <div className="text-center">Loading...</div>
          ) : (
            <div className="text-center">
              omo i don't know your problem ohh 🤷🏽‍♂️
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Preview;
