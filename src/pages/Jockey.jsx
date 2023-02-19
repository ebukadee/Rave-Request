import Logo from "../assets/logo.svg";
import header from "../assets/header.svg";
import Avater from "../assets/Avater.jfif";
import stats from "../utils/stats";
import 

const Jockey = () => {
  return (
    <section className="bg-primary h-screen ">
      <aside>
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
      </aside>
      <div className="h-1/4 w-1/2 -ml-40 bg-dark flex flex-row display: absolute top-16 left-1/3 rounded-3xl">
        <img src={Avater} alt="image of avater" className="rounded-full  h-32 ml-14 mt-6"/>
        <h1 className="m-auto text-xl text-white text-4xl display: relative bottom-5 left-16">DJ DEVOID</h1>
      </div>
      <div className="">
        <img src="" alt="" />
      </div>
    </section>
  );
};

export default Jockey;
