import api from "../api";
import { toast } from "react-toastify";
import {
  getBookingsData,
  getVisitorsData,
  getRoomsData,
  addBookingData,
  deleteBookingData,
  updateBookingData,
  setLoading,
  setError
} from "../actions";

export const getBookingsThunk = () => async dispatch => {
  try {
    dispatch(setLoading());
    const response = await api.bookings.get({
      uriParams: {
        id: ""
      }
    });
    if (response.status !== 200) {
      throw new Error("Cannot get Bookings");
    }
    dispatch(getBookingsData(response.data));
  } catch (err) {
    dispatch(setError(err.response.data.error.message));
  }
};

export const getVisitorsThunk = () => async dispatch => {
  try {
    dispatch(setLoading());
    const response = await api.visitors.get({
      uriParams: {
        id: ""
      }
    });
    if (response.status !== 200) {
      throw new Error("Cannot get Visitors");
    }
    dispatch(getVisitorsData(response.data));
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

export const addBookingThunk = booking => async dispatch => {
  try {
    dispatch(setLoading());
    const response = await api.bookings.post(booking, {
      uriParams: {
        id: ""
      }
    });
    if (response.status === 200) {
      toast("Booking successfully added!");
    }
    dispatch(addBookingData(response.data));
  } catch (err) {
    dispatch(setError(err.response.data.error.message));
  }
};

export const deleteBookingThunk = id => async dispatch => {
  try {
    dispatch(setLoading());
    const response = await api.bookings.delete({
      uriParams: {
        id: id
      }
    });
    if (response.status === 200) {
      toast("Booking successfully deleted!");
    }
    dispatch(deleteBookingData(id));
  } catch (err) {
    dispatch(setError(err.response.data.error.message));
  }
};

export const updateBookingThunk = booking => async dispatch => {
  try {
    dispatch(setLoading());
    const response = await api.bookings.put(booking, {
      uriParams: {
        id: booking.id
      }
    });
    if (response.status === 200) {
      toast("Booking successfully updated!");
    }
    dispatch(updateBookingData(response.data));
  } catch (err) {
    dispatch(setError(err.response.data.error.message));
  }
};
