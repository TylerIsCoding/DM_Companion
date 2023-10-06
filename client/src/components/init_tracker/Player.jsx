import "./init_tracker.css";
import axios from "../../api/axios";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Player = ({ id, name, color, getPlayers }) => {
    const trash = async () => {
        try {
            const response = await axios.put("/encounter/deletePlayer", {
                id: id,
            });
            if (response?.data) {
                getPlayers();
            }
        } catch (e) {
            console.error(e);
        }
    };

    const edit = () => {
        console.log(`Update ${name}`);
    };

    return (
        <li className="li__init_player" style={{ backgroundColor: color }}>
            {name}
            <span className="span__init_player">
                <FontAwesomeIcon icon={faEdit} onClick={() => edit()} />
                <FontAwesomeIcon icon={faTrash} onClick={() => trash()} />
            </span>
        </li>
    );
};

export default Player;
