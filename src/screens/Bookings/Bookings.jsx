import React, { useEffect } from "react";
import BookingForm from "../../components/BookingForm";
import BookingTable from "../../components/BookingTable";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setCurrent, clearCurrent } from "../../actions";
import {
  getBookingsThunk,
  getVisitorsThunk,
  getRoomsThunk,
  addBookingThunk,
  deleteBookingThunk,
  updateBookingThunk
} from "../../thunk";

const Bookings = ({
  bookings,
  getBookings,
  getVisitors,
  getRooms,
  addBooking,
  deleteBooking,
  updateBooking,
  setCurrentBooking,
  clearCurrentBooking
}) => {
  const { bookingData, visitorData, roomData, current, loading } = bookings;

  useEffect(() => {
    getBookings();
    getVisitors();
    getRooms();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      <div className="flex-grid">
        <div className="b-left">
          <BookingForm
            current={current}
            roomData={roomData}
            visitorData={visitorData}
            addBooking={addBooking}
            updateBooking={updateBooking}
            clearCurrentBooking={clearCurrentBooking}
          />
        </div>
        <div className="right">
          <BookingTable
            loading={loading}
            bookingData={bookingData}
            deleteBooking={deleteBooking}
            setCurrentBooking={setCurrentBooking}
          />
        </div>
      </div>
    </div>
  );
};

Bookings.propTypes = {
  bookings: PropTypes.object.isRequired,
  getBookings: PropTypes.func.isRequired,
  getVisitors: PropTypes.func.isRequired,
  addBooking: PropTypes.func.isRequired,
  deleteBooking: PropTypes.func.isRequired,
  updateBooking: PropTypes.func.isRequired,
  setCurrentBooking: PropTypes.func.isRequired,
  clearCurrentBooking: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  bookings: state.bookings
});

const mapDispatchToProps = dispatch => ({
  getBookings: () => {
    dispatch(getBookingsThunk());
  },
  getRooms: () => {
    dispatch(getRoomsThunk());
  },
  getVisitors: () => {
    dispatch(getVisitorsThunk());
  },
  addBooking: booking => {
    dispatch(addBookingThunk(booking));
  },
  deleteBooking: id => {
    dispatch(deleteBookingThunk(id));
  },
  updateBooking: booking => {
    dispatch(updateBookingThunk(booking));
  },
  setCurrentBooking: booking => {
    dispatch(setCurrent(booking));
  },
  clearCurrentBooking: () => {
    dispatch(clearCurrent());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Bookings);
