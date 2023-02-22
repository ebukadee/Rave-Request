import Traffic from "../components/Traffic";
import RecentlyPlayed from "../components/RecentlyPlayed";
import TopRequests from "../components/TopRequests";
import Dashboard from "../components/Dashboard";
import Trending from "../components/Trending";

const Jockey = () => {
  return (
    <section className="bg-primary h-screen flex ">
      <Traffic />
      <div className="  relative w-[700px] top-20 left-64">
        <Dashboard />
        <RecentlyPlayed />
        <Trending />
      </div>
      <TopRequests />
    </section>
  );
};

export default Jockey;
