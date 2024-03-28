import "./monsters.css";

const MonsterAbilities = ({ data }) => {
    return (
        <>
            <section className="section__abilities_holder">
                <h1 className="h1__special_abilities">Special Abilities</h1>
                {data.special_abilities.length > 0 ? (
                    <section className="monster__base_info abilities__container">
                        <ul className="monster__base_info_list ">
                            {[...Object.keys(data.special_abilities)].map(
                                (el, i) => {
                                    return (
                                        <li key={i}>
                                            <span>
                                                {
                                                    data.special_abilities[el]
                                                        .name
                                                }
                                                :
                                            </span>{" "}
                                            {data.special_abilities[el].desc}
                                        </li>
                                    );
                                }
                            )}
                        </ul>
                    </section>
                ) : (
                    <h1 className="h1__none">None</h1>
                )}
                <h1 className="h1__special_abilities">Actions</h1>
                {data.actions.length > 0 ? (
                    <section className="monster__base_info abilities__container">
                        <ul className="monster__base_info_list ">
                            {[...Object.keys(data.actions)].map((el, i) => {
                                return (
                                    <li key={i}>
                                        <span>{data.actions[el].name}:</span>{" "}
                                        {data.actions[el].desc}
                                    </li>
                                );
                            })}
                        </ul>
                    </section>
                ) : (
                    <h1 className="h1__none">None</h1>
                )}

                {data.legendary_actions.length > 0 ? (
                    <>
                        <h1 className="h1__special_abilities">
                            Legendary Actions
                        </h1>
                        <section className="monster__base_info legendary__container">
                            <ul className="monster__base_info_list ">
                                {[...Object.keys(data.legendary_actions)].map(
                                    (el, i) => {
                                        return (
                                            <li key={i}>
                                                <span>
                                                    {
                                                        data.legendary_actions[
                                                            el
                                                        ].name
                                                    }
                                                    :
                                                </span>{" "}
                                                {
                                                    data.legendary_actions[el]
                                                        .desc
                                                }
                                            </li>
                                        );
                                    }
                                )}
                            </ul>
                        </section>
                    </>
                ) : (
                    ""
                )}
            </section>
        </>
    );
};

export default MonsterAbilities;
