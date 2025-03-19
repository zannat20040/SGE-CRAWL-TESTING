import Requirement_Card_LargeScreen from "./Requirement_Card_LargeScreen";

interface Requirement {
  title: string;
  description: string;
  img: string;
}

const RequirementCard = ({
  destinationName,
  requirement,
}: {
  destinationName: string;
  requirement: Array<Requirement>;
}) => {


  return (
    <>
      {requirement?.length > 0 && (
        <div className="m-5 md:m-0 lg:m-0 px-4">
          <h1 className="pt-24 text-center font-semibold text-3xl md:text-4xl lg:text-6xl">
            Requirements for Studying in {destinationName}
          </h1>
          <Requirement_Card_LargeScreen requirement={requirement} />
        </div>
      )}
    </>
  );
};

export default RequirementCard;
