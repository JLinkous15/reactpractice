import { Outlet, Route, Routes } from "react-router-dom"
import { NavBar } from "../NavBar/NavBar"
import { PracticeHooks } from "../Practice/PracticeHooks"
import { UseRef } from "../UseRef/UseRef"

export const ApplicationViews = () => {
    return <Routes>
        <Route path="/" element={
            <Outlet/>
        }>
            <Route path="/" element={<PracticeHooks />} />
            <Route path="/useref" element={<UseRef />} />
        </Route>
    </Routes>
}