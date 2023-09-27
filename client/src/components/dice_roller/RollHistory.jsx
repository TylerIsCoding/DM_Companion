import { useEffect } from "react";
import axios from "../../api/axios";

const RollHistory = ({ rollHistory, setRollHistory }) => {
    useEffect(() => {
        const getRolls = async () => {
            try {
                const response = await axios.get("encounter/getRolls", {
                    withCredentials: true,
                });
                const rolls = response.data.rollHistory;
                setRollHistory(rolls);
            } catch (e) {
                console.log(e);
            }
        };

        getRolls();
    }, []);

    return (
        <>
            <ul className="ul__roll_history">
                {rollHistory.length > 0
                    ? rollHistory.map((el, i) => {
                          return (
                              <li className="li__roll_history" key={i}>
                                  {el}
                              </li>
                          );
                      })
                    : "No roll history"}
            </ul>
        </>
    );
};

export default RollHistory;
