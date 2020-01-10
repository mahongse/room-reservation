export const getStatusData = data => ({
  type: "GET_STATUS",
  payload: data
});

export const setLoading = () => ({
  type: "SET_LOADING"
});

export const setError = data => ({
  type: "ERROR",
  payload: data
});

export const getRoomsData = data => ({
  type: "GET_ROOMS",
  payload: data
});

export const addRoomData = data => ({
  type: "ADD_ROOM",
  payload: data
});

export const deleteRoomData = id => ({
  type: "DELETE_ROOM",
  payload: id
});

export const updateRoomData = data => ({
  type: "UPDATE_ROOM",
  payload: data
});

export const setCurrent = data => ({
  type: "SET_CURRENT",
  payload: data
});

export const clearCurrent = () => ({
  type: "CLEAR_CURRENT"
});
