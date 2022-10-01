import {
  GET_TEAM_ERROR,
  GET_TEAM_LOADING,
  GET_TEAM_SUCCESS,
  TEAM_POST_ERROR,
  TEAM_POST_LOADING,
  TEAM_POST_SUCCESS,
} from "./team.types";

initialstate = {
  loading: false,
  error: false,
  token: "",
  data: [],
};

export const teamReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case GET_TEAM_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_TEAM_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case GET_TEAM_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
      };
    }
    case TEAM_POST_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case TEAM_POST_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case TEAM_POST_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        token: "Team added sucessfully",
      };
    }
    default: {
      return state;
    }
  }
};
