import { createBrowserRouter as Router } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Coverage from "../pages/Coverage";
import Services from "../pages/Services";
import Privacy from "../pages/Privacy";

const routes = Router([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/coverage",
    element: <Coverage />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/privacy",
    element: <Privacy />,
  },
]);

export default routes;
