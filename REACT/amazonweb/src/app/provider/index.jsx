import { useState } from "react";
import { useEffect } from "react";
import AppContext from "./AppContent";

function AppProvider({ children }) {
  const [member, setMember] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const savedMember = localStorage.getItem("member");
    const savedToken = localStorage.getItem("token");

    if (savedMember) {
      setMember(JSON.parse(savedMember));
    }

    if (savedToken) {
      setToken(savedToken);
    }
  }, []);
  return (
    <AppContext.Provider value={{ member, setMember, token, setToken }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
