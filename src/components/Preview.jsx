import { useState, useRef } from "react";

import useFetch from "../hooks/useFetch";
import useDebounce from "../hooks/useDebounce";
import { Link } from "react-router-dom";

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
        <input
          className="bg-mid w-[300px] h-[40px] pl-2 rounded-md placeholder:text-hint focus:outline-none"
          type="text"
          placeholder="Song name or Artist"
          id="user_name"
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
          onChange={handleOnChange}
        />
        <button
          onClick={handleClick}
          type="submit"
          className="lg:w-full bg-dark lg:py-4 lg:mt-4 rounded-md  text-white"
        >
          Search
        </button>
      </form>
      <div className="absolute w-[300px] mt-16 bg-mid max-h-[300px] overflow-y-auto rounded-b-xl break-words  ">
        <div className={!searchTerm ? "hidden" : "py-12"}>
          {data ? (
            data?.tracks?.map((track) => (
              <Link to={`/songs/${track?.data?.id}`} key={track?.data?.id}>
                <div className=" hover:bg-[#959595] transition-colors ease-in cursor-default">
                  <div className=" grid grid-cols-2 w-32  rounded-xl ">
                    <img
                      src={track?.data.albumOfTrack.coverArt.sources[1].url}
                      className="w-8 h-8 rounded-full ml-4 "
                    />
                    <div className="w-44 ml-2 py-2">
                      <h3 className="text-[10px]  text-center ">
                        {track?.data.name}
                      </h3>
                      <h3 className="text-[8px] text-hint text-center">
                        {track?.data.artists.items[0].profile.name}
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : error ? (
            <div className="text-center">
              {error.message}: Don't panic,try again
            </div>
          ) : (
            loading && <div className="text-center">Loading...</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Preview;
