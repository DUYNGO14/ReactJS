import { Route, Routes } from "react-router"
import {  Home, Resource, User } from "../pages"
import {HomeLayout} from "../layouts"

const AppRouter = () => {
    return (
        <Routes>
                {/* <Route path="/login" element={
                    <AuthLayout>
                        <Login/>
                    </AuthLayout>
                    } 
                />
               
                 <Route path="/register" element={
                    <AuthLayout>
                        <Register />
                    </AuthLayout>
                } />*/}
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