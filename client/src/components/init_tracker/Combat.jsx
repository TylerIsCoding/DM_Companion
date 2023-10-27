import Player from "./Player";
import InitList from "./InitList";

const Combat = ({ page, setPage, playerArray, setPlayerArray }) => {
    const endCombat = () => {
        setPage(<InitList page={page} setPage={setPage} />);
    };

    const nextTurn = () => {
        const currentPlayer = playerArray.shift();
        playerArray.push(currentPlayer);
        setPlayerArray(playerArray);
        setPage(
            <Combat
                page={page}
                setPage={setPage}
                playerArray={playerArray}
                setPlayerArray={setPlayerArray}
            />
        );
    };

    return (
        <>
            <h1>Combat</h1>
            <ul className="ul__player_list ul__combat">
                {playerArray.length > 0
                    ? playerArray.map((el, i) => {
                          return (
                              <>
                                  <li
                                      key={el.id}
                                      className="li__init_player"
                                      style={{ backgroundColor: el.color }}
                                  >
                                      <Player
                                          page={page}
                                          setPage={setPage}
                                          id={el.id}
                                          name={
                                              i === 0
                                                  ? el.name.endsWith("s")
                                                      ? `${el.name}' Turn`
                                                      : `${el.name}'s Turn`
                                                  : el.name
                                          }
                                          mod={el.modifier}
                                          color={el.color}
                                      />
                                  </li>
                                  {i === 0 ? <h1>Next Up:</h1> : ""}
                              </>
                          );
                      })
                    : ""}
            </ul>
            <section className="section__init_tracker_btn_container">
                <button
                    onClick={endCombat}
                    className="button__init_tracker button__init_clear button__end_combat"
                >
                    End Combat
                </button>
                <button
                    onClick={() => nextTurn()}
                    className="button__init_tracker button__init_start button__next_turn"
                >
                    Next Turn
                </button>
            </section>
        </>
    );
};

export default Combat;
