const DiceImage = ({ src, alt }) => {
    return (
        <img
            className="diceImage"
            src={`/images/dice_images/${src}`}
            alt={alt}
        />
    );
};

export default DiceImage;
