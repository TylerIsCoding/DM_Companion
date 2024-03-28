import "./button.css";

const Button = ({ text, type, className, img, alt, disabled }) => {
    return (
        <button className={className} disabled={disabled} type={type}>
            {" "}
            <img src={img} alt={alt} />
            {text}
        </button>
    );
};

Button.defaultProps = {
    className: null,
    type: "button",
    disabled: null,
    img: null,
    alt: null,
    text: "",
};

export default Button;
