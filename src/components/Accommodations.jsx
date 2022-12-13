import AccommodationItem from "./AccommodationItem";

const data = require("../data/accommodation.json");

const Accomodations = () => {
  const { accommodations } = data;

  return accommodations.map((accommodation) => {
    return <AccommodationItem key={accommodation.id} accommodation={accommodation} />;
  });
};

export default Accomodations;
