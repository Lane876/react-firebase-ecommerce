import React from "react";
import GET_PATH from "../types";

const initialState = {
  path: "",
};

const renderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PATH":
      return action.payload;
    default:
      return state;
  }
};

export default renderReducer;
