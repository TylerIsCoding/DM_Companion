import React from "react";
import { Routes, Route } from "react-router-dom";
import {
    Navbar,
    Home,
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
                <Book contentLeft={<Home />} contentRight={<PageTitle />} />
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
    </Routes>
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
