import Break from "../assets/break.svg";

import { Clock, Heart, More } from "iconsax-react";
import { trends } from "../utils/stats";

const Trending = () => {
  return (
    <div>
      <h3>Trending</h3>
      <div>
        {trends.map((trend) => (
          <div key={trend.key}>
            <div className=" grid grid-cols-7 gap-5 mt-4 rounded-xl  items-center">
              <h3 className="ml-8 text-sm">#{trend.key}</h3>
              <img src={trend.img} className="w-8 h-8 rounded-full " />
             <h3 className="text-xs">{trend.artist}</h3>
              <h3 className="text-xs">{trend.song}</h3>
              <span className="flex">
              <Clock size={15}/>
              <h3 className="text-xs pl-2">{trend.time}</h3>
              </span>

              <Heart size={15}/>
              <More size={15} />
            </div>
            <img src={Break} alt="divider line" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
