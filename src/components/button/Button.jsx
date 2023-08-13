import "./button.css";

const Button = ({ text, className, img }) => {
    return (
        <button className={className}>
            <img src={img} alt="" />
            {text}
        </button>
    );
};

export default Button;
