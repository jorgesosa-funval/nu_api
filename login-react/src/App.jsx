import { Route, Routes } from "react-router";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Forbidden from "./pages/Fobidden";



export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/forbidden" element={<Forbidden />} />
        </Routes>
    )
}
