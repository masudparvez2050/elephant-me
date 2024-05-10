// import Menu from "./section/Menu";
// import Hero from "./section/Hero";
// import About from "./section/About";
// import HowToBuy from "./section/HowToBuy";
// import Gallary from "./section/Gallary";
// import Tokenomics from "./section/Tokenomics";
// import Roadmap from "./section/Roadmap";
// import Footer from "./section/Footer";

// const Index = () => {
//   return (
//     <div>
//       <Menu />
//       <Hero />
//       <About />
//       <HowToBuy />
//       <Gallary />
//       <Tokenomics />
//       <Roadmap />
//       <Footer />
//     </div>
//   );
// };
// export default Index;
const Index = () => {
  return (
    <div className="w-full  h-auto text-left md:text-33xl text-[35px] text-white font-jan-brady">
      <div className=" w-full h-auto">
        {/* ---- Hero Section ---- */}
        <div className="absolute top-[0px] left-[0px] bg-gray-100 w-full h-full overflow-hidden text-lg font-inter grid place-items-center ">
          <img
            className=" absolute top-[0px]  w-[80%] md:h-auto  object-cover opacity-[0.49] mix-blend-soft-light md:mt-0 mt-[100px]"
            alt=""
            src="/bg-image-elephant@2x.png"
          />
          <div className="absolute top-[-654px] left-[78px] [filter:blur(231px)] rounded-[50%] [background:linear-gradient(144.46deg,_rgba(55,_167,_244,_0.24),_rgba(88,_106,_252,_0.24))] w-[1284px] h-[1284px]" />
          {/* ------- Menu ------------- */}
          <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_25px_rgba(0,_0,_0,_0.57)] [backdrop-filter:blur(112px)] bg-gray-200 w-full h-[80px] flex justify-around items-center">
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

          <div className="top-[-50px] md:top-0 grid place-items-center relative  ">
            <img
              className="relative  md:w-[95%] w-[80%] h-[100%] "
              alt=""
              src="/elephant-hero-img.svg"
            />
            <div className="relative">
              <div className="relative text-[150%] md:text-[200%] font-medium">
                Welcome to
              </div>
              <div className=" relative text-[350%] md:text-[700%]  uppercase font-jan-brady text-transparent !bg-clip-text [background:linear-gradient(97.36deg,_#36a9f3,_#6256fe)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Elephant
              </div>
            </div>
            {/* ----buttons---------- */}
            <div className=" flex md:gap-[20%] gap-[15%] justify-center [filter:drop-shadow(0px_-1px_10px_#6256fe)] mt-[50px]">
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
        </div>
        {/* ----------------- */}

        {/* ------ About Section ---- */}

        <div className="absolute top-[100vh] left-[0px] w-full h-auto">
          <div className="relative top-[20px]  [filter:blur(231px)] rounded-[50%] [background:linear-gradient(144.46deg,_rgba(55,_167,_244,_0.24),_rgba(88,_106,_252,_0.24))] w-full h-[1284px]" />
          <div className="absolute top-[0px] left-[0px] bg-gray-100 w-full h-[1024px] overflow-hidden">
            <img
              className="absolute top-[-179px] left-[calc(50%_-_720px)] w-full h-[1440px] object-cover opacity-[0.1]"
              alt=""
              src="/power@2x.png"
            />
            <div className="absolute top-[-228px] left-[533px] [filter:blur(231px)] rounded-[50%] [background:linear-gradient(144.46deg,_rgba(55,_167,_244,_0.22),_rgba(88,_106,_252,_0.22))] w-[1284px] h-[1284px]" />

            <div className="absolute md:top-[10%] left-[10%] md:left-[18%] left-[calc(50% - 300px)] md:left-[calc(50% - 400px)]  w-[90%]  md:w-[600px]  h-[70%] sm:h-[428px] md:h-[400px] lg:h-[372px] xl:h-[344px] 2xl:h-[316px]">
              <div className="absolute top-[0] left-[0] w-full h-full">
                <div className="absolute top-[0] left-[45%] transform [-translate-x-1/2]  h-[133px] sm:h-[166px]">
                  <div className="absolute top-[8px]  tracking-[0.03em] leading-[125px] sm:leading-[166px] uppercase ml-[-150px] md:ml-[-200px]">
                    About
                  </div>
                  <div className="absolute mt-[5px] top-[0]  tracking-[0.03em] leading-[133px] sm:leading-[166px] uppercase text-transparent bg-gradient-to-br from-[#36a9f3] to-[#6256fe] bg-clip-text linear-gradient(97.36deg, #36a9f3, #6256fe)">
                    eLEPHANT
                  </div>
                </div>
                <div className="absolute top-[100px] md:top-[129px] left-[0] w-full h-[299px] sm:h-[332px] md:h-[299px] lg:h-[266px] xl:h-[233px] 2xl:h-[200px] text-xl sm:text-4xl md:text-[22px]  tracking-[0.03em] font-inter">
                  <p className="">
                    Embark on a distinctive journey with $ELEPHANT, where our
                    Chow’s steadfast loyalty converges with the Base
                    Blockchain’s cutting-edge innovations.
                  </p>
                  <p className="">
                    Join us, while we Moon this ELEPHANT and become one of the
                    next 1000x memes on Base. Beyond the BS, $ELEPHANT embodies
                    a movement fueled by a shared vision of honesty and
                    inclusivity within the Base ecosystem, we all want and need
                    another win.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid place-items-center">
              <img
                className="absolute h-[44.29%] w-[50%] md:w-[38.19%] md:top-[10.69%] md:right-[6.46%] md:bottom-[47.02%] md:left-[55.35%] top-[38%]  max-w-full overflow-hidden max-h-full"
                alt=""
                src="/group.svg"
              />
            </div>

            <div className="absolute top-[680px] left-[calc(50%_-_599px)] w-[1199.2px] h-[259.3px]">
              <div className="absolute top-[0px] left-[calc(50%_-_110.4px)] md:left-[calc(50%_-_132.4px)] tracking-[0.03em] leading-[77.78px] uppercase text-transparent !bg-clip-text [background:linear-gradient(97.36deg,_#36a9f3,_#6256fe)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] ml-[20px]">
                <div className="">Partners</div>
              </div>

              <div className="">
                <div className="absolute top-[125.2px] left-[0px] w-[1199.2px] h-[134.1px] ">
                  <div className="absolute top-[1px] left-[0px] w-[144.9px] h-[133px]">
                    <div className="absolute top-[0px] left-[0px] w-[144.9px] h-[133px] ">
                      <div className="absolute top-[0px] left-[0px] rounded-[7.83px] bg-darkslategray-100 box-border w-[144.9px] h-[133px] border-[2.4px] border-solid border-deepskyblue" />
                    </div>
                    <img
                      className="absolute top-[26.5px] left-[32.3px] w-[80.8px] h-[80.8px] object-cover "
                      alt=""
                      src="/cmc-logo-1@2x.png"
                    />
                  </div>
                  <div className="absolute top-[1px] left-[210.9px] w-[144.9px] h-[133px]">
                    <div className="absolute top-[0px] left-[0px] w-[144.9px] h-[133px]">
                      <div className="absolute top-[0px] left-[0px] rounded-[7.83px] bg-darkslategray-100 box-border w-[144.9px] h-[133px] border-[2.4px] border-solid border-deepskyblue" />
                    </div>
                    <img
                      className="absolute top-[26.5px] left-[32.3px] w-[80.8px] h-[80.8px] object-cover"
                      alt=""
                      src="/cg-logo-1@2x.png"
                    />
                  </div>
                  <div className="absolute top-[0px] left-[421.7px] w-[144.9px] h-[133px]">
                    <div className="absolute top-[0px] left-[0px] w-[144.9px] h-[133px]">
                      <div className="absolute top-[0px] left-[0px] rounded-[7.83px] bg-darkslategray-100 box-border w-[144.9px] h-[133px] border-[2.4px] border-solid border-deepskyblue" />
                    </div>
                    <img
                      className="absolute top-[24.5px] left-[10.8px] w-[123.4px] h-[83.2px] object-cover"
                      alt=""
                      src="/okxdex4768x515-1@2x.png"
                    />
                  </div>
                  <div className="absolute top-[0px] left-[632.6px] w-[144.9px] h-[133px]">
                    <div className="absolute top-[0px] left-[0px] w-[144.9px] h-[133px]">
                      <div className="absolute top-[0px] left-[0px] rounded-[7.83px] bg-darkslategray-100 box-border w-[144.9px] h-[133px] border-[2.4px] border-solid border-deepskyblue" />
                    </div>
                    <img
                      className="absolute top-[21.5px] left-[8.8px] w-[127.3px] h-[90.1px] object-cover"
                      alt=""
                      src="/lbank768x538-1@2x.png"
                    />
                  </div>
                  <div className="absolute top-[0px] left-[843.4px] w-[144.9px] h-[133px]">
                    <div className="absolute top-[0px] left-[0px] w-[144.9px] h-[133px]">
                      <div className="absolute top-[0px] left-[0px] rounded-[7.83px] bg-darkslategray-100 box-border w-[144.9px] h-[133px] border-[2.4px] border-solid border-deepskyblue" />
                    </div>
                    <img
                      className="absolute top-[26.4px] left-[37.2px] w-[70.7px] h-[80.8px] object-cover"
                      alt=""
                      src="/bitrue-logo-1@2x.png"
                    />
                  </div>
                  <div className="absolute top-[1px] left-[1054.3px] w-[144.9px] h-[133px]">
                    <div className="absolute top-[0px] left-[0px] w-[144.9px] h-[133px]">
                      <div className="absolute top-[0px] left-[0px] rounded-[7.83px] bg-darkslategray-100 box-border w-[144.9px] h-[133px] border-[2.4px] border-solid border-deepskyblue" />
                    </div>
                    <img
                      className="absolute top-[26.5px] left-[7.8px] w-[129.2px] h-[80.3px] object-cover"
                      alt=""
                      src="/jup-1@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[126px] left-[-428px] [filter:blur(231px)] rounded-[50%] [background:linear-gradient(144.46deg,_rgba(55,_167,_244,_0.08),_rgba(88,_106,_252,_0.08))] w-[694px] h-[694px]" />
          </div>
        </div>

        {/* ------How to Buy Elephant--------- */}

        <div className="absolute top-[00vh] left-[0px] bg-gray-100 w-full h-auto overflow-hidden">
          <div className="absolute top-[26px] left-[calc(50%_-_1057px)] [filter:blur(231px)] rounded-[50%] [background:linear-gradient(144.46deg,_rgba(55,_167,_244,_0.15),_rgba(88,_106,_252,_0.15))] w-[1002px] h-[1002px]" />
          <img
            className="absolute top-[-865px] left-[-357px] w-[2508px] h-[2508px] object-cover hidden opacity-[0.09]"
            alt=""
            src="/untitled-2-1@2x.png"
          />
          <div className="absolute top-[40px] left-[calc(50%_-_600px)] w-[1200px] h-[976px]">
            <div className="absolute top-[0px] left-[calc(50%_-_307px)] w-[614px] h-[126.3px]">
              <div className="absolute top-[4px] left-[calc(50%_-_307px)] tracking-[0.03em] leading-[125px] uppercase inline-block w-[341px] h-[118.8px]">
                How to buy
              </div>
              <div className="absolute top-[0px] left-[calc(50%_+_54px)] tracking-[0.03em] leading-[133px] uppercase text-transparent !bg-clip-text [background:linear-gradient(97.36deg,_#36a9f3,_#6256fe)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block w-[253px] h-[126.3px]">
                Elephant
              </div>
            </div>
            <div className="absolute top-[160px] left-[0px] w-[1200px] h-[816px] text-9xl">
              <div className="absolute top-[424px] left-[630px] shadow-[0px_0px_12px_9px_rgba(157,_42,_255,_0.1)] rounded-3xl bg-darkslategray-200 box-border w-[571.5px] h-[393.5px] border-[1.5px] border-solid border-deepskyblue" />
              <div className="absolute top-[0px] left-[0px] shadow-[0px_0px_12px_9px_rgba(157,_42,_255,_0.1)] rounded-3xl bg-darkslategray-200 box-border w-[571.5px] h-[393.5px] border-[1.5px] border-solid border-deepskyblue" />
              <div className="absolute top-[424px] left-[0px] shadow-[0px_0px_12px_9px_rgba(157,_42,_255,_0.1)] rounded-3xl bg-darkslategray-200 box-border w-[571.5px] h-[393.5px] border-[1.5px] border-solid border-deepskyblue" />
              <div className="absolute top-[63px] left-[32px] w-[506px] h-[266px]">
                <img
                  className="absolute top-[0px] left-[202px] w-[102px] h-[102px] overflow-hidden"
                  alt=""
                  src="/frame4.svg"
                />
                <div className="absolute top-[114px] left-[calc(50%_-_110px)]">
                  Create a Wallet
                </div>
                <div className="absolute top-[170px] left-[calc(50%_-_253px)] text-xl font-inter text-lightslategray text-center inline-block w-[506px]">
                  Download metamask or your wallet of choice from the app store
                  or google play store for free. Desktop users, download the
                  google chrome extension by going to metamask.io.
                </div>
              </div>
              <div className="absolute top-[485px] left-[662px] w-[506px] h-[270px]">
                <img
                  className="absolute top-[0px] left-[202px] w-[102px] h-[102px] overflow-hidden"
                  alt=""
                  src="/frame4.svg"
                />
                <div className="absolute top-[116px] left-[calc(50%_-_189px)] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)]">
                  Switch ETH for $ELEPHANT
                </div>
                <div className="absolute top-[174px] left-[calc(50%_-_253px)] text-xl font-inter text-lightslategray text-center inline-block w-[506px]">
                  Switch ETH for $ELEPHANT. We have ZERO taxes so you don’t need
                  to worry about buying with a specific slippage, although you
                  may need to use slippage during times of market volatility.
                </div>
              </div>
              <div className="absolute top-[65px] left-[calc(50%_+_62px)] w-[506px] h-[262px]">
                <div className="absolute top-[112px] left-[calc(50%_-_97px)]">
                  Get Some ETH
                </div>
                <div className="absolute top-[166px] left-[calc(50%_-_253px)] text-xl font-inter text-lightslategray text-center inline-block w-[506px]">
                  Have ETH in your wallet to switch to $ELEPHANT. If you don’t
                  have any ETH, you can buy directly on metamask, transfer from
                  another wallet, or buy on another exchange and send it to your
                  wallet.
                </div>
                <img
                  className="absolute top-[0px] left-[calc(50%_-_51px)] w-[102px] h-[102px] overflow-hidden"
                  alt=""
                  src="/frame5.svg"
                />
              </div>
              <div className="absolute top-[476px] left-[calc(50%_-_575px)] w-[520px] h-72">
                <div className="absolute top-[113px] left-[calc(50%_-_101px)]">
                  Go to Uniswap
                </div>
                <div className="absolute top-[168px] left-[calc(50%_-_260px)] text-xl font-inter text-lightslategray text-center inline-block w-[520px]">
                  Connect to Uniswap. Go to app.uniswap.org in google chrome or
                  on the browser inside your Metamask app. Connect your wallet.
                  Paste the $ELEPHANT token address into Uniswap, select Pepe,
                  and confirm. When Metamask prompts you for a wallet signature,
                  sign.
                </div>
                <img
                  className="absolute top-[0px] left-[calc(50%_-_51px)] w-[102px] h-[102px] overflow-hidden"
                  alt=""
                  src="/frame5.svg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------ */}
        {/* <div className="absolute top-[3141px] left-[0px] bg-gray-100 w-full h-[1024px] overflow-hidden">
            <img
              className="absolute top-[-865px] left-[-357px] w-[2508px] h-[2508px] object-cover hidden opacity-[0.09]"
              alt=""
              src="/untitled-2-1@2x.png"
            />
            <img
              className="absolute top-[96.8px] left-[-238.8px] w-[1917.8px] h-[829.8px] object-cover opacity-[0.1]"
              alt=""
              src="/group-177@2x.png"
            />
            <div className="absolute top-[-2px] left-[calc(50%_-_501px)] [filter:blur(231px)] rounded-[50%] [background:linear-gradient(144.46deg,_rgba(55,_167,_244,_0.15),_rgba(88,_106,_252,_0.15))] w-[1002px] h-[1002px]" />
            <img
              className="absolute top-[252px] left-[120px] w-[1200.2px] h-[519.3px] object-cover"
              alt=""
              src="/group-1771@2x.png"
            />
            <img
              className="absolute top-[915px] left-[688px] w-[63.1px] h-[12.5px]"
              alt=""
              src="/group-12.svg"
            />
            <div className="absolute top-[97px] left-[calc(50%_-_201px)] w-[403px] h-[125px]">
              <div className="absolute top-[24px] left-[calc(50%_-_201.5px)] tracking-[0.03em] leading-[77.78px] uppercase text-transparent !bg-clip-text [background:linear-gradient(97.36deg,_#36a9f3,_#6256fe)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Elephant
              </div>
              <div className="absolute top-[0px] left-[calc(50%_+_67.5px)] tracking-[0.03em] leading-[125px] uppercase">
                Meme
              </div>
            </div>
          </div>
  
          <div className="absolute top-[4141px] left-[0px] bg-gray-100 w-full h-[2568px] overflow-hidden text-center text-17xl font-inter">
            <img
              className="absolute top-[-865px] left-[-357px] w-[2508px] h-[2508px] object-cover opacity-[0.09]"
              alt=""
              src="/untitled-2-1@2x.png"
            />
            <img
              className="absolute top-[1264px] left-[0px] w-[976px] h-[835px] object-cover opacity-[0.1]"
              alt=""
              src="/group-171@2x.png"
            />
            <div className="absolute top-[80px] left-[calc(50%_-_600px)] w-[1200px] h-[1015px] text-33xl text-lightslategray">
              <div className="absolute top-[0px] left-[calc(50%_-_164px)] tracking-[0.03em] leading-[77.78px] uppercase font-jan-brady text-transparent !bg-clip-text [background:linear-gradient(97.36deg,_#36a9f3,_#6256fe)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left">
                Tokenomics
              </div>
              <div className="absolute top-[863px] left-[0px] w-[1200px] h-[152px] text-xl">
                <div className="absolute top-[0px] left-[0px] shadow-[0px_0px_12px_9px_rgba(157,_42,_255,_0.1)] rounded-3xl bg-darkslategray-200 box-border w-[1201.5px] h-[153.5px] border-[1.5px] border-solid border-deepskyblue" />
                <div className="absolute top-[28px] left-[42px] w-[1115px] h-24">
                  <div className="absolute top-[0px] left-[371px] w-[744px] h-24">
                    <div className="absolute top-[0px] left-[0px] rounded-2xl bg-darkslategray-100 w-[744px] h-24" />
                    <div className="absolute top-[27px] left-[55px] w-[634px] h-[42px]">
                      <img
                        className="absolute top-[0px] left-[592px] w-[42px] h-[42px] overflow-hidden"
                        alt=""
                        src="/frame.svg"
                      />
                      <div className="absolute top-[9px] left-[calc(50%_-_317px)] uppercase">
                        FLrgwxXaX8q8ECF18weDf3PLAYorXST5orpY34d8jfbm
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[12px] left-[calc(50%_-_557.5px)] w-[228px] h-[78px] text-left text-9xl text-white font-jan-brady">
                    <div className="absolute top-[0px] left-[calc(50%_-_114px)] tracking-[0.03em] leading-[77.78px] uppercase">
                      Token Address
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-[127.3px] left-[-0.7px] shadow-[0px_0px_12px_9px_rgba(157,_42,_255,_0.1)] rounded-lg bg-darkslategray-200 box-border w-[1201.5px] h-[656.5px] border-[1.5px] border-solid border-deepskyblue" />
              <div className="absolute top-[176px] left-[64px] w-[1072px] h-[559px] text-7xl text-white">
                <div className="absolute top-[0px] left-[1px] w-[1071px] h-[118px]">
                  <div className="absolute top-[0px] left-[0px] rounded-2xl bg-darkslategray-100 w-[587px] h-[117px]" />
                  <div className="absolute top-[1px] left-[610px] rounded-2xl bg-darkslategray-100 w-[461px] h-[117px]" />
                  <div className="absolute top-[37px] left-[calc(50%_-_490.5px)] w-[498px] h-11">
                    <div className="absolute top-[4px] left-[calc(50%_+_49px)] uppercase">
                      1, 000, 000, 000
                    </div>
                    <div className="absolute top-[0px] left-[calc(50%_-_249px)] w-[222px] h-11 text-left text-9xl font-jan-brady">
                      <div className="absolute top-[0px] left-[calc(50%_-_111px)] tracking-[0.03em] uppercase">
                        Total Supply:
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[38px] left-[calc(50%_+_204.5px)] w-[202px] h-11 text-left text-9xl font-jan-brady">
                    <div className="absolute top-[0px] left-[calc(50%_-_101px)] tracking-[0.03em] uppercase">
                      No blacklist
                    </div>
                  </div>
                </div>
                <div className="absolute top-[442px] left-[1px] w-[1071px] h-[117px] text-left text-9xl font-jan-brady">
                  <div className="absolute top-[0px] left-[0px] rounded-2xl bg-darkslategray-100 w-[1071px] h-[117px]" />
                  <div className="absolute top-[37px] left-[calc(50%_-_313.5px)] w-[628px] h-11">
                    <div className="absolute top-[0px] left-[calc(50%_-_314px)] tracking-[0.03em] uppercase">
                      Put total supply into initial liquidity
                    </div>
                  </div>
                </div>
                <div className="absolute top-[295px] left-[1px] w-[1071px] h-[117px]">
                  <div className="absolute top-[0px] left-[0px] rounded-2xl bg-darkslategray-100 w-[587px] h-[117px]" />
                  <div className="absolute top-[0px] left-[610px] rounded-2xl bg-darkslategray-100 w-[461px] h-[117px]" />
                  <div className="absolute top-[37px] left-[calc(50%_+_119.5px)] w-[371px] h-11">
                    <div className="absolute top-[6px] left-[calc(50%_+_69.5px)]">
                      <span className="uppercase">{`2 `}</span>months
                    </div>
                    <div className="absolute top-[0px] left-[calc(50%_-_185.5px)] w-[124px] h-11 text-left text-9xl font-jan-brady">
                      <div className="absolute top-[0px] left-[calc(50%_-_62px)] tracking-[0.03em] uppercase">
                        LP Lock:
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[35px] left-[calc(50%_-_487.5px)] w-[491px] h-[46px] text-left text-9xl font-jan-brady">
                    <div className="absolute top-[2px] left-[calc(50%_-_245.5px)] w-[166px] h-11">
                      <div className="absolute top-[0px] left-[calc(50%_-_83px)] tracking-[0.03em] uppercase">
                        Ownership:
                      </div>
                    </div>
                    <div className="absolute top-[0px] left-[calc(50%_+_99.5px)] text-7xl font-inter text-center">
                      Renounced
                    </div>
                  </div>
                </div>
                <div className="absolute top-[148px] left-[0px] w-[1072px] h-[117px] text-3xl">
                  <div className="absolute top-[0px] left-[0px] rounded-2xl bg-darkslategray-100 w-[588px] h-[117px]" />
                  <div className="absolute top-[0px] left-[611px] rounded-2xl bg-darkslategray-100 w-[461px] h-[117px]" />
                  <div className="absolute top-[41px] left-[calc(50%_+_120px)] w-[371px] h-11">
                    <div className="absolute top-[3px] left-[calc(50%_+_156.5px)] uppercase">
                      v2
                    </div>
                    <div className="absolute top-[0px] left-[calc(50%_-_185.5px)] w-[271px] h-11 text-left text-9xl font-jan-brady">
                      <div className="absolute top-[0px] left-[calc(50%_-_135.5px)] tracking-[0.03em] uppercase">
                        Pool on Uniswap:
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[20px] left-[calc(50%_-_489px)] w-[494px] h-[78px] text-left text-9xl font-jan-brady">
                    <div className="absolute top-[0px] left-[calc(50%_-_247px)] w-[248px] h-[78px]">
                      <div className="absolute top-[0px] left-[calc(50%_-_124px)] w-[248px] h-[78px]">
                        <div className="absolute top-[0px] left-[calc(50%_-_124px)] w-[248px] h-[78px]">
                          <div className="absolute top-[0px] left-[calc(50%_-_124px)] tracking-[0.03em] leading-[77.78px] uppercase">
                            Inital liquidity:
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-[19px] left-[calc(50%_+_44px)] text-7xl uppercase font-inter text-center">
                      10,000.0000000
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[1232px] left-[calc(50%_-_618px)] w-[1234px] h-[679.2px] text-left text-33xl font-jan-brady">
              <div className="absolute top-[24px] left-[calc(50%_-_260px)] tracking-[0.03em] leading-[77.78px] uppercase text-transparent !bg-clip-text [background:linear-gradient(97.36deg,_#36a9f3,_#6256fe)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Elephant
              </div>
              <div className="absolute top-[0px] left-[calc(50%_+_9px)] tracking-[0.03em] leading-[125px] uppercase">
                Roadmap
              </div>
              <div className="absolute top-[190px] left-[0px] w-[1234px] h-[489.2px] text-xl font-inter">
                <div className="absolute top-[0px] left-[0px] w-[1234px] h-[489.2px] overflow-hidden">
                  <div className="absolute h-[96.1%] w-[68.06%] top-[1.94%] right-[16.21%] bottom-[1.96%] left-[15.74%]">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] opacity-[0.7]">
                      <div className="absolute h-[5.64%] w-full top-[0%] right-[0%] bottom-[94.36%] left-[0%]">
                        <img
                          className="absolute h-full w-[25.18%] top-[0%] right-[74.82%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="/group1.svg"
                        />
                        <img
                          className="absolute h-full w-[25.18%] top-[0%] right-[37.47%] bottom-[0%] left-[37.34%] max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="/group2.svg"
                        />
                        <img
                          className="absolute h-full w-[25.18%] top-[0%] right-[0%] bottom-[0%] left-[74.82%] max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="/group3.svg"
                        />
                      </div>
                      <div className="absolute h-[5.64%] w-full top-[94.38%] right-[0%] bottom-[-0.02%] left-[0%]">
                        <img
                          className="absolute h-full w-[25.18%] top-[0%] right-[74.82%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="/group4.svg"
                        />
                        <img
                          className="absolute h-full w-[25.18%] top-[0%] right-[37.47%] bottom-[0%] left-[37.34%] max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="/group5.svg"
                        />
                        <img
                          className="absolute h-full w-[25.18%] top-[0%] right-[0%] bottom-[0%] left-[74.82%] max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="/group6.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute h-full w-[20.89%] top-[0%] right-[77.97%] bottom-[0%] left-[1.13%]">
                    <img
                      className="absolute h-full w-[8.07%] top-[0%] right-[45.97%] bottom-[0%] left-[45.97%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/group7.svg"
                    />
                    <img
                      className="absolute h-[70.26%] w-full top-[16.25%] right-[0%] bottom-[13.49%] left-[0%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/vector.svg"
                    />
                    <img
                      className="absolute h-[25.45%] w-[64.24%] top-[10.43%] right-[17.88%] bottom-[64.13%] left-[17.88%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/group8.svg"
                    />
                    <img
                      className="absolute h-[0.94%] w-full top-[83.57%] right-[-0.04%] bottom-[15.49%] left-[0.04%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/vector1.svg"
                    />
                    <div className="absolute top-[44.15%] left-[8px] inline-block w-[242px]">
                      <p className="m-0">1,000 HOLDERS</p>
                      <p className="m-0">1,000 Telegram Members</p>
                      <p className="m-0">100K Volume/24h</p>
                      <p className="m-0">Coingecko Listing</p>
                      <p className="m-0">CMC Listing</p>
                      <p className="m-0">BuyBack with 50K usd</p>
                    </div>
                  </div>
                  <img
                    className="absolute h-full w-[20.89%] top-[0%] right-[52.61%] bottom-[0%] left-[26.5%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/group-163.svg"
                  />
                  <div className="absolute h-full w-[20.89%] top-[0%] right-[27.24%] bottom-[0%] left-[51.86%]">
                    <img
                      className="absolute h-full w-[8.07%] top-[0%] right-[45.97%] bottom-[0%] left-[45.97%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/group9.svg"
                    />
                    <img
                      className="absolute h-[70.26%] w-full top-[16.25%] right-[0%] bottom-[13.49%] left-[0%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/vector2.svg"
                    />
                    <img
                      className="absolute h-[25.41%] w-[64.24%] top-[10.47%] right-[17.88%] bottom-[64.13%] left-[17.88%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/group10.svg"
                    />
                    <img
                      className="absolute h-[0.94%] w-full top-[83.57%] right-[0%] bottom-[15.49%] left-[0%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/vector3.svg"
                    />
                    <div className="absolute w-[94.65%] top-[44.15%] left-[2.72%] inline-block">
                      <p className="m-0">5,000+ HOLDERS</p>
                      <p className="m-0">2,000 Telegram Members</p>
                      <p className="m-0">Partnerships</p>
                      <p className="m-0">1B Marketcap</p>
                      <p className="m-0">Launch Elephant ERC404</p>
                      <p className="m-0">Huge BuyBack</p>
                    </div>
                  </div>
                  <div className="absolute h-full w-[20.89%] top-[0%] right-[1.88%] bottom-[0%] left-[77.23%] text-center text-[32px]">
                    <img
                      className="absolute h-full w-[8.07%] top-[0%] right-[45.97%] bottom-[0%] left-[45.97%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/group9.svg"
                    />
                    <img
                      className="absolute h-[70.26%] w-full top-[16.15%] right-[0%] bottom-[13.59%] left-[0%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/vector4.svg"
                    />
                    <img
                      className="absolute h-[25.27%] w-[64.24%] top-[10.61%] right-[17.88%] bottom-[64.13%] left-[17.88%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/group11.svg"
                    />
                    <img
                      className="absolute h-[0.94%] w-full top-[83.57%] right-[0%] bottom-[15.49%] left-[0%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/vector3.svg"
                    />
                    <div className="absolute w-[79.13%] top-[44.15%] left-[10.47%] font-semibold inline-block">
                      To The Moon
                    </div>
                  </div>
                  <div className="absolute top-[216px] left-[339px]">
                    <p className="m-0">2,000 HOLDERS</p>
                    <p className="m-0">1,500 Telegram Members</p>
                    <p className="m-0">1M liquidity</p>
                    <p className="m-0">1M Volume/24h</p>
                    <p className="m-0">BuyBack with 100K usd</p>
                    <p className="m-0">CEX Listin</p>
                  </div>
                  <img
                    className="absolute top-[240px] left-[771px] w-[463.3px] h-[447.4px] overflow-hidden"
                    alt=""
                    src="/frame1.svg"
                  />
                </div>
              </div>
            </div>
            <b className="absolute top-[57.9%] left-[12.78%]">
              <p className="m-0">PHASE</p>
              <p className="m-0">1</p>
            </b>
            <b className="absolute top-[57.9%] left-[34.44%]">
              <p className="m-0">PHASE</p>
              <p className="m-0">2</p>
            </b>
            <b className="absolute top-[57.9%] left-[56.18%]">
              <p className="m-0">PHASE</p>
              <p className="m-0">3</p>
            </b>
            <b className="absolute top-[57.9%] left-[78.06%]">
              <p className="m-0">PHASE</p>
              <p className="m-0">4</p>
            </b>
            <div className="absolute top-[1258px] left-[calc(50%_-_1119px)] [filter:blur(244px)] rounded-[50%] [background:linear-gradient(144.46deg,_rgba(55,_167,_244,_0.18),_rgba(88,_106,_252,_0.18))] w-[954px] h-[963px]" />
            <div className="absolute top-[2512px] left-[calc(50%_-_286px)] text-xl uppercase">
              Copyright © 2024 ElephantME. All Rights Reserved.
            </div>
            <div className="absolute top-[calc(50%_-_1287px)] left-[calc(50%_+_273px)] [filter:blur(231px)] rounded-[50%] [background:linear-gradient(144.46deg,_rgba(55,_167,_244,_0.18),_rgba(88,_106,_252,_0.18))] w-[1002px] h-[1002px]" />
          </div>
  
          <img
            className="absolute top-[4254px] left-[-357px] w-[2508px] h-[2508px] object-cover hidden opacity-[0.09]"
            alt=""
            src="/untitled-2-1@2x.png"
          />
  
          <div className="absolute top-[6093px] left-[1180px] w-[42px] h-[42px]">
            <div className="absolute top-[0px] left-[0px] w-[42px] h-[42px]">
              <div className="absolute top-[0px] left-[0px] w-[42px] h-[42px]">
                <div className="absolute top-[0px] left-[0px] w-[42px] h-[42px]">
                  <div className="absolute top-[0px] left-[0px] w-[42px] h-[42px] overflow-hidden" />
                </div>
              </div>
            </div>
          </div>
  
          <div className="absolute top-[6241px] left-[0px] bg-darkslategray-100 w-full h-[374px]" />
  
          <div className="absolute h-[1.58%] w-[23.58%] top-[110.63%] right-[68.08%] bottom-[-12.21%] left-[8.33%]">
            <img
              className="absolute h-[36.3%] w-[59.54%] top-[31.79%] right-[0%] bottom-[31.9%] left-[40.46%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group12.svg"
            />
            <img
              className="absolute h-full w-[38.46%] top-[0%] right-[61.54%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group13.svg"
            />
          </div>
  
          <div className="absolute top-[6323.3px] left-[842px] w-[477.6px] h-[209.9px] text-12xl font-roboto">
            <div className="absolute top-[0px] left-[0px] w-[477.6px] h-[49.8px]">
              <img
                className="absolute top-[0px] left-[0px] w-[49.8px] h-[49.8px] overflow-hidden"
                alt=""
                src="/frame2.svg"
              />
              <div className="absolute top-[6.4px] left-[71.6px] inline-block w-[406px] h-9">{`admin@elephantbearinu.com `}</div>
            </div>
            <div className="absolute top-[80.1px] left-[0px] w-[297.4px] h-[49.8px]">
              <img
                className="absolute top-[0px] left-[0px] w-[49.8px] h-[49.8px]"
                alt=""
                src="/group-17.svg"
              />
              <div className="absolute top-[6.4px] left-[64.4px] inline-block w-[233px] h-9">
                @elephantearinu
              </div>
            </div>
            <div className="absolute h-[23.73%] w-[53.29%] top-[76.32%] right-[46.48%] bottom-[-0.05%] left-[0.23%]">
              <img
                className="absolute h-full w-[19.57%] top-[0%] right-[80.43%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector5.svg"
              />
              <img
                className="absolute top-[0px] left-[103.6px] w-[48.7px] h-[49.8px] overflow-hidden"
                alt=""
                src="/frame3.svg"
              />
              <img
                className="absolute h-[94.38%] w-[18.94%] top-[2.21%] right-[0.04%] bottom-[3.41%] left-[81.02%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector6.svg"
              />
            </div>
          </div> */}
      </div>
    </div>
  );
};
export default Index;
