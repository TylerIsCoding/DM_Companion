import React from "react";
import PageEndLeft from "../page_end/PageEndLeft";
import PageEndRight from "../page_end/PageEndRight";

import "./book.css";

const Book = ({ contentLeft, contentRight }) => {
    return (
        <div className="container__book center">
            <div className="cover"></div>
            <PageEndLeft />
            <div className="container__page page__left">
                <div className="content__page">{contentLeft}</div>
            </div>
            <div className="container__page page__right">
                <div className="content__page">{contentRight}</div>
            </div>
            <PageEndRight />
        </div>
    );
};

export default Book;
