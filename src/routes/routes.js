import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/index";
import Blogs from "../pages/Blogs/index";
import Blog from "../pages/Blog";
import ReadingHistory from "../pages/ReadingHistory";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "blogs/:id",
        element: <Blog />,
      },
      {
        path: "reading-history",
        element: <ReadingHistory/>,
      },
    ],
  },
]);

export default routes;
