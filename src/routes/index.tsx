import Home from "@/pages/Home/Home";
import React from "react";
import { RouteObject } from "react-router-dom";
const Search = React.lazy(() => import("@/pages/Search/Search"));


const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/search",
    element: <Search />,
  }
];

export default routes;
