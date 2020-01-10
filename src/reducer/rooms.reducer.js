const initialState = {
  status: {
    rooms: 0,
    booking: 0,
    visitors: 0
  },
  roomData: [],
  current: null,
  loading: false,
  error: null
};

export default function roomsReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_STATUS":
      return {
        ...state,
        loading: false,
        status: action.payload
      };

    case "GET_ROOMS":
      return {
        ...state,
        loading: false,
        roomData: action.payload
      };

    case "ADD_ROOM":
      return {
        ...state,
        loading: false,
        roomData: [...state.roomData, action.payload]
      };

    case "DELETE_ROOM":
      return {
        ...state,
        loading: false,
        roomData: state.roomData.filter(room => room.id !== action.payload)
      };

    case "UPDATE_ROOM":
      return {
        ...state,
        loading: false,
        roomData: state.roomData.map(room =>
          room.id === action.payload.id ? action.payload : room
        )
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
