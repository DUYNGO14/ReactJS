import { Header } from "../../components/Organisms";
import { AuthProvider } from "../../contexts/AuthContext";

const HomeLayout =({ children }: { children: React.ReactNode }) => {
    return (
            <AuthProvider>
                <Header /> 
                <div>{children}</div>
            </AuthProvider>

    )
}

export default HomeLayout 