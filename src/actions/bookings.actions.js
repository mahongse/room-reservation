export const setLoading = () => ({
  type: "SET_LOADING"
});

export const setError = data => ({
  type: "ERROR",
  payload: data
});

export const getBookingsData = data => ({
  type: "GET_BOOKINGS",
  payload: data
});

export const getRoomsData = data => ({
  type: "GET_ROOMS",
  payload: data
});

export const getVisitorsData = data => ({
  type: "GET_VISITORS",
  payload: data
});

export const addBookingData = data => ({
  type: "ADD_BOOKING",
  payload: data
});

export const deleteBookingData = id => ({
  type: "DELETE_BOOKING",
  payload: id
});

export const updateBookingData = data => ({
  type: "UPDATE_BOOKING",
  payload: data
});

export const setCurrent = data => ({
  type: "SET_CURRENT",
  payload: data
});

export const clearCurrent = () => ({
  type: "CLEAR_CURRENT"
});
