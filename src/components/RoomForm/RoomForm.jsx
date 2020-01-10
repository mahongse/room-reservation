import React, { useState, useEffect } from "react";
import Input from "../Input";
import Button from "../Button";
import { toast } from "react-toastify";

const RoomForm = ({ addRoom, updateRoom, current, clearCurrentRoom }) => {
  const roomTemplate = {
    floor: "",
    beds: "",
    balcony: "",
    roomId: ""
  };

  const [room, setRoom] = useState(roomTemplate);
  const { floor, beds, balcony, roomId } = room;

  useEffect(() => {
    if (current) {
      setRoom(current);
    }
  }, [current]);

  const handleSubmit = e => {
    e.preventDefault();

    if (room.id) {
      updateRoom(room);
      clearCurrentRoom();
      setRoom(roomTemplate);
      return;
    }

    if (floor === "" || beds === "" || roomId === "") {
      toast.error("Please fill in all fields!");
    } else {
      const newRoom = {
        bookedAt: new Date().toLocaleDateString("en-US"),
        available: true,
        floor,
        beds,
        balcony,
        roomId
      };

      addRoom(newRoom);
      setRoom(roomTemplate);
    }
  };

  const handleChange = e => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setRoom({
      ...room,
      [name]: value
    });
  };

  return (
    <div className="left-bottom">
      <h3>Add New Room</h3>
      <form onSubmit={handleSubmit}>
        <Input
          className="form-group"
          type="number"
          value={floor}
          name="floor"
          id="floor"
          title="Floor"
          onChange={handleChange}
        />
        <Input
          className="form-group"
          type="number"
          value={beds}
          name="beds"
          id="beds"
          title="Beds"
          onChange={handleChange}
        />
        <Input
          className="form-group"
          type="number"
          value={roomId}
          name="roomId"
          id="roomId"
          title="Room Number"
          onChange={handleChange}
        />
        <Input
          className="form-group checkbox"
          type="checkbox"
          checked={balcony}
          name="balcony"
          id="balcony"
          title="Balcony"
          onChange={handleChange}
        />
        <Button
          type="submit"
          className="btn"
          title={room.id ? "Update" : "Create"}
        />
      </form>
    </div>
  );
};

export default RoomForm;
