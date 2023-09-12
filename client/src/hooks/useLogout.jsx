import axios from "../api/axios";
import useAuth from "./useAuth";

const useLogout = () => {
    const { auth, setAuth } = useAuth();

    const logout = async () => {
        setAuth({});
        try {
            const response = await axios(
                "/logout",
                {
                    withCredentials: true,
                },
                {
                    Authorization: auth.accessToken,
                }
            );
            console.log(response);
        } catch (err) {
            console.error(err);
        }
    };

    return logout;
};

export default useLogout;
