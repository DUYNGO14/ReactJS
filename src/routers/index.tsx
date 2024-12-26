import { Route, Routes } from "react-router"
import {  Home, Login, Register, Resource, User } from "../pages"
import {AuthLayout, HomeLayout} from "../layouts"

const AppRouter = () => {
    return (
        <Routes>
                 <Route path="/register" element={
                    <AuthLayout>
                        <Register />
                    </AuthLayout>
                } />
                <Route path="/login" element={
                    <AuthLayout>
                        <Login/>
                    </AuthLayout>
                    } 
                />
                 <Route path="/" element={
                    <HomeLayout>
                        <Home />
                    </HomeLayout>
                } /> 
                <Route path="/users" element={
                    <HomeLayout>
                        <User />
                    </HomeLayout>
                } />
                <Route path="/resources" element={
                    <HomeLayout>
                        <Resource />
                    </HomeLayout>
                } />
                
        </Routes>
    )
}
export default AppRouter