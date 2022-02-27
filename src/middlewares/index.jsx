import { SET_ERROR } from "../actions/type";

const logActions = (store) => (next) => (actionInfo) => {
  console.log('disparando', actionInfo);
  next(actionInfo);
}

const reportError = (store) => next => (actionInfo) => {
  const { action } = actionInfo;
  if (action?.type === SET_ERROR) {
    console.error(action.payload)
  }
  next(actionInfo);
}

export { logActions, reportError };