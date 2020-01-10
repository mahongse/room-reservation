import api from "../api";
import { toast } from "react-toastify";
import {
  getVisitorsData,
  addVisitorData,
  deleteVisitorData,
  updateVisitorData,
  setLoading,
  setError
} from "../actions";

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

export const addVisitorThunk = visitor => async dispatch => {
  try {
    dispatch(setLoading());
    const response = await api.visitors.post(visitor, {
      uriParams: {
        id: ""
      }
    });
    if (response.status === 200) {
      toast("Visitor successfully added!");
    }
    dispatch(addVisitorData(response.data));
  } catch (err) {
    dispatch(setError(err.response.data.error.message));
  }
};

export const deleteVisitorThunk = id => async dispatch => {
  try {
    dispatch(setLoading());
    const response = await api.visitors.delete({
      uriParams: {
        id: id
      }
    });
    if (response.status === 200) {
      toast("Visitor successfully deleted!");
    }
    dispatch(deleteVisitorData(id));
  } catch (err) {
    dispatch(setError(err.response.data.error.message));
  }
};

export const updateVisitorThunk = visitor => async dispatch => {
  try {
    dispatch(setLoading());
    const response = await api.visitors.put(visitor, {
      uriParams: {
        id: visitor.id
      }
    });
    if (response.status === 200) {
      toast("Visitor successfully updated!");
    }
    dispatch(updateVisitorData(response.data));
  } catch (err) {
    dispatch(setError(err.response.data.error.message));
  }
};
