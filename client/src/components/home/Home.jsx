import "./home.css";
import HeaderBook from "../header_book/HeaderBook";

const Home = () => {
    return (
        <HeaderBook
            title={<>Welcome Dungeon Master...</>}
            body={"Use the bar above to login or sign up"}
        />
    );
};

export default Home;
