import BlogResponsiveBanner from "./BlogResponsiveBanner";

const Blogs_Banner = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="  lg:grid grid-cols-2 poppins ">
        <div
          className="max-w-5xl mx-auto flex items-center lg:rounded-br-[70px] w-full -z-30"
          style={{
            background: `url("/assets/Blog/Rectangle.webp")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="  z-30   -mr-20    rounded-3xl h-[700px]  mx-auto"></div>
        </div>
      </div>
      <div className="absolute w-full  top-1/4 lg:top-1/2">
        <BlogResponsiveBanner />
      </div>
    </div>
  );
};

export default Blogs_Banner;
