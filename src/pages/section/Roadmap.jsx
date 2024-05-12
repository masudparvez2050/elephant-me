const Roadmap = () => {
  return (
    <div className="relative w-screen h-auto   bg-gray-100 text-white grid place-items-center overflow-hidden ">
      {/* <div className=" md:w-full h-[100vh]  inset-0 z-0 fixed flex items-center justify-center md:justify-start ">
        <img
          className=" h-[500px] md:h-[100vh] object-cover   "
          alt=""
          src="/group-171@2x.png"
        />
      </div> */}
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
              <img className=" scale-12 mt-6" src="/Erocket.svg" alt="" />
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
  );
};
export default Roadmap;
