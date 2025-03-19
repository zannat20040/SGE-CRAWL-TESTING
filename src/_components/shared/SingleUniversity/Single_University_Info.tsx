interface University {
  logo: string | null;
  Name: string | null;
  Overview: string | null;
  rank: string | null;
  location: string | null;
  established: string | null;
  History: string | null;
  "Ranking & Achievement": string | null;
  Services: string | null;
  "Department & Faculty": string | null;
  Accommodation: string | null;
  Fee: string | null;
  "international student": string | null;
  country: string | null;
  courses: string | null;
}

const Single_University_Info = ({ university }: { university: University }) => {
  return (
    <div className=" mt-14">
      <div className="ml-auto bg-[#F5F5F5] rounded-2xl">
        <p className="bg-[#2563EB] text-white text-center py-5 text-3xl font-bold rounded-t-2xl">
          Key Information
        </p>
        <div className="px-10 pt-5 text-2xl font-bold">
          <p className="text-[#8E8E8E]">Rank</p>
          <p className="text-[#1D4ED8]">
            {university.rank ? university.rank : "N/A"}
          </p>
        </div>
        <div className="px-10 pt-5 text-2xl font-bold">
          <p className="text-[#8E8E8E]">Location</p>
          <p className="text-[#1D4ED8]">
            {university.location ? university.location : "N/A"}
          </p>
        </div>
        <div className="px-10 pt-5 text-2xl font-bold">
          <p className="text-[#8E8E8E]">Established</p>
          <p className="text-[#1D4ED8]">
            {university.established ? university.established : "N/A"}
          </p>
        </div>
        <div className="px-10 pt-5 pb-5 text-2xl font-bold">
          <p className="text-[#8E8E8E]">International Students</p>
          <p className="text-[#1D4ED8]">
            {university["international student"]
              ? university["international student"]
              : "N/A"}
          </p>
        </div>
        <div className="border-t-2 border-dashed border-gray-400 py-5 mx-10"></div>

        <div className="px-10 pt-5 text-2xl font-bold">
          <p className="text-[#8E8E8E]">Famous Courses</p>
          <p className="text-[#1D4ED8]">
            {university?.courses ? university?.courses : "N/A"}
          </p>
        </div>
        <div className="px-10 pt-5 pb-10 text-2xl font-bold">
          <p className="text-[#8E8E8E]">International Fees</p>
          <p className="text-[#1D4ED8]">
            {university.Fee ? university.Fee : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Single_University_Info;
