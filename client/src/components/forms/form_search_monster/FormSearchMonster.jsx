import HeaderBook from "../../header_book/HeaderBook";
import MonsterInfo from "../../monsters/MonsterInfo";
import { useRef, useState, useEffect } from "react";
import axios from "../../../api/axios";

const MONSTER_URL = "https://www.dnd5eapi.co/api/monsters/";

const FormSearchMonster = () => {
    const searchRef = useRef();
    const errRef = useRef();

    const [search, setSearch] = useState("");
    const [monster, setMonster] = useState("");
    const [errMsg, setErrMsg] = useState("");

    useEffect(() => {
        searchRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg("");
    }, [search]);

    const handleSearch = async (e) => {
        e.preventDefault();
        const query = search.includes(" ")
            ? search.replaceAll(" ", "-")
            : search;
        if (query.length > 0) {
            try {
                const response = await axios.get(MONSTER_URL + query);
                if (response?.data) {
                    setMonster(response.data);
                    console.log(monster);
                } else {
                    setMonster("");
                }
            } catch (error) {
                console.log(error);
                setMonster("");
                setErrMsg("Invalid search");
            }
        } else {
            setMonster("");
            setErrMsg("Search cannot be blank");
        }
    };
    return (
        <>
            <section className="search__section">
                <HeaderBook
                    title="Monster Manual"
                    body="Search for a monster or enemy below"
                />
                <div className="search__row">
                    <form onSubmit={handleSearch} className="form_login">
                        <input
                            type="text"
                            id="monstername"
                            ref={searchRef}
                            autoComplete="off"
                            className="input__text"
                            placeholder="Enter a monster or enemy name"
                            required
                            onChange={(e) =>
                                setSearch(e.target.value.toLowerCase())
                            }
                            aria-describedby="uidnote"
                        />
                        <button
                            className="button__sign_in"
                            type="submit"
                            onClick={handleSearch}
                        >
                            Search
                        </button>
                    </form>
                </div>
                <p
                    ref={errRef}
                    className={errMsg ? "errmsg" : "offscreen"}
                    aria-live="assertive"
                >
                    {errMsg}
                </p>
            </section>
            <section>
                <>{monster ? <MonsterInfo data={monster} /> : <div></div>}</>
            </section>
        </>
    );
};

export default FormSearchMonster;
