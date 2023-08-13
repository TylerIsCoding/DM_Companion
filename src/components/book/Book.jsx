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
                <div className="content__page">
                    <HeaderBook />
                    <Login />
                </div>
            </div>
            <div className="container__page page__right">
                <div className="content__page">
                    <h1 className="page__right__h1">
                        Dungeon Master's<br></br> Companion
                    </h1>
                    <img src="/images/dragon.png" alt="dragon"></img>
                </div>
            </div>
            <PageEndRight />
        </div>
    );
};

export default Book;
