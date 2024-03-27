import { useEffect } from "react";
import { axiosPrivate } from "../../api/axios";

const RollHistory = ({ rollHistory, setRollHistory }) => {
    useEffect(() => {
        const getRolls = async () => {
            try {
                const response = await axiosPrivate.get("encounter/getRolls", {
                    withCredentials: true,
                });
                const rolls = response.data.rollHistory;
                setRollHistory(rolls);
            } catch (e) {
                console.log(e);
            }
        };

        getRolls();
    }, [setRollHistory]);

    const clearRollHistory = async () => {
        try {
            const response = await axiosPrivate.put("encounter/clearRolls", {
                withCredentials: true,
            });
            const rolls = response.data.rollHistory;
            setRollHistory(rolls);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <>
            <section className="section__roll_history">
                <h1>Roll History</h1>
                <ul className="ul__roll_history">
                    {rollHistory
                        ? rollHistory.map((el, i) => {
                              return (
                                  <li className="li__roll_history" key={i}>
                                      {el}
                                  </li>
                              );
                          })
                        : ""}
                </ul>
                <button
                    onClick={() => clearRollHistory()}
                    className="button__history_clear button__dice_red"
                >
                    Clear
                </button>
            </section>
        </>
    );
};

export default RollHistory;
