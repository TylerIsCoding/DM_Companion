import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import jwt_decode from "jwt-decode";

const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();

    const decoded = auth.accessToken ? jwt_decode(auth.accessToken) : undefined;

    const roles = decoded?.UserInfo?.roles || [];

    return roles.find((role) => allowedRoles?.includes(role)) ? (
        <Outlet />
    ) : (
        // Need to add an additional ternary when role authorizing admins of campaigns
        <Navigate to="/login" state={{ from: location }} replace />
    );
};

export default RequireAuth;
