import AppProvider from "../offline"


const AuthLayout =({ children }: { children: React.ReactNode }) => {
    return (

            <AppProvider>
                {children}
            </AppProvider>

    )
}

export default AuthLayout 