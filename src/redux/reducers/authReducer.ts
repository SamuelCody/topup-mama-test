import {
  LOADING,
  AUTHENTICATED,
  LOGOUT,
  ERROR,
  SET_CURRENT_USER_DATA,
  SET_EDIT_USER_DATA,
  SET_ALL_USERS_DATA,
} from "./types";

const initialState: {
  loading: boolean | null;
  authenticated?: string;
  error: any;
  currentUserData: any;
  allUsersData: any;
  editUserData: any;
} = {
  loading: null,
  authenticated: "",
  error: null,
  currentUserData: null,
  allUsersData: null,
  editUserData: null,
};

export default function authReducer(state = initialState, action: any) {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: action.payload };
    case AUTHENTICATED:
      return { ...state, authenticated: action.payload || true };
    case SET_CURRENT_USER_DATA:
      return { ...state, currentUserData: action.payload };
    case SET_ALL_USERS_DATA:
      return { ...state, allUsersData: action.payload };
    case SET_EDIT_USER_DATA:
      return { ...state, editUserData: action.payload };
    case ERROR:
      return { ...state, error: action.payload };
    case LOGOUT:
      return { ...initialState };
    default:
      return state;
  }
}
