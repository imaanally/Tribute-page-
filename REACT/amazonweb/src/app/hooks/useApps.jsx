import { useContext } from "react";
import AppContext from "../provider/AppContext";

const useApp = () => {
  return useContext(AppContext);
};

export default useApp;
