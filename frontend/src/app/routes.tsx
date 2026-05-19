import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "../shared/layouts/MainLayout";
import { DashboardPage } from "../pages/Dashboard";
import { Navigate } from "react-router-dom";

export function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route
                path="/"
                element={<Navigate to="/dashboard"/>
                }/>
                <Route 
                path="/dashboard"
                element={
                    <MainLayout>
                        <DashboardPage/>
                    </MainLayout>
                }/> 
            </Routes>
        </BrowserRouter>
    );
}