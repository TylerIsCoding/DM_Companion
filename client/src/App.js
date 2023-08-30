import React from "react";
import { Routes, Route } from "react-router-dom";
import {
    Navbar,
    HomeMenu,
    Book,
    Login,
    PageTitle,
    SignUp,
    Dashboard,
} from "./components";
import "./App.css";

const Main = () => (
    <Routes>
        <Route
            exact
            path="/"
            element={
                <Book contentLeft={<HomeMenu />} contentRight={<PageTitle />} />
            }
        ></Route>
        <Route
            exact
            path="/login"
            element={
                <Book contentLeft={<Login />} contentRight={<PageTitle />} />
            }
        ></Route>
        <Route
            exact
            path="/signup"
            element={
                <Book contentLeft={<SignUp />} contentRight={<PageTitle />} />
            }
        ></Route>
        <Route
            exact
            path="/contact"
            element={
                <Book contentLeft={<Contact />} contentRight={<PageTitle />} />
            }
        ></Route>
        <Route
            exact
            path="/dashboard"
            element={
                <Book
                    contentLeft={<Dashboard />}
                    contentRight={<PageTitle />}
                />
            }
        ></Route>
        <Route
            exact
            path="/monsters"
            element={
                <Book contentLeft={<Monsters />} contentRight={<PageTitle />} />
            }
        ></Route>
    </Routes>
);

const Monsters = () => (
    <div className="monsters">
        <h1>Volo's Guide to Monsters</h1>
    </div>
);

const Contact = () => (
    <div className="contact">
        <h1>Contact Me</h1>
        <p>
            You can reach me via email: <strong>hello@example.com</strong>
        </p>
    </div>
);

const App = () => {
    return (
        <main className="App">
            <Navbar />
            <Main />
        </main>
    );
};

export default App;
