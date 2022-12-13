const availabilityData = require("../data/accommodation_availability.json");
const { rooms } = availabilityData;

const lookup = {};

rooms.forEach((room) => {
  lookup[room.id] = room.available;
});

export const accommodationSoldOut = (accommodation) => {
  let soldOut = true;
  accommodation.rooms.map((room) => {
    if (lookup[room.id]) {
      soldOut = false;
    }
  });

  return soldOut;
};

export const roomSoldOut = (room) => {
  if (lookup[room.id]) {
    return false;
  }
  return true;
};

export const roomsLeft = (room) => {
  return lookup[room.id];
};
