const MonsterStat = ({ stat, statNum }) => {
    const mod = (stat) => {
        let result = Math.floor((stat - 10) / 2);
        return result === 0 ? 0 : result > 0 ? `+${result}` : result;
    };
    return (
        <div className="monster__stat_item">
            <h1>{stat}</h1>
            <h1>
                {statNum}
                {mod(statNum) !== 0 ? `(${mod(statNum)})` : ""}
            </h1>
        </div>
    );
};

export default MonsterStat;
