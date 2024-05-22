import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Planes from "../pages/planes";
import Blog from "../pages/blog";
import SharedLayout from "./sharedlayout";


export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SharedLayout/>}>
                    <Route path="" element={<Home />} />
                    <Route path="planes" element={<Planes />} />
                    <Route path="blog" element={<Blog />} />
               
                <Route path="*" element={<h1>Not Found</h1>} />
                </Route>

            </Routes>
        </BrowserRouter>
    )

}