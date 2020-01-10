import api from "../api";
import { toast } from "react-toastify";
import {
  getStatusData,
  getRoomsData,
  addRoomData,
  deleteRoomData,
  updateRoomData,
  setLoading,
  setError
} from "../actions";

export const getStatusThunk = () => async dispatch => {
  try {
    dispatch(setLoading());
    const response = await api.roomsStatus.get();
    if (response.status !== 200) {
      throw new Error("Cannot get Status");
    }
    dispatch(getStatusData(response.data.status));
  } catch (err) {
    dispatch(setError(err.response.data.error.message));
  }
};

export const getRoomsThunk = () => async dispatch => {
  try {
    dispatch(setLoading());
    const response = await api.rooms.get({
      uriParams: {
        id: ""
      }
    });
    if (response.status !== 200) {
      throw new Error("Cannot get Rooms");
    }
    dispatch(getRoomsData(response.data));
  } catch (err) {
    dispatch(setError(err.response.data.error.message));
  }
};

export const addRoomThunk = room => async dispatch => {
  try {
    dispatch(setLoading());
    const response = await api.rooms.post(room, {
      uriParams: {
        id: ""
      }
    });
    if (response.status === 200) {
      toast("Room successfully added!");
    }
    dispatch(addRoomData(response.data));
  } catch (err) {
    dispatch(setError(err.response.data.error.message));
  }
};

export const deleteRoomThunk = id => async dispatch => {
  try {
    dispatch(setLoading());
    const response = await api.rooms.delete({
      uriParams: {
        id: id
      }
    });
    if (response.status === 200) {
      toast("Room successfully deleted!");
    }
    dispatch(deleteRoomData(id));
  } catch (err) {
    dispatch(setError(err.response.data.error.message));
  }
};

export const updateRoomThunk = room => async dispatch => {
  try {
    dispatch(setLoading());
    const response = await api.rooms.put(room, {
      uriParams: {
        id: room.id
      }
    });
    if (response.status === 200) {
      toast("Room successfully updated!");
    }
    dispatch(updateRoomData(response.data));
  } catch (err) {
    dispatch(setError(err.response.data.error.message));
  }
};
