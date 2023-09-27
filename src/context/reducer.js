import { CLOSE_SIDEBAR, OPEN_SIDEBAR } from "../actions";

const reducer = (state, action) => {
  if (action.type === OPEN_SIDEBAR) {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === CLOSE_SIDEBAR) {
    return { ...state, isSidebarOpen: false };
  }
  throw new Error(`No action type matching: ${action.type}`);
};
export default reducer;
