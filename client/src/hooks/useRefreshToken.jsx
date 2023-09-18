import axios from "../api/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
    const { setAuth } = useAuth();
    const { auth } = useAuth();
    const refresh = async () => {
        const response = await axios.get(
            "/refresh",
            {
                Authorization: auth.accessToken,
            },
            {
                withCredentials: true,
            }
        );
        setAuth((prev) => {
            return {
                ...prev,
                accessToken: response.data.accessToken,
            };
        });
        console.log(auth);
        return response.data.accessToken;
    };
    return refresh;
};

export default useRefreshToken;
