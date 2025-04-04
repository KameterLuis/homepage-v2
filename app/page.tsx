import About from "./about/About";
import Foot from "./footer";
import Hero from "./hero/Hero";
import Contact from "./contact/Contact";
import Nav from "./nav";
import Work from "./work/Work";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Nav />
      <div className="flex justify-center w-screen h-full">
        <div className="max-w-[1000px] w-full">
          <Hero />
        </div>
      </div>
      <div className="flex justify-center w-screen h-full bg-white">
        <div className="max-w-[1000px] w-full">
          <About />
          <Work />
          <Contact />
          <Foot />
        </div>
      </div>
    </div>
  );
}
