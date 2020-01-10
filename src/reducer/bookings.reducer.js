const initialState = {
  bookingData: [],
  roomData: [],
  visitorData: [],
  current: null,
  loading: false,
  error: null
};

export default function bookingsReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_BOOKINGS":
      return {
        ...state,
        bookingData: action.payload,
        loading: false
      };

    case "GET_VISITORS":
      return {
        ...state,
        visitorData: action.payload,
        loading: false
      };

    case "GET_ROOMS":
      return {
        ...state,
        roomData: action.payload,
        loading: false
      };

    case "ADD_BOOKING":
      return {
        ...state,
        bookingData: [...state.bookingData, action.payload],
        loading: false
      };

    case "DELETE_BOOKING":
      return {
        ...state,
        bookingData: state.bookingData.filter(
          booking => booking.id !== action.payload
        ),
        loading: false
      };

    case "UPDATE_BOOKING":
      return {
        ...state,
        bookingData: state.bookingData.map(booking =>
          booking.id === action.payload.id ? action.payload : booking
        ),
        loading: false
      };

    case "SET_CURRENT":
      return {
        ...state,
        current: action.payload
      };

    case "CLEAR_CURRENT":
      return {
        ...state,
        current: null
      };

    case "SET_LOADING":
      return {
        ...state,
        loading: true
      };

    case "ERROR":
      console.log(action.payload);
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    default:
      return state;
  }
}
