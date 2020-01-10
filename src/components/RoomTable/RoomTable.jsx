import React from "react";
// import Spinner from "../Spinner";
import moment from "moment";

const RoomTable = ({ roomData, deleteRoom, setCurrentRoom, loading }) => {
  const handleDelete = id => {
    deleteRoom(id);
  };

  const handleEdit = room => {
    setCurrentRoom(room);
  };

  // if (loading) return <Spinner />;

  return (
    <table>
      <thead>
        <tr>
          <th>#ID</th>
          <th>Booked</th>
          <th>Floor</th>
          <th>Beds</th>
          <th>Balcony</th>
          <th>Number</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {roomData &&
          roomData.map((room, index) => (
            <tr key={room.id}>
              <td>{index + 1}</td>
              <td>{moment(room.bookedAt).format("MM/DD/YYYY")}</td>
              <td>{room.floor}</td>
              <td>{room.beds}</td>
              <td>{room.balcony ? "Yes" : "No"}</td>
              <td>{room.roomId}</td>
              <td onClick={() => handleEdit(room)}>
                <i className="fa fa-pencil-square-o"></i>
              </td>
              <td onClick={() => handleDelete(room.id)}>
                <i className="fa fa-times-circle-o"></i>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default RoomTable;
