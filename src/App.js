import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Book, Login, PageTitle, SignUp } from "./components";
import "./App.css";

const Main = () => (
    <Routes>
        <Route
            exact
            path="/"
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
        <div className="App">
            <Navbar />
            <Main />
        </div>
    );
};

export default App;
