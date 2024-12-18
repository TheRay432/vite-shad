import Home from "@/pages/Home/Home";
import { RouteObject } from "react-router-dom";
import { Search } from "./lazy/lazy";


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
