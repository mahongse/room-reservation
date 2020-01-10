import React from "react";
// import Spinner from "../Spinner";
import moment from "moment";

const BookingTable = ({
  bookingData,
  deleteBooking,
  setCurrentBooking,
  loading
}) => {
  const handleDelete = id => {
    deleteBooking(id);
  };

  const handleEdit = booking => {
    setCurrentBooking(booking);
  };

  // if (loading) return <Spinner />;

  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Person Name</th>
          <th>Room ID</th>
          <th>Booked</th>
          <th>Person ID</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {bookingData &&
          bookingData.map((booking, index) => (
            <tr key={booking.id}>
              <td>{index + 1}</td>
              <td>{booking.personName}</td>
              <td>{booking.roomNumber}</td>
              <td>{moment(booking.bookedAt).format("MM/DD/YYYY")}</td>
              <td>{booking.personId}</td>
              <td onClick={() => handleEdit(booking)}>
                <i className="fa fa-pencil-square-o"></i>
              </td>
              <td onClick={() => handleDelete(booking.id)}>
                <i className="fa fa-times-circle-o"></i>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
export default BookingTable;
