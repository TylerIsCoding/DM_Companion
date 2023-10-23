import "./init_tracker.css";
import axios from "../../api/axios";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EditPlayer from "./EditPlayer";

const Player = ({ id, name, color, page, setPage, getPlayers, mod }) => {
    const trash = async () => {
        try {
            const response = await axios.put(
                "/encounter/deletePlayer",
                {
                    id: id,
                },
                {
                    withCredentials: true,
                }
            );
            if (response?.data) {
                getPlayers();
            }
        } catch (e) {
            console.error(e);
        }
    };

    const edit = async () => {
        setPage(
            <EditPlayer
                page={page}
                setPage={setPage}
                id={id}
                playerName={name}
                modifier={mod}
                playerColor={color}
            />
        );
    };

    return (
        <li
            key={id}
            className="li__init_player"
            style={{ backgroundColor: color }}
        >
            {name
                ? name.length > 15
                    ? (name = name.slice(0, 10) + "...")
                    : name
                : ""}
            <span className="span__init_player">
                <FontAwesomeIcon icon={faEdit} onClick={() => edit()} />
                <FontAwesomeIcon icon={faTrash} onClick={() => trash()} />
            </span>
        </li>
    );
};

export default Player;
