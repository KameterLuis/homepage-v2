import Bluepaca from "./images/Bluepaca";
import Friseur from "./images/Friseur";
import Leam from "./images/Leam";

const Work = () => {
  return (
    <div className="px-10 mt-10 min-h-screen" id="work">
      <p className="text-white font-black text-3xl w-full text-center">
        PROJECTS
      </p>
      <p className="text-white text-base w-full text-center mt-2">
        These are my previous clients and projects
      </p>
      <div className="hidden lg:flex lg:visible mt-20 h-[550px]">
        <a
          target="_blank"
          href="https://leam.tech/"
          rel="noopener noreferrer"
          className="cursor-pointer group relative w-[33%] h-full mr-4 hover:w-[80%] duration-500 ease-in-out"
        >
          <div className="absolute w-full h-full bg-red-500">
            <Leam />
          </div>
          <div className="absolute w-full h-full bg-gradient-to-t from-black to-black/0 bottom-0 group-hover:h-[50%] duration-500 ease-in-out"></div>
          <div className="absolute w-full bottom-0 pt-4 duration-500 ease-in-out">
            <p className="text-5xl font-black text-white w-full text-center">
              LEAM
            </p>
            <p className="text-sm text-white w-full text-center mb-4 mt-2">
              Light Enabled Additive Manufacturing
            </p>
          </div>
        </a>
        <a
          target="_blank"
          href="https://friseurevakameter.de/"
          rel="noopener noreferrer"
          className="cursor-pointer group relative w-[33%] h-full mx-4 hover:w-[80%] duration-500 ease-in-out"
        >
          <div className="absolute w-full h-full">
            <Friseur />
          </div>
          <div className="absolute w-full h-full bg-gradient-to-t from-black to-black/0 bottom-0 group-hover:h-[50%] duration-500 ease-in-out"></div>
          <div className="absolute w-full bottom-0 pt-4 duration-500 ease-in-out">
            <p className="text-5xl font-black text-white w-full text-center">
              Friseur
            </p>
            <p className="text-sm text-white w-full text-center mb-4 mt-2">
              Friseur Eva Kameter
            </p>
          </div>
        </a>
        <a
          target="_blank"
          href="https://bluepaca.com/"
          rel="noopener noreferrer"
          className="cursor-pointer relative w-[33%] h-full ml-4 group hover:w-[80%] duration-500 ease-in-out"
        >
          <div className="absolute w-full h-full">
            <Bluepaca />
          </div>
          <div className="absolute w-full h-full bg-gradient-to-t from-black to-black/0 bottom-0 group-hover:h-[50%] duration-500 ease-in-out"></div>
          <div className="absolute w-full bottom-0 pt-4 duration-500 ease-in-out">
            <p className="text-5xl font-black text-white w-full text-center">
              Bluepaca
            </p>
            <p className="text-sm text-white w-full text-center mb-4 mt-2">
              Bluepaca IT and development
            </p>
          </div>
        </a>
      </div>
      <div className="lg:hidden mt-20 w-full mt-20">
        <a
          target="_blank"
          href="https://leam.tech/"
          rel="noopener noreferrer"
          className="relative block w-full min-h-[200px]"
        >
          <div className="w-full h-full">
            <Leam />
          </div>
          <div className="absolute w-full h-full bg-gradient-to-t from-black to-black/0 bottom-0"></div>
          <div className="absolute w-full bottom-0 pt-4">
            <p className="text-4xl font-black text-white w-full text-center">
              LEAM
            </p>
            <p className="text-sm text-white w-full text-center mb-4 mt-2 px-4">
              Light Enabled Additive Manufacturing
            </p>
          </div>
        </a>
        <a
          target="_blank"
          href="https://friseurevakameter.de/"
          rel="noopener noreferrer"
          className="relative block w-full min-h-[200px] mt-10"
        >
          <div className="w-full h-full">
            <Friseur />
          </div>
          <div className="absolute w-full h-full bg-gradient-to-t from-black to-black/0 bottom-0"></div>
          <div className="absolute w-full bottom-0 pt-4">
            <p className="text-4xl font-black text-white w-full text-center">
              FRISEUR
            </p>
            <p className="text-sm text-white w-full text-center mb-4 mt-2 px-4">
              Friseur Eva Kameter
            </p>
          </div>
        </a>
        <a
          target="_blank"
          href="https://bluepaca.com/"
          rel="noopener noreferrer"
          className="relative block w-full min-h-[200px] mt-10"
        >
          <div className="w-full h-full">
            <Bluepaca />
          </div>
          <div className="absolute w-full h-full bg-gradient-to-t from-black to-black/0 bottom-0"></div>
          <div className="absolute w-full bottom-0 pt-4">
            <p className="text-4xl font-black text-white w-full text-center">
              BLUEPACA
            </p>
            <p className="text-sm text-white w-full text-center mb-4 mt-2 px-4">
              Bluepaca IT and development
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Work;
