import { recents } from "../utils/stats";
import { useRef, useState } from "react";

const RecentPlay = () => {
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
    <div className="">
      <div
        className=" h-80 cursor-pointer overflow-hidden "
        ref={scrollableDivRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div className=" flex justify-between mt-16 w-[140vw] ">
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
  );
};

export default RecentPlay;
