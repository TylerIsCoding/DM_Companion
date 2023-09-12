import { React, useState } from "react";
import { Routes, Route } from "react-router-dom";
import {
    About,
    Book,
    HomeMenu,
    Missing,
    PageTitle,
    Login,
    SignUp,
    Layout,
    Contact,
    Dashboard,
    RequireAuth,
    PersistLogin,
} from "./components";
import "./App.css";
import FormSearchMonster from "./components/forms/form_search_monster/FormSearchMonster";

const ROLES = {
    User: 2000,
    Guest: 2001,
};

const App = () => {
    const [pageRight, setPageRight] = useState(<PageTitle />);
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
                <Route element={<PersistLogin />}>
                    <Route
                        element={
                            <RequireAuth
                                allowedRoles={[ROLES.User, ROLES.Guest]}
                            />
                        }
                    >
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
                                    contentLeft={
                                        <FormSearchMonster
                                            setPageRight={setPageRight}
                                        />
                                    }
                                    contentRight={pageRight}
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
