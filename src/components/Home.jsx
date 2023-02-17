import Logo from "../assets/logo.svg";
import header from "../assets/header.svg";

const Home = () => {
  function handleClick(e){
    e.preventDefault()

  }
  return (
    <>
      <section className="bg-primary h-screen  "id="home">
        <div className="relative top-32">
          <img src={Logo} alt="logo" className=" w-24  mx-auto " />
          <img src={header} alt="logo" className=" mx-auto p-4" />
          <div className="flex flex-col items-center mt-8">
            <h3>What's your jam ✌?</h3>
            <form className="flex flex-col my-2">
              <input
                className="bg-mid w-[300px] h-[40px] pl-2 rounded-md placeholder:text-hint"
                type="text"
                placeholder="Song name or Artist"
                id="user_name"
                autoComplete='off'
                // onChange={handleUsernameChange}
              />
              <button onClick={handleClick} type="submit" className="w-full bg-dark py-4 mt-4 rounded-md">Search</button>
            </form>
            <a href="#" className="text-xs underline text-hint ">join as DJ</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
