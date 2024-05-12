const Tokenomics = () => {
  return (
    <div className="relative w-full h-auto  bg-gray-100 text-white grid place-items-center overflow-hidden ">
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
            <div className=" relative grid place-items-center uppercase text-slate-200 text-[60%] md:text-[130%] md:w-[85%] ">
              FLrgwxXaX8q8ECF18weDf3PLAYorXST5orpY34d8jfbm
            </div>
            <img
              className=" md:w-[42px] md:h-[42px] w-[24px] h-[24px] "
              alt=""
              src="/frame.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tokenomics;
