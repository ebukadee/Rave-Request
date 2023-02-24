import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/logo.svg";
import header from "../assets/header.svg";
import MusicData from "../components/MusicData";
import Preview from "../components/Preview";

const Home = () => {
  function handleClick(e) {
    e.preventDefault();
  }

  return (
    <>
      <MusicData />
      <section className="bg-primary h-screen  " id="home">
        <div className="relative top-32">
          <img src={Logo} alt="logo" className=" w-24  mx-auto " />
          <img src={header} alt="logo" className=" mx-auto p-4" />
          <div className="flex flex-col items-center mt-8">
            <h3>What's your jam ✌?</h3>
            <form className="flex flex-col my-2">
              <input
                className="bg-mid w-[300px] h-[40px] pl-2 rounded-md placeholder:text-hint"
                type="text"
                placeholder="Song name or Artist"
                id="user_name"
                autoComplete="off"
                autoCorrect="off"
              />
              <button
                onClick={handleClick}
                type="submit"
                className="lg:w-full bg-dark lg:py-4 lg:mt-4 rounded-md  text-white"
              >
                Search
              </button>
            </form>
            <Link to="/Jockey">
              <h5 className=" text-xs underline text-blue-400">join as dj</h5>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
