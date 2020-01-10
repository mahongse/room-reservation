import { combineReducers } from "redux";
import roomsReducer from "./rooms.reducer";
import bookingsReducer from "./bookings.reducer";
import visitorsReducer from "./visitors.reducer";

export default combineReducers({
  rooms: roomsReducer,
  bookings: bookingsReducer,
  visitors: visitorsReducer
});
