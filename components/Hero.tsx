const Hero = () => {
  return (
    <div className="min-h-screen">
      <div className="fixed left-0 top-0 w-full h-full z-0">
        <div className="w-full min-h-screen h-full blur-lg scale-110 opacity-50">
          <img
            src="/friseur.jpg"
            alt="Friseur Eva Kameter"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          ></img>
        </div>
      </div>
      <div className="fixed w-screen h-screen flex justify-center items-center z-10">
        <div className="flex overflow-x-hidden w-[1000px] h-[497px]">
          <div className="flex">
            <div className="w-[1000px]">
              <img
                src="/friseur.jpg"
                alt="Friseur Eva Kameter"
                style={{ objectFit: "contain", width: "100%", height: "100%" }}
              ></img>
            </div>
            <div className="w-[1000px]">
              <img
                src="/friseur.jpg"
                alt="Friseur Eva Kameter"
                style={{ objectFit: "contain", width: "100%", height: "100%" }}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
