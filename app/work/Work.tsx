import Project from "@/app/work/project";
import Banner from "@/app/work/Banner";

const Work = () => {
  return (
    <div id="work" className="w-full mt-10 md:mt-20">
      <div className="w-full overflow-hidden">
        <Banner />
      </div>
      <div className="w-full overflow-hidden rotate-180">
        <Banner />
      </div>
      <div className="my-12 md:my-24 flex flex-col md:gap-y-10 items-center">
        <div className="sm:flex sm:gap-x-4 xl:justify-between w-full justify-center">
          <Project
            title="Kanzlei Geisler"
            imgSrc="/work/geisler.png"
            url="https://kanzlei-geisler.vercel.app/"
          />
          <Project
            title="Eduquality"
            imgSrc="/work/eduquality.png"
            url="https://eduquality.de/"
          />
        </div>
        <div className="sm:flex sm:gap-x-4 xl:justify-between w-full justify-center">
          <Project
            title="TUM Blockchain Conference"
            imgSrc="/work/conference.jpg"
            url="https://conference.tum-blockchain.com/"
          />
          <Project
            title="LEAM"
            imgSrc="/work/leam.jpg"
            url="https://leam.tech/"
          />
        </div>
        <div className="sm:flex sm:gap-x-4 xl:justify-between w-full justify-center">
          <Project
            title="Wlokno"
            imgSrc="/work/wlokno.png"
            url="https://wlokno.com/"
          />
          <Project
            title="Eva Kameter"
            imgSrc="/work/friseur.jpg"
            url="https://friseurevakameter.de/"
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
