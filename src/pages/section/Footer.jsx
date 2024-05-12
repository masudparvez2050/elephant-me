const Footer = () => {
  return (
    <div className="relative w-full h-auto bg-gray-100 text-white grid place-items-center">
      <div className=" bg-[#1a2c49] w-full h-full grid place-items-center md:my-10 md:py-5 py-10 ">
        <div className=" md:w-[80%] flex flex-col md:flex-row justify-between items-center ">
          <div>
            <img
              className=" ml-[-40px] w-[140%] md:ml-0 md:w-[160%] mb-4 md:mb-0"
              src="/elephant-logo.svg"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className=" flex gap-4 items-center">
              <div>
                <img
                  className=" w-[40px] md:w-[50px]"
                  src="/frame2.svg"
                  alt=""
                />
              </div>
              <div className=" md:text-[22px]">admin@elephantbearinu.com</div>
            </div>
            <div className=" flex gap-4 items-center">
              <img
                className=" w-[40px] md:w-[50px]"
                src="/group-17.svg"
                alt=""
              />
              <div className=" md:text-[22px]">@elephantearinu</div>
            </div>
            <div className=" flex gap-10 items-center">
              <img
                className=" w-[40px] md:w-[50px]"
                src="/vector5.svg"
                alt=""
              />
              <img className=" w-[40px] md:w-[50px]" src="/frame3.svg" alt="" />
              <img
                className=" w-[40px] md:w-[50px]"
                src="/vector6.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100  text-[11px] md:text-[14px]  uppercase w-full h-[60px] grid place-items-center text-center">
        Copyright © {new Date().getFullYear()} ElephantME. All Rights Reserved.
      </div>
    </div>
  );
};
export default Footer;
