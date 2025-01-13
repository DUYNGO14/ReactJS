import { ReactNode } from "react";

import { useOffline } from "../hooks";
import { AuthProvider } from "../contexts/AuthContext";

const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  useOffline();
  return (
    <>
      <AuthProvider>{children}</AuthProvider>
    </>
  );
};

export default AppProvider;
