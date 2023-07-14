import { ROUTES, ROUTES_PREFIX } from "@/constants";
import { RouteItem } from "@/types";
import { Navigate } from "react-router-dom";
import Practice from "./views/Practice";
import Rank from "./views/Rank";

export const routes: RouteItem[] = [
  {
    path: ROUTES_PREFIX,
    component: <Navigate to={ROUTES.PRACTICE} />,
  },
  {
    path: ROUTES.PRACTICE,
    component: <Practice />,
  },
  {
    path: ROUTES.RANK,
    component: <Rank />,
  },
];
