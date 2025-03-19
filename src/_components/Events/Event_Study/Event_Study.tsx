'use client'
import countryData from '../../../assets/json/countries.json'
import Image from "next/image";
import { useRouter } from "next/navigation";
const Event_Study = () => {
  const router = useRouter();

  return (
    <div className="max-w-screen-2xl mx-auto mt-10 mb-20 md:mt-20 md:mb-28 lg:mt-28 lg:mb-40 pb-16">
      <h1 className="text-[24px] md:text-[56px] font-bold text-center mb-5">
        Study in Your Dream Country
      </h1>
      <div>
        <ul className="px-5 grid grid-cols-3 lg:grid-cols-6 justify-between items-center w-auto mx-auto my-8 gap-2">
          {countryData.map((country) => (
            <li key={country.name} className="text-center my-1">
              <a
                href="#"
                rel="nofollow"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default dummy link behavior
                  router.push(country.to); // Programmatically redirect to the actual URL
                }}
              >
                <Image
                  width={100}
                  height={100}
                  className="w-2/4 h-auto mx-auto rounded-lg -rotate-90"
                  src={country.img}
                  alt={country.name}
                />
                <span>{country.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Event_Study;
// {
//   "name": "France",
//   "img": "https://i.ibb.co/wr2DVNH/France.png",
//   "to": "/study-destinations/study-in-the-france",
//   "label": "Study in France"
// },
// {
//   "name": "West Indies",
//   "img": "https://i.ibb.co/930GwsL/West-Indies.jpg",
//   "to": "/study-destinations/study-in-the-west-indies",
//   "label": "Study in West Indies"
// },
//   {
//   "name": "UAE",
//   "img": "https://i.ibb.co/vhS3vSX/UAE.jpg",
//   "to": "/study-destinations/study-in-the-uae",
//   "label": "Study in UAE"
// },
// {
//   "name": "Georgia",
//   "img": "https://i.ibb.co/BZXkW1X/Georgia.png",
//   "to": "/study-destinations/study-in-the-georgia",
//   "label": "Study in Georgia"
// },
// {
//   "name": "Finland",
//   "img": "https://i.ibb.co/kJFRR6p/Finland.png",
//   "to": "/study-destinations/study-in-the-finland",
//   "label": "Study in Finland"
// },
// {
//   "name": "Cyprus",
//   "img": "https://i.ibb.co.com/zZbntX5/Cyprus.png",
//   "to": "/study-destinations/study-in-the-cyprus",
//   "label": "Study in Cyprus"
// },
// {
//   "name": "New Zealand",
//   "img": "https://i.ibb.co/3F276Wh/NZ.jpg",
//   "to": "/study-destinations/study-in-the-new-zealand",
//   "label": "Study in New Zealand"
// },