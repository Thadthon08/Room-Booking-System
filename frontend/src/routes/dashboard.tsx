import { RouteObject, redirect } from "react-router-dom";
import DLayout from "../pages/dashboard/dashboard-layout";
import DHome from "../pages/dashboard/dashborad-home";
import DRoom from "../pages/dashboard/dashboard-room";
import { getProfile } from "../services/auth.service";

export const routeDashboard: RouteObject[] = [
    {
    path:"/dashboard",
    element:<DLayout />,
    loader: async() => {
      const response = await getProfile()
      if (!response?.data.data.user) {
        throw redirect('/login')
      }

      return response.data.data.user;
    },
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