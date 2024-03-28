import { useState, useEffect } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";

const About = () => {
    const [users, setUsers] = useState();
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getUsers = async () => {
            try {
                const response = await axiosPrivate.get("/users", {
                    signal: controller.signal,
                });
                const userNames = response.data.map((user) => user.username);
                isMounted && setUsers(userNames);
            } catch (e) {
                console.error(e);
                navigate("/login", {
                    state: { from: location },
                    replace: true,
                });
            }
        };

        getUsers();

        return () => {
            isMounted = false;
            controller.abort();
        };
    }, []); // Might have to remove this useEffect

    return (
        <article>
            <h2>Users List</h2>
            {users?.length ? (
                <ul>
                    {users.map((user, i) => (
                        <li key={i}>{user}</li>
                    ))}
                </ul>
            ) : (
                <p>No users found.</p>
            )}
        </article>
    );
};

export default About;
