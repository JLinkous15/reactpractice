import { Outlet, Route, Routes } from "react-router-dom"
import { PracticeHooks } from "../Practice/PracticeHooks"
import { UseReducer } from "../UseReducer/UseReducer"
import { UseRef } from "../UseRef/UseRef"

export const ApplicationViews = () => {
    return <Routes>
        <Route path="/" element={
            <Outlet/>
        }>
            <Route path="/" element={<PracticeHooks />} />
            <Route path="/useref" element={<UseRef />} />
            <Route path="/usereducer" element={<UseReducer />} />
        </Route>
    </Routes>
}