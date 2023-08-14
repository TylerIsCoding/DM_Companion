import "./button.css";

const Button = ({ text, className, img, alt, disabled }) => {
    return (
        <button className={className} disabled={disabled}>
            <img src={img} alt={alt} />
            {text}
        </button>
    );
};

export default Button;
