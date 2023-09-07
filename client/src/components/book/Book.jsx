import React from "react";
import PageEnd from "../page_end/PageEnd";
import "./book.css";

const Book = ({ contentLeft, contentRight }) => {
    return (
        <div className="container__book center">
            <div className="cover"></div>
            <PageEnd side="left" />
            <div className="container__page page__left">
                <div className="content__page">{contentLeft}</div>
            </div>
            <div className="container__page page__right">
                <div className="content__page">{contentRight}</div>
            </div>
            <PageEnd side="right" />
        </div>
    );
};

export default Book;
