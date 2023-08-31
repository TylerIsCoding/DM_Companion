import React from "react";
import { Routes, Route } from "react-router-dom";
import {
    About,
    Book,
    HomeMenu,
    Missing,
    Monsters,
    PageTitle,
    Login,
    Logout,
    SignUp,
    Layout,
    Contact,
    Dashboard,
    RequireAuth,
} from "./components";
import "./App.css";

const App = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Layout />}>
                {/* Public routes */}
                <Route
                    path="/"
                    element={
                        <Book
                            contentLeft={<HomeMenu />}
                            contentRight={<PageTitle />}
                        />
                    }
                />
                <Route
                    path="login"
                    element={
                        <Book
                            contentLeft={<Login />}
                            contentRight={<PageTitle />}
                        />
                    }
                />
                <Route
                    path="signup"
                    element={
                        <Book
                            contentLeft={<SignUp />}
                            contentRight={<PageTitle />}
                        />
                    }
                />
                <Route
                    path="contact"
                    element={
                        <Book
                            contentLeft={<Contact />}
                            contentRight={<PageTitle />}
                        />
                    }
                />

                {/* Protected routes */}
                <Route element={<RequireAuth />}>
                    <Route
                        path="dashboard"
                        element={
                            <Book
                                contentLeft={<Dashboard />}
                                contentRight={<PageTitle />}
                            />
                        }
                    />
                    <Route
                        path="monsters"
                        element={
                            <Book
                                contentLeft={<Monsters />}
                                contentRight={<PageTitle />}
                            />
                        }
                    />
                    <Route
                        path="logout"
                        element={
                            <Book
                                contentLeft={<Logout />}
                                contentRight={<PageTitle />}
                            />
                        }
                    />
                    <Route
                        path="about"
                        element={
                            <Book
                                contentLeft={<About />}
                                contentRight={<PageTitle />}
                            />
                        }
                    />
                </Route>

                {/* Catch all */}
                <Route
                    path="*"
                    element={
                        <Book
                            contentLeft={<Missing />}
                            contentRight={<PageTitle />}
                        />
                    }
                />
            </Route>
        </Routes>
    );
};

export default App;
