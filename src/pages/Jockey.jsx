import Logo from "../assets/logo.svg";
import header from "../assets/header.svg";
import Avater from "../assets/Avater.jfif";
import { stats, recents } from "../utils/stats";
import { useRef, useState } from "react";

const Jockey = () => {
  const scrollableDivRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  function handleMouseDown(e) {
    setIsMouseDown(true);
    setStartX(e.pageX - scrollableDivRef.current.offsetLeft);
    setScrollLeft(scrollableDivRef.current.scrollLeft);
  }

  function handleMouseUp() {
    setIsMouseDown(false);
  }

  function handleMouseMove(e) {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - scrollableDivRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollableDivRef.current.scrollLeft = scrollLeft - walk;
  }
  return (
    <section className="bg-primary h-screen flex ">
      <aside>
        <div className="flex">
          <img src={Logo} alt="Logo" className=" w-16  mt-4 ml-4 " />
          <img src={header} alt="logo text" className="w-32  mt-4 ml-4" />
        </div>
        <div className=" flex flex-row ">
          <div className="flex flex-col  ml-20">
            {stats.map((stat) => (
              <div key={stat.key}>
                <div className={stat.key === 1 ? "" : " mt-16"}>
                  <h3 className="text-[80px] text-center">0{stat.num}</h3>
                  <h5 className="ml-2 text-center">{stat.title}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>
      <section>
        <div className="  relative w-[700px] top-20 left-16">
          <div className="flex auto h-[100px] rounded-xl  items-center bg-dark ">
            <img
              src={Avater}
              alt="image of avater"
              className="rounded-full  h-32 ml-14 mt-10"
            />
            <h1 className="m-auto  text-white text-3xl bottom-5 left-16">
              DJ PRIMATE'S <br /> DASHBOARD
            </h1>
          </div>
          <div
            className=" h-80 cursor-pointer overflow-hidden "
            ref={scrollableDivRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            <div className=" rounded-xl flex justify-between mt-16 w-[140vw] ">
              {recents.map((recent) => (
                <div key={recent.key}>
                  <img
                    src={recent.img}
                    className={" rounded-xl w-40 "}
                    draggable={false}
                  />
                  <h2>{recent.song}</h2>
                  <h5>{recent.song}</h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Jockey;
