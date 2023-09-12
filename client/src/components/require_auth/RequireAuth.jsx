import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();

    return auth?.roles?.find((role) => allowedRoles?.includes(role)) ? (
        <Outlet />
    ) : (
        // Need to add an additional ternary when role authorizing admins of campaigns
        <Navigate to="/login" state={{ from: location }} replace />
    );
};

export default RequireAuth;
