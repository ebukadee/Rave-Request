import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/logo.svg";
import header from "../assets/header.svg";
import Preview from "../components/Preview";

const Home = () => {
  return (
    <>
      <section className=" bg bg-primary h-screen" id="home">
        <div className="relative top-44">
          <img src={Logo} alt="logo" className=" w-20  mx-auto " />
          <img src={header} alt="logo" className=" mx-auto p-4" />
          <div className="flex flex-col items-center mt-8">
            <h3>What's your jam ✌?</h3>
            <Preview />

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
