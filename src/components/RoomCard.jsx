import { useState } from "react";
import { roomSoldOut, roomsLeft } from "../utils/utils";

const RoomCard = ({ room }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    clicked ? setClicked(false) : setClicked(true);
  };

  let occupancyStr = room.min_occupancy;
  if (room.min_occupancy !== room.max_occupancy) {
    occupancyStr += " - " + room.max_occupancy;
  }

  const soldOut = roomSoldOut(room);
  const available = roomsLeft(room);
  let roomSuffix = " room";
  let peopleSuffix = "";

  if (room.min_occupancy > 1) {
    peopleSuffix += "people";
  } else {
    peopleSuffix += "person";
  }

  if (available > 1) {
    roomSuffix += "s";
  }

  return (
    <div className="RoomCard">
      <p>{room.name}</p>
      <p>
        {room.type} for {occupancyStr} {peopleSuffix}
      </p>
      <p>{soldOut ? "" : room.price.price}</p>
      <b>{soldOut ? "SOLD OUT" : available + roomSuffix + " left"}</b>
      {soldOut ? (
        ""
      ) : (
        <p>
          <button onClick={handleClick}>Book now!</button>
        </p>
      )}
      {clicked ? <p>Redirecting to booking page... (not really)</p> : ""}
    </div>
  );
};

export default RoomCard;
