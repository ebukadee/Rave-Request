import Logo from "../assets/logo.svg";
import header from "../assets/header.svg";
import Avater from "../assets/Avater.jfif";
import stats from "../utils/stats";

const Jockey = () => {
  return (
    <section className="bg-primary h-screen ">
      <div className="flex">
        <img src={Logo} alt="Logo" className=" w-16  mt-4 ml-4 " />
        <img src={header} alt="logo text" className="w-32  mt-4 ml-4" />
      </div>

      <div className=" flex flex-row ">
        <div className="flex flex-col ml-20 ">
          {stats.map((stat) => (
            <div key={stat.key}>
              <div>
                <h3 className="text-[100px] text-center">{stat.num}</h3>
                <h5 className="ml-2 text-center">{stat.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Jockey;
