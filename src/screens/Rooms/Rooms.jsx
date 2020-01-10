import React, { useEffect } from "react";
import StatusBar from "../../components/StatusBar";
import RoomForm from "../../components/RoomForm";
import RoomTable from "../../components/RoomTable";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setCurrent, clearCurrent } from "../../actions";
import {
  getStatusThunk,
  getRoomsThunk,
  addRoomThunk,
  deleteRoomThunk,
  updateRoomThunk
} from "../../thunk";

const Rooms = ({
  rooms,
  getStatus,
  getRooms,
  addRoom,
  deleteRoom,
  updateRoom,
  setCurrentRoom,
  clearCurrentRoom
}) => {
  const { status, roomData, current, loading } = rooms;

  useEffect(() => {
    getRooms();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getStatus();
    // eslint-disable-next-line
  }, [roomData]);

  return (
    <div className="container">
      <div className="flex-grid">
        <div className="left">
          <StatusBar status={status} loading={loading} />
          <RoomForm
            addRoom={addRoom}
            current={current}
            updateRoom={updateRoom}
            clearCurrentRoom={clearCurrentRoom}
          />
        </div>
        <div className="right">
          <RoomTable
            loading={loading}
            roomData={roomData}
            deleteRoom={deleteRoom}
            setCurrentRoom={setCurrentRoom}
          />
        </div>
      </div>
    </div>
  );
};

Rooms.propTypes = {
  rooms: PropTypes.object.isRequired,
  getStatus: PropTypes.func.isRequired,
  getRooms: PropTypes.func.isRequired,
  addRoom: PropTypes.func.isRequired,
  deleteRoom: PropTypes.func.isRequired,
  updateRoom: PropTypes.func.isRequired,
  setCurrentRoom: PropTypes.func.isRequired,
  clearCurrentRoom: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  rooms: state.rooms
});

const mapDispatchToProps = dispatch => ({
  getStatus: () => {
    dispatch(getStatusThunk());
  },
  getRooms: () => {
    dispatch(getRoomsThunk());
  },
  addRoom: room => {
    dispatch(addRoomThunk(room));
  },
  deleteRoom: id => {
    dispatch(deleteRoomThunk(id));
  },
  updateRoom: room => {
    dispatch(updateRoomThunk(room));
  },
  setCurrentRoom: room => {
    dispatch(setCurrent(room));
  },
  clearCurrentRoom: () => {
    dispatch(clearCurrent());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);
