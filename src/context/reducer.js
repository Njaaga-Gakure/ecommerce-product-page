import {
  CHANGE_ACTIVE_IMAGE,
  CLOSE_MODAL,
  CLOSE_SIDEBAR,
  NEXT_IMAGE,
  OPEN_MODAL,
  OPEN_SIDEBAR,
  PREV_IMAGE,
} from "../actions";

const reducer = (state, action) => {
  if (action.type === OPEN_SIDEBAR) {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === CLOSE_SIDEBAR) {
    return { ...state, isSidebarOpen: false };
  }
  if (action.type === OPEN_MODAL) {
    return { ...state, isModalOpen: true };
  }
  if (action.type === CLOSE_MODAL) {
    return { ...state, isModalOpen: false };
  }
  if (action.type === NEXT_IMAGE) {
    const { payload: imageListLength } = action;
    let newActiveImage = state.activeImage + 1;
    if (newActiveImage > imageListLength - 1) {
      newActiveImage = 0;
    }
    return { ...state, activeImage: newActiveImage };
  }
  if (action.type === PREV_IMAGE) {
    const { payload: imageListLength } = action;
    let newActiveImage = state.activeImage - 1;
    if (newActiveImage < 0) {
      newActiveImage = imageListLength - 1;
    }
    return { ...state, activeImage: newActiveImage };
  }
  if (action.type === NEXT_IMAGE) {
    const { payload: imageListLength } = action;
    let newActiveImage = state.activeImage + 1;
    if (newActiveImage > imageListLength - 1) {
      newActiveImage = 0;
    }
    return { ...state, activeImage: newActiveImage };
  }
  if (action.type === CHANGE_ACTIVE_IMAGE) {
    return { ...state, activeImage: action.payload };
  }

  throw new Error(`No action type matching: ${action.type}`);
};
export default reducer;
