import Gallary from "./section/Gallary";

import Footer from "./section/Footer";
import { useState } from "react";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className=" top-0 left-0  font-inter">
      {/*----- <Menu /> ------*/}
      <div className="  shadow-[0px_4px_25px_rgba(0,_0,_0,_0.57)] [backdrop-filter:blur(112px)] bg-gray-200 w-full h-[80px] flex justify-around items-center text-white z-50 fixed">
        {" "}
        <img className=" relative" alt="" src="/assets/elephant-logo.svg" />
        {/*  ---- Desktop View  Menu ---- */}
        <div className="hidden md:block   ">
          <div className="flex flex-col md:flex-row gap-8 items-center relative transition-all duration-300">
            <div className="hover:[filter:drop-shadow(0px_-1px_10px_#6256fe)] hover:border-b-2  hover:border-solid hover:border-deepskyblue pb-1">
              <a href="#" className="no-underline text-white ">
                Home
              </a>
            </div>
            <div className="hover:[filter:drop-shadow(0px_-1px_10px_#6256fe)] hover:border-b-2  hover:border-solid hover:border-deepskyblue pb-1">
              {" "}
              <a href="#about" className="no-underline text-white">
                About
              </a>
            </div>
            <div className="hover:[filter:drop-shadow(0px_-1px_10px_#6256fe)] hover:border-b-2  hover:border-solid hover:border-deepskyblue pb-1">
              {" "}
              <a href="#howtobuy" className="no-underline text-white">
                How to buy
              </a>
            </div>
            <div className="hover:[filter:drop-shadow(0px_-1px_10px_#6256fe)] hover:border-b-2  hover:border-solid hover:border-deepskyblue pb-1">
              {" "}
              <a href="#tokenomics" className="no-underline text-white">
                Tokenomics
              </a>
            </div>
            <div className="hover:[filter:drop-shadow(0px_-1px_10px_#6256fe)] hover:border-b-2  hover:border-solid hover:border-deepskyblue pb-1">
              {" "}
              <a href="#roadmap" className="no-underline text-white">
                Roadmap
              </a>
            </div>
            <div className="  [background:linear-gradient(94.49deg,_#36a9f3,_#6256fe)] w-[140px] h-[42px] grid place-items-center   box-border  hover:border-[2px] border-solid border-deepskyblue text-white hover:[filter:drop-shadow(0px_-1px_10px_#6256fe)]">
              {" "}
              <b className=" ">
                {" "}
                <a href="#" className="no-underline text-white ">
                  Buy Now
                </a>
              </b>
            </div>
          </div>
        </div>
        <div className="md:hidden z-20 transition-all duration-300">
          <button
            onClick={toggleMenu}
            className="focus:outline-none bg-gray-200 [backdrop-filter:blur(112px)] transition-all duration-300 "
          >
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path d="M4 7h22M4 15h22M4 23h22"></path>
              )}
            </svg>
          </button>
        </div>
        {/* ---- Mobile View Menu ----*/}
        {isOpen && (
          <div className="absolute w-full flex justify-end  z-10   ">
            <div className="  md:hidden shadow-[0px_4px_25px_rgba(0,_0,_0,_0.8)] [backdrop-filter:blur(100px)] bg-[#0f2141] mt-[270px] rounded-md  py-4 pl-5  pr-10  transition-all duration-300 ">
              <div className="flex flex-col gap-2   relative transition-all duration-300">
                <div className="hover:[filter:drop-shadow(0px_-1px_10px_#6256fe)] hover:border-b-2  hover:border-solid hover:border-deepskyblue pb-1">
                  <a href="#" className="no-underline text-white ">
                    Home
                  </a>
                </div>
                <div className="hover:[filter:drop-shadow(0px_-1px_10px_#6256fe)] hover:border-b-2  hover:border-solid hover:border-deepskyblue pb-1">
                  {" "}
                  <a href="#about" className="no-underline text-white">
                    About
                  </a>
                </div>
                <div className="hover:[filter:drop-shadow(0px_-1px_10px_#6256fe)] hover:border-b-2  hover:border-solid hover:border-deepskyblue pb-1">
                  {" "}
                  <a href="#howtobuy" className="no-underline text-white">
                    How to buy
                  </a>
                </div>
                <div className="hover:[filter:drop-shadow(0px_-1px_10px_#6256fe)] hover:border-b-2  hover:border-solid hover:border-deepskyblue pb-1">
                  {" "}
                  <a href="#tokenomics" className="no-underline text-white">
                    Tokenomics
                  </a>
                </div>
                <div className="hover:[filter:drop-shadow(0px_-1px_10px_#6256fe)] hover:border-b-2  hover:border-solid hover:border-deepskyblue pb-1">
                  {" "}
                  <a href="#roadmap" className="no-underline text-white">
                    Roadmap
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* ------------ */}

      {/*------- <Hero /> -------*/}
      <div className="relative bg-gray-100 w-full h-[100vh]  font-inter text-white  overflow-hidden z-10 ">
        <div className="flex justify-center w-full h-full absolute">
          <img
            className=" absolute w-[140%] xl:top-[-10px] top-[70px]  md:w-[80%] md:h-auto  object-cover opacity-[0.70] mix-blend-soft-light"
            alt=""
            src="/assets/bg-image-elephant@2x.png"
          />
          <div className="absolute top-[-300px]  [filter:blur(231px)] rounded-[50%] [background:linear-gradient(144.46deg,_rgba(55,_167,_244,_0.3),_rgba(88,_106,_252,_0.3))] w-full h-full" />
        </div>

        <div className=" w-full h-full flex flex-col justify-center items-center mt-[-50px] md:mt-[-10px] ">
          <div className="grid place-items-center">
            {" "}
            <img
              className="relative md:w-[90%]  xl:w-[90%] w-[80%] h-[100%] "
              alt=""
              src="/assets/elephant-hero-img.svg"
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
                <a href="#" className="no-underline text-white">
                  Buy Now
                </a>
              </button>
            </div>
            <div>
              <button className="bg-darkslategray-100 box-border w-[140px] h-[42px] border-[2px] border-solid border-deepskyblue text-white md:text-xl">
                <a href="#" className="no-underline text-white">
                  Charts
                </a>
              </button>
            </div>
          </div>
        </div>

        {/* ---------- */}
      </div>
      {/*--------------*/}

      {/*-------- <About /> ----------*/}
      <div
        id="about"
        className="relative w-full h-auto  bg-gray-100 text-white grid place-items-center overflow-hidden z-10"
      >
        <img
          className="absolute  w-[63%] h-[100vh]  object-cover opacity-[0.5]"
          alt=""
          src="/assets/power@2x.png"
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
                cutting-edge innovations. Join us, while we Moon this ELEPHANT
                and become one of the next 1000x memes on Base. Beyond the BS,
                $ELEPHANT embodies a movement fueled by a shared vision of
                honesty and inclusivity within the Base ecosystem, we all want
                and need another win.
              </div>
            </div>
          </div>
          <div className="w-[60%] flex justify-center mt-10">
            <img
              className="  w-[80%] md:w-[80%] max-w-full overflow-hidden "
              alt=""
              src="/assets/group.svg"
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
                src="/assets/cmc-logo-1@2x.png"
              />
            </div>
            <div className="relative bg-darkslategray-100 box-border w-[144.9px] h-[133px] border-[2.4px]  rounded-[7.83px] border-solid border-deepskyblue  grid place-items-center">
              <img
                className=" w-[60%]  object-cover "
                alt=""
                src="/assets/cg-logo-1@2x.png"
              />
            </div>{" "}
            <div className="relative bg-darkslategray-100 box-border w-[144.9px] h-[133px] border-[2.4px]  rounded-[7.83px] border-solid border-deepskyblue  grid place-items-center">
              <img
                className=" w-[80%]  object-cover "
                alt=""
                src="/assets/okxdex4768x515-1@2x.png"
              />
            </div>{" "}
            <div className="relative bg-darkslategray-100 box-border w-[144.9px] h-[133px] border-[2.4px]  rounded-[7.83px] border-solid border-deepskyblue  grid place-items-center">
              <img
                className=" w-[80%]  object-cover "
                alt=""
                src="/assets/lbank768x538-1@2x.png"
              />
            </div>{" "}
            <div className="relative bg-darkslategray-100 box-border w-[144.9px] h-[133px] border-[2.4px]  rounded-[7.83px] border-solid border-deepskyblue  grid place-items-center">
              <img
                className=" w-[60%]  object-cover "
                alt=""
                src="/assets/bitrue-logo-1@2x.png"
              />
            </div>
            <div className="relative bg-darkslategray-100 box-border w-[144.9px] h-[133px] border-[2.4px]  rounded-[7.83px] border-solid border-deepskyblue  grid place-items-center">
              <img
                className=" w-[80%]  object-cover "
                alt=""
                src="/assets/jup-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      {/*------------------*/}
      {/*----- <HowToBuy /> ------*/}
      <div
        id="howtobuy"
        className="relative w-full h-auto  bg-gray-100 text-white grid place-items-center z-10"
      >
        <div className="md:text-[52px] text-[30px] font-jan-brady flex flex-col md:flex-row justify-center items-center md:gap-8 gap-2 my-10">
          <div className=" uppercase ">How to buy</div>
          <div className=" uppercase text-transparent !bg-clip-text [background:linear-gradient(97.36deg,_#36a9f3,_#6256fe)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Elephant
          </div>
        </div>

        <div className="absolute top-[26px] left-[calc(50%_-_1057px)] [filter:blur(231px)] rounded-[50%] [background:linear-gradient(144.46deg,_rgba(55,_167,_244,_0.4),_rgba(88,_106,_252,_0.15))] w-[1002px] h-[1002px]" />

        <div className="relative grid xl:grid-cols-2 xl:grid-rows-2 gap-8  place-items-center mb-10 md:my-20">
          <div className="relative w-[320px] md:w-[100%] md:h-[100%] p-5 m-2 grid gap-2 md:gap-0 place-items-center shadow-[0px_0px_12px_9px_rgba(157,_42,_255,_0.1)] rounded-3xl bg-darkslategray-200 box-border  border-[1.5px] border-solid border-deepskyblue    ">
            {" "}
            <img
              className=" w-[102px] h-[102px] overflow-hidden"
              alt=""
              src="/assets/frame4.svg"
            />
            <div className=" font-jan-brady text-[20px] md:text-[30px]">
              Create a Wallet
            </div>
            <div className=" md:text-xl font-inter text-lightslategray text-center md:inline-block md:w-[506px]">
              Download metamask or your wallet of choice from the app store or
              google play store for free. Desktop users, download the google
              chrome extension by going to metamask.io.
            </div>
          </div>
          <div className=" w-[320px] md:w-[100%] md:h-[100%] p-5 m-2 grid place-items-center shadow-[0px_0px_12px_9px_rgba(157,_42,_255,_0.1)] rounded-3xl bg-darkslategray-200 box-border  border-[1.5px] border-solid border-deepskyblue    ">
            {" "}
            <img
              className=" w-[102px] h-[102px] overflow-hidden"
              alt=""
              src="/assets/frame5.svg"
            />
            <div className=" font-jan-brady text-[20px] md:text-[30px]">
              Get Some ETH
            </div>
            <div className=" md:text-xl font-inter text-lightslategray text-center md:inline-block md:w-[506px]">
              Have ETH in your wallet to switch to $ELEPHANT. If you don’t have
              any ETH, you can buy directly on metamask, transfer from another
              wallet, or buy on another exchange and send it to your wallet.
            </div>
          </div>
          <div className=" w-[320px] md:w-[100%] md:h-[100%] p-5 m-2 grid place-items-center shadow-[0px_0px_12px_9px_rgba(157,_42,_255,_0.1)] rounded-3xl bg-darkslategray-200 box-border  border-[1.5px] border-solid border-deepskyblue    ">
            {" "}
            <img
              className=" w-[102px] h-[102px] overflow-hidden"
              alt=""
              src="/assets/frame4.svg"
            />
            <div className=" font-jan-brady text-[20px] md:text-[30px]">
              Go to Uniswap
            </div>
            <div className=" md:text-xl font-inter text-lightslategray text-center md:inline-block md:w-[506px]">
              Connect to Uniswap. Go to app.uniswap.org in google chrome or on
              the browser inside your Metamask app. Connect your wallet. Paste
              the $ELEPHANT token address into Uniswap, select Pepe, and
              confirm. When Metamask prompts you for a wallet signature, sign.
            </div>
          </div>
          <div className=" w-[320px] md:w-[100%] md:h-[100%] p-5 m-2 grid place-items-center shadow-[0px_0px_12px_9px_rgba(157,_42,_255,_0.1)] rounded-3xl bg-darkslategray-200 box-border  border-[1.5px] border-solid border-deepskyblue    ">
            {" "}
            <img
              className=" w-[102px] h-[102px] overflow-hidden"
              alt=""
              src="/assets/frame4.svg"
            />
            <div className=" font-jan-brady text-[20px] md:text-[30px]">
              Switch ETH for $ELEPHANT
            </div>
            <div className=" md:text-xl font-inter text-lightslategray text-center md:inline-block md:w-[506px]">
              Switch ETH for $ELEPHANT. We have ZERO taxes so you don’t need to
              worry about buying with a specific slippage, although you may need
              to use slippage during times of market volatility.
            </div>
          </div>
        </div>
      </div>

      {/*-----------*/}
      <Gallary />
      {/*-------- <Tokenomics />--------- */}
      <div
        id="tokenomics"
        className="relative w-full h-auto  bg-gray-100 text-white grid place-items-center overflow-hidden z-10  "
      >
        <div className="absolute  left-[calc(50%_+_273px)] [filter:blur(231px)] rounded-[50%] [background:linear-gradient(144.46deg,_rgba(55,_167,_244,_0.3),_rgba(88,_106,_252,_0.18))] w-full h-[1002px]" />

        <div className=" text-[45px] md:text-[52px] my-10 md:my-0  uppercase font-jan-brady text-transparent !bg-clip-text [background:linear-gradient(97.36deg,_#36a9f3,_#6256fe)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          Tokenomics
        </div>
        <div className=" relative md:p-5 md:m-5 md:w-[65%] w-[95%]">
          <div className="shadow-[0px_0px_12px_9px_rgba(157,_42,_255,_0.1)] rounded-3xl bg-darkslategray-200 box-border  border-[1.5px] border-solid border-deepskyblue  md:p-5 mb-10 ">
            <div className=" p-5 flex flex-col md:flex-row gap-5 md:gap-0   ">
              <div className="bg-darkslategray-100 rounded-2xl p-3 px-5 md:w-[60%] flex justify-between md:mr-5 ">
                <p className="uppercase font-jan-brady md:text-[22px]">
                  Total Supply:
                </p>
                <p className="uppercase  md:text-[25px]">1, 000, 000, 000</p>
              </div>
              <div className="bg-darkslategray-100 rounded-2xl p-3 grid place-items-center md:w-[40%]">
                <p className="uppercase font-jan-brady md:text-[22px]">
                  No Blacklist
                </p>
              </div>
            </div>
            <div className=" p-5 flex flex-col md:flex-row gap-5 md:gap-0 ">
              <div className="bg-darkslategray-100 rounded-2xl p-3 px-5 md:w-[60%] flex justify-between md:mr-5 ">
                <p className="uppercase font-jan-brady md:text-[22px]">
                  INITAL LIQUIDITY:
                </p>
                <p className="uppercase  md:text-[25px]">10, 000.0000000</p>
              </div>
              <div className="bg-darkslategray-100 rounded-2xl p-3 grid place-items-center md:w-[40%] grid-flow-col">
                <p className="uppercase font-jan-brady md:text-[22px]">
                  Pool On UNISWAP:
                </p>
                <p className="uppercase  md:text-[25px]">V2</p>
              </div>
            </div>
            <div className=" p-5 flex flex-col md:flex-row gap-5 md:gap-0 ">
              <div className="bg-darkslategray-100 rounded-2xl p-3 px-5 md:w-[60%] flex justify-between md:mr-5 ">
                <p className="uppercase font-jan-brady md:text-[22px]">
                  Ownership:
                </p>
                <p className="uppercase  md:text-[20px]">Renounced</p>
              </div>
              <div className="bg-darkslategray-100 rounded-2xl p-3 grid place-items-center md:w-[40%] grid-flow-col">
                <p className="uppercase font-jan-brady md:text-[22px]">
                  LP Lock:
                </p>
                <p className=" md:text-[22px]">2 months</p>
              </div>
            </div>
            <div className=" p-5 flex ">
              <div className="bg-darkslategray-100 rounded-2xl p-3 px-5 w-[100%] flex justify-center md:mr-5 ">
                <p className="uppercase font-jan-brady md:text-[25px] text-center ">
                  Put total supply into initial liquidity
                </p>
              </div>
            </div>
          </div>

          <div className=" shadow-[0px_0px_12px_9px_rgba(157,_42,_255,_0.1)] rounded-3xl bg-darkslategray-200 box-border  border-[1.5px] border-solid border-deepskyblue  flex flex-col md:flex-row  items-center ">
            <div className=" text-[25px] md:w-[30%] uppercase  font-jan-brady md:text-[200%] py-4 md:py-8 text-center">
              Token Address
            </div>
            <div className="m-4 md:m-10 flex justify-center items-center rounded-2xl bg-darkslategray-100 md:w-[70%] md:h-24 h-10 p-2 px-4 w-[85%]">
              <div className=" relative grid place-items-center uppercase text-slate-200 text-[60%] md:text-[105%] md:w-[85%] ">
                FLrgwxXaX8q8ECF18weDf3PLAYorXST5orpY34d8jfbm
              </div>
              <img
                className=" md:w-[42px] md:h-[42px] w-[24px] h-[24px] "
                alt=""
                src="/assets/frame.svg"
              />
            </div>
          </div>
        </div>
      </div>

      {/*-------- <Tokenomics />--------- */}

      {/* ----------<Roadmap />-------- */}
      <div
        id="roadmap"
        className="relative w-full md:h-[100vh]   bg-gray-100 text-white grid place-items-center overflow-hidden "
      >
        <div className=" md:w-full h-[100vh]  inset-0 z-0 md:absolute fixed flex items-center justify-center md:justify-start ">
          <img
            className=" h-[345px] md:h-[80vh] md:object-cover"
            alt=""
            src="/assets/group-171@2x.png"
          />
        </div>
        <div className="absolute left-[calc(50%_-_1119px)] [filter:blur(244px)] rounded-[50%] [background:linear-gradient(144.46deg,_rgba(55,_167,_244,_0.25),_rgba(88,_106,_252,_0.25))] w-[954px] h-[963px] z-10" />

        <div className=" flex flex-col md:flex-row md:gap-4 justify-center items-center uppercase font-jan-brady  h-full  z-10 md:mb-[200px] mt-10 ">
          <div className="text-transparent !bg-clip-text [background:linear-gradient(97.36deg,_#36a9f3,_#6256fe)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] md:text-[52px] text-[52px]">
            Elephant
          </div>
          <div className=" md:text-[52px] text-[42px]">Roadmap</div>
        </div>

        <div className=" h-full z-10 flex flex-col md:flex-row justify-center md:gap-8 gap-9 mb-20 mt-10 ">
          {/* ---start Card 1 ---- */}
          <div className=" scale-75 md:scale-100 w-[280px] h-[380px] border-solid box-border border-[1.5px] border-deepskyblue rounded-3xl flex flex-col justify-around items-center ">
            {/* --- upper section */}
            <div className="flex flex-col mt-[-150px] justify-center items-center">
              <div className=" bg-[#3aa0f4] w-5 h-5 rounded-full mb-2"></div>
              <div className="bg-[#3aa0f4] w-1 h-4 mb-2"></div>
              <div className=" bg-[#16294a]  w-[165px] h-[125px] rounded-3xl  ">
                {" "}
                <div className=" flex flex-col items-center justify-center bg-[#1a2c49DD] rounded-3xl w-[160px] h-[120px] uppercase text-[35px] font-bold   shadow-2xl ">
                  <div className="">Phase</div>
                  <div className="">1</div>
                </div>
              </div>
            </div>
            {/* ---lower section ---- */}
            <div className=" md:text-[20px] mt-[-40px] flex flex-col gap-2">
              <div>1,000 HOLDERS</div>
              <div>1,000 Telegram Members</div>
              <div>100k Volume/24h</div>
              <div>Coingecko Listing</div>
              <div>CMC Listing</div>
              <div>BuyBack with 50k usd</div>
            </div>
            <div className=" w-full h-1 bg-[#3aa0f4]"></div>

            {/* ----- */}
            <div className="flex flex-col mb-[-130px] justify-center items-center">
              <div className="bg-[#3aa0f4] w-1 h-4 mb-2"></div>
              <div className=" bg-[#3aa0f4] w-5 h-5 rounded-full mb-2"></div>
            </div>
          </div>
          {/* --- End Card 1 ---- */}
          {/* ---start Card 2 ---- */}
          <div className=" scale-75 md:scale-95 w-[280px] h-[380px] border-solid box-border border-[1.5px] border-deepskyblue rounded-3xl flex flex-col justify-around items-center ">
            {/* --- upper section */}
            <div className="flex flex-col mt-[-150px] justify-center items-center">
              <div className=" bg-[#3aa0f4] w-5 h-5 rounded-full mb-2"></div>
              <div className="bg-[#3aa0f4] w-1 h-4 mb-2"></div>
              <div className=" bg-[#16294a]  w-[165px] h-[125px] rounded-3xl  ">
                {" "}
                <div className=" flex flex-col items-center justify-center bg-[#1a2c49DD] rounded-3xl w-[160px] h-[120px] uppercase text-[35px] font-bold   shadow-2xl ">
                  <div className="">Phase</div>
                  <div className="">2</div>
                </div>
              </div>
            </div>
            {/* ---lower section ---- */}
            <div className=" md:text-[20px] mt-[-40px] flex flex-col gap-2">
              <div>2,000 HOLDERS</div>
              <div>1,500 Telegram Members</div>
              <div>1M liquidity</div>
              <div>1M Volume/24h</div>
              <div>BuyBack with 100k usd</div>
              <div>CEX Listin</div>
            </div>
            <div className=" w-full h-1 bg-[#3aa0f4]"></div>

            {/* ----- */}
            <div className="flex flex-col mb-[-130px] justify-center items-center">
              <div className="bg-[#3aa0f4] w-1 h-4 mb-2"></div>
              <div className=" bg-[#3aa0f4] w-5 h-5 rounded-full mb-2"></div>
            </div>
          </div>
          {/* --- End Card 2 ---- */}
          {/* ---start Card 3 ---- */}
          <div className=" scale-75 md:scale-100 w-[280px] h-[380px] border-solid box-border border-[1.5px] border-deepskyblue rounded-3xl flex flex-col justify-around items-center ">
            {/* --- upper section */}
            <div className="flex flex-col mt-[-150px] justify-center items-center">
              <div className=" bg-[#3aa0f4] w-5 h-5 rounded-full mb-2"></div>
              <div className="bg-[#3aa0f4] w-1 h-4 mb-2"></div>
              <div className=" bg-[#16294a]  w-[165px] h-[125px] rounded-3xl  ">
                {" "}
                <div className=" flex flex-col items-center justify-center bg-[#1a2c49DD] rounded-3xl w-[160px] h-[120px] uppercase text-[35px] font-bold   shadow-2xl ">
                  <div className="">Phase</div>
                  <div className="">3</div>
                </div>
              </div>
            </div>
            {/* ---lower section ---- */}
            <div className=" md:text-[20px] mt-[-40px] flex flex-col gap-2">
              <div>5,000+ HOLDERS</div>
              <div>2,000 Telegram Members</div>
              <div>Partnership</div>
              <div>1B Maketcap</div>
              <div>Launch Elephant ERC404</div>
              <div>Huge BuyBack</div>
            </div>
            <div className=" w-full h-1 bg-[#3aa0f4]"></div>

            {/* ----- */}
            <div className="flex flex-col mb-[-130px] justify-center items-center">
              <div className="bg-[#3aa0f4] w-1 h-4 mb-2"></div>
              <div className=" bg-[#3aa0f4] w-5 h-5 rounded-full mb-2"></div>
            </div>
          </div>
          {/* --- End Card 3 ---- */}
          {/* ---start Card 4 ---- */}
          <div className=" scale-75 md:scale-95 w-[280px] h-[380px] border-solid box-border border-[1.5px] border-deepskyblue rounded-3xl flex flex-col justify-around items-center ">
            {/* --- upper section */}
            <div className="flex flex-col mt-[-150px] justify-center items-center">
              <div className=" bg-[#3aa0f4] w-5 h-5 rounded-full mb-2"></div>
              <div className="bg-[#3aa0f4] w-1 h-4 mb-2"></div>
              <div className=" bg-[#16294a]  w-[165px] h-[125px] rounded-3xl  ">
                {" "}
                <div className=" flex flex-col items-center justify-center bg-[#1a2c49DD] rounded-3xl w-[160px] h-[120px] uppercase text-[35px] font-bold   shadow-2xl ">
                  <div className="">Phase</div>
                  <div className="">4</div>
                </div>
              </div>
            </div>
            {/* ---lower section ---- */}
            <div className=" md:text-[20px] mt-[-40px] flex flex-col gap-2 justify-center items-center">
              <div className=" text-[35px] font-bold">To The Moon</div>
              <div>
                {" "}
                <img
                  className=" scale-12 mt-6"
                  src="/assets/Erocket.svg"
                  alt=""
                />
              </div>
            </div>
            <div className=" w-full h-1 bg-[#3aa0f4]"></div>

            {/* ----- */}
            <div className="flex flex-col mb-[-130px] justify-center items-center">
              <div className="bg-[#3aa0f4] w-1 h-4 mb-2"></div>
              <div className=" bg-[#3aa0f4] w-5 h-5 rounded-full mb-2"></div>
            </div>
          </div>
          {/* --- End Card 4 ---- */}
        </div>
      </div>
      {/* ----------<Roadmap />-------- */}
      <Footer />
    </div>
  );
};
export default Index;
