import { useReducer, useContext, createContext } from "react";
import reducer from "./reducer";
import {
  OPEN_SIDEBAR,
  CLOSE_SIDEBAR,
  NEXT_IMAGE,
  PREV_IMAGE,
  CHANGE_ACTIVE_IMAGE,
  OPEN_MODAL,
  CLOSE_MODAL,
} from "../actions";
import { imageList } from "../utils";

const initialState = {
  isSidebarOpen: false,
  isModalOpen: false,
  activeImage: 0,
};

const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const openSidebar = () => {
    dispatch({ type: OPEN_SIDEBAR });
  };
  const closeSidebar = () => {
    dispatch({ type: CLOSE_SIDEBAR });
  };
  const openModal = () => {
    dispatch({ type: OPEN_MODAL });
  };
  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL });
  };

  const handleActiveImageChange = (index) => {
    dispatch({ type: CHANGE_ACTIVE_IMAGE, payload: index });
  };
  const handleNextImage = () => {
    dispatch({ type: NEXT_IMAGE, payload: imageList.length });
  };
  const handlePrevImage = () => {
    dispatch({ type: PREV_IMAGE, payload: imageList.length });
  };
  return (
    <AppContext.Provider
      value={{
        ...state,
        imageList,
        openSidebar,
        closeSidebar,
        openModal,
        closeModal,
        handlePrevImage,
        handleNextImage,
        handleActiveImageChange,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
