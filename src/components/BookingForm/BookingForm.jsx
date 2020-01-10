import React, { Fragment, useState, useEffect } from "react";
import Input from "../Input";
import Button from "../Button";
import Select from "../Select";
import { toast } from "react-toastify";

const BookingForm = ({
  visitorData,
  roomData,
  current,
  addBooking,
  updateBooking,
  clearCurrentBooking
}) => {
  const bookingTemplate = {
    personName: "",
    personId: "",
    roomNumber: "",
    bookedAt: ""
  };
  const [booking, setBooking] = useState(bookingTemplate);
  const { personName, personId, roomNumber, bookedAt } = booking;

  useEffect(() => {
    if (current) {
      setBooking(current);
    }
  }, [current]);

  const handleSubmit = e => {
    e.preventDefault();

    if (booking.id) {
      updateBooking(booking);
      clearCurrentBooking();
      setBooking(bookingTemplate);
      return;
    }
    if (personName === "" || personId === "" || roomNumber === "") {
      toast.error("Please fill in all fields!");
    } else {
      const newBooking = {
        roomId: new Date().valueOf(),
        bookedAt,
        personName,
        personId,
        roomNumber
      };

      addBooking(newBooking);
      setBooking(bookingTemplate);
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === "personName") {
      const selPerson = visitorData.find(v => v.personName === value);
      setBooking({ ...booking, [name]: value, personId: selPerson.personId });
      return;
    }
    setBooking({
      ...booking,
      [name]: value
    });
  };

  return (
    <Fragment>
      <h3>New Booking</h3>
      <form onSubmit={handleSubmit}>
        <Select
          className="form-group select-wrapper"
          name="personName"
          id="personName"
          title="Person Name"
          value={personName}
          options={visitorData}
          onChange={handleChange}
        />
        <Input
          className="form-group"
          type="text"
          name="personId"
          id="personId"
          title="Person ID"
          value={personId}
          onChange={() => {}}
        />
        <Select
          className="form-group select-wrapper"
          name="roomNumber"
          id="roomId"
          title="Room ID"
          value={roomNumber}
          options={roomData}
          onChange={handleChange}
        />
        <Input
          className="form-group"
          type="date"
          value={bookedAt}
          name="bookedAt"
          id="bookedAt"
          title="Date"
          onChange={handleChange}
        />
        <Button
          type="submit"
          className="btn"
          title={booking.id ? "Update" : "Book"}
        />
      </form>
    </Fragment>
  );
};

export default BookingForm;
