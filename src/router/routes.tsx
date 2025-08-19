import type { RouteObject } from "react-router-dom";
import LandingPage from "../pages";
import HomePage from "../pages/home";
import { CurationDetails } from "../pages/curation/details";

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <LandingPage />
    },
    {
        path: "/curations",
        element: <HomePage />
    },
    {
        path: "/curation/:id",
        element: <CurationDetails />
    }
]