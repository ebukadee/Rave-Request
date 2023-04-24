import Avater from "../assets/images/Avater.jfif";

const Dashboard = () => {
  return (
    <div className="flex auto h-[100px] rounded-xl  items-center bg-dark ">
      <img
        src={Avater}
        alt="image of avater"
        className="rounded-full  h-32 ml-14 mt-10"
        draggable={false}
      />
      <h1 className="m-auto  text-white text-3xl bottom-5 left-16">
        DJ PRIMATE'S <br /> DASHBOARD
      </h1>
    </div>
  );
};

export default Dashboard;
