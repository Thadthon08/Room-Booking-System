import {createBrowserRouter} from 'react-router-dom';
import HomePage from '../pages/home-page';
import AboutPage from '../pages/about-page.tsx';
import LoginPage from '../pages/login-page';
import  {routeDashboard} from './dashboard';
import Footer from '../components/footer';

export const router = createBrowserRouter([
  {
    path:"/",
    element:<HomePage />,
  },
  {
    path:"/about",
    element:<AboutPage />,
  },
  {
    path:"/login",
    element:<LoginPage />,
  },
  ...routeDashboard,
]);