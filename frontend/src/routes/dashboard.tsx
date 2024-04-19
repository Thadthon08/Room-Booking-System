import { RouteObject } from "react-router-dom";
import DLayout from "../pages/dashboard/dashboard-layout";
import DHome from "../pages/dashboard/dashborad-home";
import DRoom from "../pages/dashboard/dashboard-room";

export const routeDashboard: RouteObject[] = [
    {
    path:"/dashboard",
    element:<DLayout />,
    children:[   //Outlet
    {
      path:"",   //localhost:4000/dashboard
      element:<DHome />
    },
    {
      path:"room", //localhost:4000/dashboard/room
      element:<DRoom />
    }
  ]
  },
]