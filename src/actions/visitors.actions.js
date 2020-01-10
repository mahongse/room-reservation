export const setLoading = () => ({
  type: "SET_LOADING"
});

export const setError = data => ({
  type: "ERROR",
  payload: data
});

export const getVisitorsData = data => ({
  type: "GET_VISITORS",
  payload: data
});

export const addVisitorData = data => ({
  type: "ADD_VISITOR",
  payload: data
});

export const deleteVisitorData = id => ({
  type: "DELETE_VISITOR",
  payload: id
});

export const updateVisitorData = data => ({
  type: "UPDATE_VISITOR",
  payload: data
});

export const setCurrent = data => ({
  type: "SET_CURRENT",
  payload: data
});

export const clearCurrent = () => ({
  type: "CLEAR_CURRENT"
});
