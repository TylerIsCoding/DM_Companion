const DiceImage = ({ diceCount, src, alt }) => {
    return (
        <>
            <div className="diceHolder">
                <span className={diceCount > 0 ? "diceCount" : "hidden"}>
                    {diceCount}
                </span>
                <img
                    className="diceImage"
                    src={`/images/dice_images/${src}`}
                    alt={alt}
                />
            </div>
        </>
    );
};

export default DiceImage;
