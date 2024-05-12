const Hero = () => {
  return (
    <>
      <div className="relative bg-gray-100 w-full h-[100vh]  font-inter text-white  overflow-hidden z-10 ">
        <div className="flex justify-center w-full h-full absolute">
          <img
            className=" absolute w-[140%] xl:top-[-10px] top-[70px]  md:w-[80%] md:h-auto  object-cover opacity-[0.70] mix-blend-soft-light"
            alt=""
            src="/bg-image-elephant@2x.png"
          />
          <div className="absolute top-[-300px]  [filter:blur(231px)] rounded-[50%] [background:linear-gradient(144.46deg,_rgba(55,_167,_244,_0.3),_rgba(88,_106,_252,_0.3))] w-full h-full" />
        </div>

        {/* -- Menu -- */}
        <div className="  shadow-[0px_4px_25px_rgba(0,_0,_0,_0.57)] [backdrop-filter:blur(112px)] bg-gray-200 w-full h-[80px] flex justify-around items-center text-white z-10">
          {" "}
          <img className=" relative" alt="" src="/elephant-logo.svg" />
          <div className="hidden md:block   ">
            <div className="flex flex-col md:flex-row gap-8 items-center relative">
              <div className="">Home</div>
              <div className="">About</div>
              <div className="">How to buy</div>
              <div className="">Tokenomics</div>
              <div className="">Roadmap</div>
              <div className="  [background:linear-gradient(94.49deg,_#36a9f3,_#6256fe)] w-[140px] h-[42px] grid place-items-center">
                {" "}
                <b className=" ">Buy Now</b>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full h-full flex flex-col justify-center items-center mt-[-50px] md:mt-[-50px] ">
          <div className="grid place-items-center">
            {" "}
            <img
              className="relative md:w-[90%]  xl:w-[90%] w-[80%] h-[100%] "
              alt=""
              src="/elephant-hero-img.svg"
            />
          </div>
          <div className="">
            <p className="relative text-[150%] md:text-[230%] font-2xl top-[-30px] md:top-[-50px]">
              Welcome to
            </p>
            <p className=" relative text-[350%] md:text-[700%]  uppercase font-jan-brady text-transparent !bg-clip-text [background:linear-gradient(97.36deg,_#36a9f3,_#6256fe)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] top-[-100px] md:top-[-180px]">
              ELEPHANT
            </p>
          </div>
          {/* ----buttons---------- */}
          <div className=" flex md:gap-[20%] gap-[15%] justify-center [filter:drop-shadow(0px_-1px_10px_#6256fe)] mt-[-100px]  md:mt-[-250px]  ">
            <div>
              <button className="bg-darkslategray-100 box-border w-[140px] h-[42px] border-[2px] border-solid border-deepskyblue text-white md:text-xl">
                Buy Now
              </button>
            </div>
            <div>
              <button className="bg-darkslategray-100 box-border w-[140px] h-[42px] border-[2px] border-solid border-deepskyblue text-white md:text-xl">
                Charts
              </button>
            </div>
          </div>
        </div>

        {/* ---------- */}
      </div>
    </>
  );
};
export default Hero;
