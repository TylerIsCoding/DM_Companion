import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Book } from "./components";
import "./App.css";

const Main = () => (
    <Routes>
        <Route exact path="/" element={<Book />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
    </Routes>
);

const About = () => (
    <div className="about">
        <h1>About Me</h1>
        <p>
            Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident
            corporis fuga saepe distinctio ipsam? Et quos harum excepturi
            dolorum molestias?
        </p>
        <p>
            Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident
            corporis fuga saepe distinctio ipsam? Et quos harum excepturi
            dolorum molestias?
        </p>
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
        <div className="App">
            <Navbar />
            <Main />
        </div>
    );
};

export default App;
