const Hero = () => {
  return (
    <div className="relative lg:flex w-screen h-screen overflow-x-hidden">
      <div className="absolute lg:fixed h-screen text-[#F187FB] lg:text-[#5AB7CA] font-black p-4 md:p-10 lg:w-[40%]">
        <div className="flex justify-between items-center">
          <a href="#hero">
            <p className="text-xl md:text-3xl cursor-pointer hover:text-[#F187FB] duration-300 drop-shadow-[0_0px_10px_rgba(0,0,0,0.5)] lg:drop-shadow-none">
              Luis Kameter
            </p>
          </a>
          <a href="#contact">
            <p className="text-xl md:text-3xl cursor-pointer hover:text-[#F187FB] duration-300 drop-shadow-[0_0px_10px_rgba(0,0,0,0.5)] lg:drop-shadow-none">
              Contact
            </p>
          </a>
        </div>
        <div className="cursor-default group relative inline-block left-[50%] top-[50%] -translate-x-[50%] -translate-y-[60%] lg:-translate-y-[50%]">
          <p className="text-7xl lg:text-9xl inline-block drop-shadow-[0_0px_10px_rgba(0,0,0,0.5)] lg:drop-shadow-none">
            More
            <br />
            than
            <br />
            design
          </p>
          <a
            href="#work"
            className="flex items-center mt-8 justify-between drop-shadow-[0_0px_10px_rgba(0,0,0,1)] lg:drop-shadow-none"
          >
            <p className="text-2xl lg:text-3xl group-hover:text-[#F187FB] duration-300">
              View my work
            </p>
            <div>
              <div className="w-[100px] h-[45px] md:w-[200px] md:h-[90px]">
                <img
                  alt="Hero"
                  src="/arrow_blue.png"
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                  }}
                ></img>
              </div>
              <div className="fixed w-[100px] h-[45px] md:w-[200px] md:h-[90px] -translate-y-[100%]">
                <img
                  alt="Hero"
                  className="lg:opacity-0 group-hover:opacity-100 duration-300"
                  src="/arrow_pink.png"
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                  }}
                ></img>
              </div>
            </div>
          </a>
        </div>
        <div className="hidden lg:flex cursor-pointer text-base justify-between bottom-10 fixed space-x-6">
          <a href="/imprint">
            <p className="hover:text-[#F187FB] duration-300">Imprint</p>
          </a>
          <a href="/privacy">
            <p className="hover:text-[#F187FB] duration-300">Privacy</p>
          </a>
          <a
            href="https://www.linkedin.com/in/luis-maximilian-kameter-a44417254/"
            className="w-[25px] h-[25px]"
          >
            <img
              alt="Linkedin logo"
              src="/linkedin.png"
              style={{ objectFit: "contain", width: "100%", height: "100%" }}
            ></img>
          </a>
        </div>
      </div>
      <div
        id="overflow"
        className="lg:ml-[40%] lg:w-[60%] bg-white overflow-x-hidden space-y-4 pb-4 lg:pb-32"
      >
        <div className="cursor-pointer w-full h-screen">
          <img
            alt="Hero"
            id="hero"
            src="/hero.jpg"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          ></img>
        </div>
        <div className="flex justify-center">
          <div className="px-6 sm:max-w-[500px] lg:max-w-full">
            <a
              href="https://leam.tech/"
              className="hidden lg:block p-20 cursor-pointer"
            >
              <img
                alt="Light enabled additive manufacturing"
                src="/leam.png"
                className="hover:scale-[102%] duration-500 ease-in-out"
                style={{ objectFit: "contain", width: "100%", height: "100%" }}
              ></img>
            </a>
            <div className="w-[1px] h-[1px]" id="work"></div>
            <a
              href="https://leam.tech/"
              className="block lg:hidden py-8 pt-20 cursor-pointer"
            >
              <p className="text-gradient font-black">Leam Technologies</p>
              <img
                alt="Light enabled additive manufacturing"
                src="/leam.jpg"
                className="mt-4"
                style={{ objectFit: "contain", width: "100%", height: "100%" }}
              ></img>
              <p className="mt-4 border-[1px] inline-block bg-black text-white border-black px-4 py-1 duration-500 hover:bg-white hover:text-black">
                Go to page
              </p>
            </a>
            <a
              href="https://friseurevakameter.de/"
              className="hidden lg:block p-20 cursor-pointer"
            >
              <img
                alt="Friseur eva kameter"
                src="/friseur.png"
                className="hover:scale-[102%] duration-500 ease-in-out"
                style={{ objectFit: "contain", width: "100%", height: "100%" }}
              ></img>
            </a>
            <a
              href="https://friseurevakameter.de/"
              className="block lg:hidden py-8 cursor-pointer"
            >
              <p className="text-gradient font-black">Friseur Eva Kameter</p>
              <img
                alt="Friseur eva kameter"
                src="/friseur.jpg"
                className="mt-4"
                style={{ objectFit: "contain", width: "100%", height: "100%" }}
              ></img>
              <p className="mt-4 border-[1px] inline-block bg-black text-white border-black px-4 py-1 duration-500 hover:bg-white hover:text-black">
                Go to page
              </p>
            </a>
            <a
              href="https://conference.tum-blockchain.com/"
              className="hidden lg:block p-20 cursor-pointer"
            >
              <img
                alt="Tum blockchain conference"
                src="/conference.png"
                className="hover:scale-[102%] duration-500 ease-in-out"
                style={{ objectFit: "contain", width: "100%", height: "100%" }}
              ></img>
            </a>
            <a
              href="https://conference.tum-blockchain.com/"
              className="block py-8 lg:hidden cursor-pointer"
            >
              <p className="text-gradient font-black">Tum Blockchain Club</p>
              <img
                alt="Tum blockchain conference"
                src="/conference.jpg"
                className="mt-4"
                style={{ objectFit: "contain", width: "100%", height: "100%" }}
              ></img>
              <p className="mt-4 border-[1px] inline-block bg-black text-white border-black px-4 py-1 duration-500 hover:bg-white hover:text-black">
                Go to page
              </p>
            </a>
          </div>
        </div>
        <a
          href="mailto:contact@luiskameter.com"
          id="contact"
          className="block p-8 lg:px-16 py-32 lg:py-72 cursor-pointer hover:skew-y-6 hover:skew-x-6 duration-500"
        >
          <p className="text-gradient text-lg sm:text-2xl lg:text-4xl 2xl:text-6xl w-full text-center font-black">
            contact@luiskameter.com
          </p>
        </a>
        <div className="lg:hidden flex font-black text-[#5AB7CA] cursor-pointer justify-center items-center">
          <div className="flex justify-between max-w-[200px] space-x-4">
            <a href="/imprint">
              <p>Imprint</p>
            </a>
            <a href="/privacy">
              <p>Privacy</p>
            </a>
            <a
              href="https://www.linkedin.com/in/luis-maximilian-kameter-a44417254/"
              className="block w-[25px] h-[25px]"
            >
              <img
                alt="Linkedin logo"
                src="/linkedin.png"
                style={{ objectFit: "contain", width: "100%", height: "100%" }}
              ></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
