import "./monsters.css";
import MonsterStat from "./MonsterStat";

const MonsterInfo = ({ data }) => {
    return (
        <>
            <h1 className="monster__name">{data.name}</h1>
            <section className="monster__stat_holder">
                <MonsterStat stat={"STR"} statNum={data.strength} />
                <MonsterStat stat={"DEX"} statNum={data.dexterity} />
                <MonsterStat stat={"CON"} statNum={data.constitution} />
                <MonsterStat stat={"INT"} statNum={data.intelligence} />
                <MonsterStat stat={"WIS"} statNum={data.wisdom} />
                <MonsterStat stat={"CHA"} statNum={data.charisma} />
            </section>
            <section className="monster__base_info">
                <ul className="monster__base_info_list">
                    <li>
                        <span>Armor Class: </span>
                        {data.armor_class[0].value}
                    </li>
                    <li>
                        <span>Armor Type: </span>
                        {data.armor_class[0].type[0].toUpperCase() +
                            data.armor_class[0].type.substr(1)}
                    </li>
                    <li>
                        <span>Alignment: </span>
                        {data.alignment
                            .split(" ")
                            .map(
                                (word) => word[0].toUpperCase() + word.substr(1)
                            )
                            .join(" ")}
                    </li>
                    <li>
                        <span>Challenge Rating: </span>
                        {data.challenge_rating}
                    </li>
                    <li>
                        <span>Hit Points: </span>
                        {data.hit_points} ({data.hit_points_roll})
                    </li>
                    <li>
                        <span>Languages: </span>
                        {data.languages.length > 0
                            ? data.languages[0].toUpperCase() +
                              data.languages.substr(1)
                            : "None"}
                    </li>
                    <li>
                        <span>Speed: </span>
                        {[...Object.keys(data.speed)]
                            .map(
                                (el) =>
                                    el[0].toUpperCase() +
                                    el.substr(1) +
                                    ": " +
                                    Object.values(data.speed[el])
                                        .join("")
                                        .replace(".", "")
                            )
                            .join(", ")}
                    </li>
                    <li>
                        <span>Type: </span>
                        {data.type[0].toUpperCase() + data.type.substr(1)}
                    </li>
                    <li>
                        <span>XP: </span>
                        {data.xp}
                    </li>
                    <li>
                        <span>Size: </span>
                        {data.size}{" "}
                    </li>
                </ul>
            </section>
        </>
    );
};

export default MonsterInfo;
