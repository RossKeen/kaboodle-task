import RoomCard from "./RoomCard";

const Rooms = ({ rooms }) => {
  return rooms.map((room) => {
    return <RoomCard key={room.id} room={room} />;
  });
};

export default Rooms;
