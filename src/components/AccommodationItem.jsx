import { useState } from "react";
import { accommodationSoldOut } from "../utils/utils";
import Rooms from "./Rooms";

const AccommodationItem = ({ accommodation }) => {
  const descriptionHTML = { __html: accommodation.description };
  const [roomView, setRoomView] = useState(false);

  const soldOut = accommodationSoldOut(accommodation);

  const handleClick = () => {
    roomView ? setRoomView(false) : setRoomView(true);
  };

  return (
    <div className="ListItem">
      <p>{accommodation.name}</p>
      <p>
        <b>{accommodation.type.name}</b>
      </p>
      <p>{accommodation.rating.id} Stars</p>
      <div class="grid-container">
        <img src={accommodation.images[0].filename} className="AccommodationImage" class="grid-item"></img>
        <div className="Description" class="grid-item">
          <p dangerouslySetInnerHTML={descriptionHTML}></p>
        </div>
      </div>
      <b>Facilities:</b>
      <ul className="List">
        {accommodation.facilities.map((facility) => {
          return <li key={facility.id}>{facility.label}</li>;
        })}
      </ul>
      {soldOut ? <b>SOLD OUT</b> : <button onClick={handleClick}>{roomView ? "Close" : "View Rooms"}</button>}

      {roomView ? <Rooms rooms={accommodation.rooms} /> : null}
    </div>
  );
};

export default AccommodationItem;
