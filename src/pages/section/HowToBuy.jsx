const HowToBuy = () => {
  return (
    <div className="relative w-full h-auto  bg-gray-100 text-white grid place-items-center z-10">
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
            src="/frame4.svg"
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
            src="/frame5.svg"
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
            src="/frame4.svg"
          />
          <div className=" font-jan-brady text-[20px] md:text-[30px]">
            Go to Uniswap
          </div>
          <div className=" md:text-xl font-inter text-lightslategray text-center md:inline-block md:w-[506px]">
            Connect to Uniswap. Go to app.uniswap.org in google chrome or on the
            browser inside your Metamask app. Connect your wallet. Paste the
            $ELEPHANT token address into Uniswap, select Pepe, and confirm. When
            Metamask prompts you for a wallet signature, sign.
          </div>
        </div>
        <div className=" w-[320px] md:w-[100%] md:h-[100%] p-5 m-2 grid place-items-center shadow-[0px_0px_12px_9px_rgba(157,_42,_255,_0.1)] rounded-3xl bg-darkslategray-200 box-border  border-[1.5px] border-solid border-deepskyblue    ">
          {" "}
          <img
            className=" w-[102px] h-[102px] overflow-hidden"
            alt=""
            src="/frame4.svg"
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
  );
};
export default HowToBuy;
