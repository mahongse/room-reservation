const initialState = {
  visitorData: [],
  current: null,
  loading: false,
  error: null
};

export default function visitorsReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_VISITORS":
      return {
        ...state,
        visitorData: action.payload,
        loading: false
      };

    case "ADD_VISITOR":
      return {
        ...state,
        visitorData: [...state.visitorData, action.payload],
        loading: false
      };

    case "DELETE_VISITOR":
      return {
        ...state,
        visitorData: state.visitorData.filter(
          visitor => visitor.id !== action.payload
        ),
        loading: false
      };

    case "UPDATE_VISITOR":
      return {
        ...state,
        visitorData: state.visitorData.map(visitor =>
          visitor.id === action.payload.id ? action.payload : visitor
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
