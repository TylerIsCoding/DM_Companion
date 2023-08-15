import "./header_book.css";

const HeaderBook = ({ title, body }) => {
    return (
        <div className="header__container">
            <h1 className="header__h1">{title}</h1>
            <h3 className="header__h3">{body}</h3>
        </div>
    );
};

export default HeaderBook;
