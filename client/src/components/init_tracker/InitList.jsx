const InitList = ({ add, setAdd }) => {
    const toggleAddPage = () => {
        const status = add;
        setAdd(!status);
    };
    const toggleClearPage = () => {};
    return (
        <>
            <h1>Initiative Tracker</h1>
            <ul></ul>
            <section className="section__init_tracker_btn_container">
                <button
                    onClick={() => toggleAddPage()}
                    className="button__init_tracker button__init_add"
                >
                    Add
                </button>
                <button
                    onClick={() => toggleClearPage()}
                    className="button__init_tracker button__init_clear"
                >
                    Clear
                </button>
                <button className="button__init_tracker button__init_start">
                    Start
                </button>
            </section>
        </>
    );
};

export default InitList;
