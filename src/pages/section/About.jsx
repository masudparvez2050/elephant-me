const About = () => {
  return (
    <div className="relative w-full h-auto  bg-gray-100 text-white grid place-items-center overflow-hidden z-10">
      <img
        className="absolute  w-[63%] h-[100vh]  object-cover opacity-[0.5]"
        alt=""
        src="/power@2x.png"
      />
      <div className="absolute  [filter:blur(231px)] rounded-[50%] [background:linear-gradient(144.46deg,_rgba(55,_167,_244,_0.3),_rgba(88,_106,_252,_0.3))] w-full h-[100vh] z-10 md:ml-[450px] mt-[-100px]" />

      <div className="relative justify-center items-center flex flex-col md:flex-row text-white md:w-[80%] w-[100%]">
        <div className=" flex flex-col justify-center  md:w-[40%] w-[75%]">
          <div className=" flex justify-center md:justify-start  gap-4 font-jan-brady md:text-[52px] text-[25px] uppercase mb-8 mt-8 md:mt-0">
            <div className=" ">About</div>
            <div className="uppercase font-jan-brady text-transparent !bg-clip-text [background:linear-gradient(97.36deg,_#36a9f3,_#6256fe)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Elephant
            </div>
          </div>

          <div className=" flex flex-col">
            <div className=" md:text-[25px] text-center md:text-left">
              Embark on a distinctive journey with $ELEPHANT, where our Chow’s
              steadfast loyalty converges with the Base Blockchain’s
              cutting-edge innovations. Join us, while we Moon this ELEPHANT and
              become one of the next 1000x memes on Base. Beyond the BS,
              $ELEPHANT embodies a movement fueled by a shared vision of honesty
              and inclusivity within the Base ecosystem, we all want and need
              another win.
            </div>
          </div>
        </div>
        <div className="w-[60%] flex justify-center mt-10">
          <img
            className="  w-[80%] md:w-[80%] max-w-full overflow-hidden "
            alt=""
            src="/group.svg"
          />
        </div>
      </div>

      <div className=" flex flex-col my-10 ">
        <div className="  uppercase text-transparent !bg-clip-text [background:linear-gradient(97.36deg,_#36a9f3,_#6256fe)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-[40px] md:text-[52px] font-jan-brady  mb-12 grid place-items-center">
          PARTNERS
        </div>
        <div className=" grid grid-rows-2 xl:grid-cols-1 xl:grid-rows-1 grid-cols-2 xl:grid-flow-col md:grid-cols-3 md:grid-rows-2 gap-8 mb-10 ">
          <div className="relative bg-darkslategray-100 box-border w-[144.9px] h-[133px] border-[2.4px]  rounded-[7.83px] border-solid border-deepskyblue  grid place-items-center">
            <img
              className=" w-[60%]  object-cover "
              alt=""
              src="/cmc-logo-1@2x.png"
            />
          </div>
          <div className="relative bg-darkslategray-100 box-border w-[144.9px] h-[133px] border-[2.4px]  rounded-[7.83px] border-solid border-deepskyblue  grid place-items-center">
            <img
              className=" w-[60%]  object-cover "
              alt=""
              src="/cg-logo-1@2x.png"
            />
          </div>{" "}
          <div className="relative bg-darkslategray-100 box-border w-[144.9px] h-[133px] border-[2.4px]  rounded-[7.83px] border-solid border-deepskyblue  grid place-items-center">
            <img
              className=" w-[80%]  object-cover "
              alt=""
              src="/okxdex4768x515-1@2x.png"
            />
          </div>{" "}
          <div className="relative bg-darkslategray-100 box-border w-[144.9px] h-[133px] border-[2.4px]  rounded-[7.83px] border-solid border-deepskyblue  grid place-items-center">
            <img
              className=" w-[80%]  object-cover "
              alt=""
              src="/lbank768x538-1@2x.png"
            />
          </div>{" "}
          <div className="relative bg-darkslategray-100 box-border w-[144.9px] h-[133px] border-[2.4px]  rounded-[7.83px] border-solid border-deepskyblue  grid place-items-center">
            <img
              className=" w-[60%]  object-cover "
              alt=""
              src="/bitrue-logo-1@2x.png"
            />
          </div>
          <div className="relative bg-darkslategray-100 box-border w-[144.9px] h-[133px] border-[2.4px]  rounded-[7.83px] border-solid border-deepskyblue  grid place-items-center">
            <img
              className=" w-[80%]  object-cover "
              alt=""
              src="/jup-1@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
