import React from "react";
import Login from "../login/Login";
import PageEndLeft from "../page_end/PageEndLeft";
import PageEndRight from "../page_end/PageEndRight";
import HeaderBook from "../header_book/HeaderBook";
import "./book.css";

const Book = () => {
    return (
        <div className="container__book center">
            <div className="cover"></div>
            <PageEndLeft />
            <div className="container__page page__left">
                <HeaderBook />
                <Login />
            </div>
            <div className="container__page page__right"></div>
            <PageEndRight />
        </div>
    );
};

export default Book;
