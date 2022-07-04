import React, { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from '../routes/Home'
import Auth from '../routes/Home'

const Page = () => {
    const [IsLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <Router>
            <Routes>
                {IsLoggedIn ? (
                    <>
                        <Route exact path="/" element={<Home />} />
                    </>
                ) : (
                    <Route exact path="/"element={<Auth />} />
                )}
            </Routes>
        </Router>
    )
}
export default Page;