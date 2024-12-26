import { LoginPage } from "../../components/Pages";
import { AuthProvider } from "../../contexts/AuthContext";

function Login() {
    return (
        <>
            <AuthProvider>
                <LoginPage />
            </AuthProvider>
        </>
    );
}

export default Login