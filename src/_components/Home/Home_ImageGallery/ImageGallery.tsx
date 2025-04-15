import Marquee from "react-fast-marquee";
import GalleryCard from "./GalleryCard";

function App() {
  return (
    <div
      style={{
        background:
          "linear-gradient(93deg, rgba(40,109,202,1) 0%, rgba(0,18,182,1) 100%)",
      }}
      className="main flex flex-col items-center align pb-10 overflow-hidden z-50"
    >
      <h1 className="text-white text-4xl lg:text-[67px] text-center font-[700] leading-[87px] p-[20px]">
        Image Gallery
      </h1>
      <Marquee pauseOnHover={true}>
        <div className="flex ">
          <GalleryCard start={0} end={26} />
        </div>
      </Marquee>

      <Marquee pauseOnHover={true} direction="right">
        <div className="flex ">
          <GalleryCard start={26} end={57} />
        </div>
      </Marquee>
    </div>
  );
}

export default App;
