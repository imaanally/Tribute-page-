import { useContext } from "react";
import AppContext from "../provider/AppContent";

const useApp = () => {
  return useContext(AppContext);
};

export default useApp;
