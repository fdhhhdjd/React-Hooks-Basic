import React, { TOGGLE_AUTH } from "./Types";
export const ToggleAuth = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_AUTH:
      return !state;
    default:
      return state;
  }
};
