import Image from "next/image";
import { FaAngleDown } from "react-icons/fa6";
interface Blog {  
  h1:string;
  paragraph:string
}
const BlogSingle = ({ blog }: { blog: Blog }) => {
  const Header = ({ title }:{title:string}) => {
    return <h2 className="text-xl font-semibold">{title}</h2>;
  };
  const Text = ({ text }:{text:string}) => {
    return <p className=" ">{text}</p>;
  };
  const Label = ({ text }:{text:string}) => {
    return (
      <p className=" font-medium">
        {text}
        <span className="text-red-500">*</span>
      </p>
    );
  };
  const Input = ({ text, type }:{text:string, type:string}) => {
    return (
      <input
        className="overscroll-none border-[1px] hover:border-[#3b82f6] cursor-pointer w-full p-1 placeholder:text-xs placeholder:text-gray-300 focus:outline-[#3b82f6] "
        placeholder={text}
        type={type}
      />
    );
  };

  const Card = ({ img, title }:{img:string, title:string}) => {
    return (
      <div className="space-y-2  lg:w-full sm:w-[48%] w-full  shadow-2xl rounded-2xl  h-max !mt-0">
        <Image width={100} height={100} src={img} alt="" className="w-full h-auto" />
        <div className="p-5">
          <div className="bg-[#fff2ee] w-fit p-2 text-xs text-[#ff8156] rounded-sm">
            Networking
          </div>
          <h2 className="font-semibold w-11/12 pt-3">{title}</h2>
        </div>
      </div>
    );
  };
  return (
    <div className="poppins my-10 pt-16 sm:pt-40">
      <div className="max-w-6xl lg:grid grid-cols-5 gap-10 lg:mx-auto px-5">
        {/* Blog content */}
        <div className="col-span-3 ">
          <div className="mb-5">
            <Header title={blog.h1} />
            <Text
              text={blog.paragraph}
            />
          </div>
           
          <div className="flex justify-between text-sm mb-5">
            <button className=" p-2 border-[1px]   hover:border-[#3b82f6] hover:text-[#3b82f6] ">
              Previous
            </button>
            <button className="p-2 border-[1px] hover:border-[#3b82f6] hover:text-[#3b82f6]">
              Next
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="col-span-2 ">
          <div className="shadow-2xl rounded-b-2xl">
            <div className=" bg-[#3b82f6] text-center text-white p-5 rounded-t-2xl">
              <h2 className="text-2xl font-semibold ">Want to Study Abroad?</h2>
              <p className="text-xs font-light">We can help - Fill in your</p>
              <p className="text-xs font-light">
                details and we’ll call you back
              </p>
            </div>
            <form className="p-2 px-3 space-y-5">
              <div>
                <Label text="Name" />
                <Input text="Your Name" type="text" />
              </div>
              <div>
                <Label text="Email" />
                <div className=" flex items-center justify-between border-[1px] hover:border-[#3b82f6] cursor-pointer w-full p-1  ">
                  <input
                    className="focus:outline-none placeholder:text-xs placeholder:text-gray-300"
                    placeholder="Your Email"
                    type="text"
                  />
                  <span className="text-gray-400 bg-[#fafafa] text-xs">
                    .com
                  </span>
                </div>
              </div>
              <div>
                <Label text="Phone Number" />
                <div className="flex items-center gap-5 text-gray-300 text-xs">
                  <span className="flex p-2 border-[1px]">
                    <Image width={100} height={100} className="w-auto h-auto" src='/assets/Logos/Bangladesh Flag 50 x 20 px.png' alt="" />
                    <p className="pr-2">+880</p>
                  </span>
                  <Input text="1891123654" type="text" />
                </div>
              </div>
              <div>
                <Label text="Country of Residence" />
                <div className=" flex items-center justify-between border-[1px] hover:border-[#3b82f6] cursor-pointer w-full p-1  ">
                  <input
                    className="focus:outline-none placeholder:text-xs placeholder:text-gray-300  "
                    readOnly
                    placeholder="Select your current country"
                    type="text"
                  />
                  <span className="text-gray-400 bg-[#fafafa] text-xs">
                    <FaAngleDown />
                  </span>
                </div>
              </div>
              <div>
                <Label text="Desired Country" />
                <div className=" flex items-center justify-between border-[1px] hover:border-[#3b82f6] cursor-pointer w-full p-1  ">
                  <input
                    className="focus:outline-none placeholder:text-xs placeholder:text-gray-300  "
                    readOnly
                    placeholder="Select your desired country"
                    type="text"
                  />
                  <span className="text-gray-400 bg-[#fafafa] text-xs">
                    <FaAngleDown />
                  </span>
                </div>
              </div>

              <div>
                <Label text="Desired Course" />
                <Input text="Write your desired course name" type="text" />
              </div>
              <div>
                <Label text="Desired University" />
                <Input text="Write your desired university name" type="text" />
              </div>
              <div>
                <Label text="Last Academic Qualification" />
                <Input text="Bachelor" type="text" />
              </div>
              <div>
                <Label text="English Test Status" />
                <Input text="IELTS" type="text" />
              </div>

              <div>
                <Label text="Which SGE Office is Nearest to You?" />
                <div className=" flex items-center justify-between border-[1px] hover:border-[#3b82f6] cursor-pointer w-full p-1  ">
                  <input
                    className="focus:outline-none placeholder:text-xs placeholder:text-gray-300  "
                    readOnly
                    placeholder="Dhanmondi, Dhaka"
                    type="text"
                  />
                  <span className="text-gray-400 bg-[#fafafa] text-xs">
                    <FaAngleDown />
                  </span>
                </div>
              </div>
            </form>

            <div className="p-5">
              <button className="font-inter bg-[#2563EB] hover:bg-[#3b82f6] text-white px-5 py-4 text-xs w-full  rounded-full">
                Schedule Meeting
              </button>
            </div>
          </div>

          <div className="my-10">
            <div className="flex items-center">
              <Image width={100} height={100} className="w-auto h-auto" src='/assets/Logos/Categories 30 x 30 px.png' alt="" />
              <p className="font-semibold">Category</p>
            </div>
            <ul className="space-y-1 my-1">
              <li className="text-xs">Personal statements</li>
              <li className="text-xs">Interview preparation</li>
              <li className="text-xs">Common application mistakes</li>
              <li className="text-xs">Visa processes</li>
              <li className="text-xs">Post-study work visas</li>
              <li className="text-xs">Immigration updates</li>
              <li className="text-xs">Scholarship opportunities</li>
              <li className="text-xs">Budgeting tips</li>
              <li className="text-xs">Accommodation options</li>
              <li className="text-xs">Cultural adaptation</li>
              <li className="text-xs">Social life balance</li>
              <li className="text-xs">Job search strategies</li>
              <li className="text-xs">TOEFL, IELTS, GRE, GMAT tips</li>
            </ul>
          </div>

            <h2 className="font-semibold text-md mb-3">Related Blogs</h2>
          <div className="space-y-5 flex flex-wrap gap-5 justify-between w-full ">
            <Card
              img='/assets/Blog/Rectangle 191.png'
              title={`Networking in University: A Shabuj Global ${`Student's`} Guide`}
            />
            <Card
              img='/assets/Blog/Rectangle 192.png'
              title={`University Networking: Guide for Global Students by Shabuj`}
            />
            <Card
              img='/assets/Blog/Rectangle 191.png'
              title={`Networking in University: A Shabuj Global Student's Guide`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSingle;
