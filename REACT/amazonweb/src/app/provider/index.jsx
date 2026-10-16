import { useState } from "react";
import AppContext from "./AppContent";

function AppProvider({ children }) {
  const [member, setMember] = useState(null);
  const [token, setToken] = useState(null);

  return (
    <AppContext.Provider value={{ member, setMember, token, setToken }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
