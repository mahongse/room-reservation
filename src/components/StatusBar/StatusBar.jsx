import React, { Fragment } from "react";
import Spinner from "../Spinner";

const StatusBar = ({ status: { rooms, booking, visitors }, loading }) => {
  return (
    <div className="left-top">
      {!loading ? (
        <Fragment>
          <div>
            {rooms} <br /> Rooms
          </div>
          <div>
            {booking} <br /> Bookings
          </div>
          <div>
            {visitors} <br /> Visitors
          </div>
        </Fragment>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default StatusBar;
