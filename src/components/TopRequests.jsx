import { useState } from "react";

import Break from "../assets/breakSmall.svg";

import { Clock, Heart, More } from "iconsax-react";
import { trends } from "../utils/stats";

const TopRequests = () => {
  const [maxRender, setMaxRender] = useState(10);
  return (
    <aside className="fixed  top-12 right-10 overflow-y-auto">
      <h3 className="text-sm pb-2">Top Requests</h3>
      <div>
        {trends.slice(0, maxRender).map((trend) => (
          <div key={trend.key}>
            <div className=" grid grid-cols-2 w-32  rounded-xl ">
              <img src={trend.img} className="w-8 h-8 rounded-full ml-4 " />
              <div className="w-28">
                <h3 className="text-xs  text-center">{trend.song}</h3>
                <h3 className="text-[10px] text-hint text-center">
                  {trend.artist}
                </h3>
              </div>
            </div>
            <img src={Break} alt="divider line" className="py-2" />
          </div>
        ))}
      </div>
    </aside>
  );
};

export default TopRequests;
