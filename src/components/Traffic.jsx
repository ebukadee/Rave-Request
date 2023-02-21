import { stats } from "../utils/stats";
import Logo from '../assets/logo.svg'
import header from '../assets/header.svg'

const Traffic = () => {
  return (
    <aside className="fixed">
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
                <h5 className=" text-center">{stat.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Traffic;
