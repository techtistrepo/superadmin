import { Route, Routes } from "react-router-dom";
import { AdminRouteNames } from "./route-constant";
import { Login as AdminLogin } from "../super-admin/Login";
import AdminDashboard from "../super-admin/dashboard";
import AdminRoutes from "./adminRoutes";
import AdminForgotPassword from "../super-admin/forgotpassword";
import Subscription from "../super-admin/subsciription";
import SubscriptionList from "../super-admin/subscriptionList";

const AppRoutes = () => {
    return (
        <Routes >
            <Route exact path={AdminRouteNames.Admin} element={<AdminRoutes />}>
                <Route path={AdminRouteNames.Dashboard} element={<AdminDashboard/>} />
                <Route path={AdminRouteNames.SubscriptionAdd} element= {<Subscription /> } />
                <Route path={AdminRouteNames.SubscriptionList} element= {<SubscriptionList /> } />
            </Route >
            <Route path={AdminRouteNames.ForgotPassword} element={<AdminForgotPassword />} />
            <Route path={AdminRouteNames.Login} element={<AdminLogin/>} />
        </Routes>
    )
}

export default AppRoutes