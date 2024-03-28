import "./page_end.css";

const PageEnd = ({ side }) => {
    return (
        <>
            <div className={`${side}__end`}>
                <div className={`page__${side}__piece ${side}__top`}></div>
                <div className={`page__${side}__piece ${side}__middle`}></div>
                <div className={`page__${side}__piece ${side}__bottom`}></div>
            </div>
        </>
    );
};

export default PageEnd;
