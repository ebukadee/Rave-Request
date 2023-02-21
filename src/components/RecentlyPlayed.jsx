import { recents } from "../utils/stats";
import { useRef, useState } from "react";

const RecentlyPlayed = () => {
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
    <>
      <div className="mt-16">
        <h3 className="text-[15px] mb-2">Recently Played</h3>

        <div
          className=" h-80 cursor-pointer overflow-hidden "
          ref={scrollableDivRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div className=" flex justify-between w-[140vw] ">
            {recents.map((recent) => (
              <div key={recent.key}>
                <div className="  w-40 h-40 overflow-hidden rounded-xl ">
                  <img
                    src={recent.img}
                    className={
                      " rounded-xl hover:scale-110 ease-in-out duration-500  object-cover "
                    }
                    draggable={false}
                  />
                </div>
                <h2 className="text-[15px] ">{recent.song}</h2>
                <h5 className="text-[12px] text-hint">{recent.artist}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentlyPlayed;
