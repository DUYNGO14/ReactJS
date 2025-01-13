import { Header } from "../../components/Organisms";
import { AuthProvider } from "../../contexts/AuthContext";
import AppProvider from "../offline";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppProvider>
      <AuthProvider>
        <Header />
        <div>{children}</div>
      </AuthProvider>
    </AppProvider>
  );
};

export default HomeLayout;
