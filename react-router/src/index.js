import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./index.css";
import Users from "./routes/users";
import SingleUser from "./routes/singleUser";
import MainLayout from "./layouts/mainLayout/MainLayout";
import Posts from "./routes/posts";
import SinglePost from "./routes/singlePost";

/* const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/users/:user",
    element: <SingleUser />,
  },
]); */

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route>
        <Route path="/" element={<App />} />
        <Route path="/users" element={<Users />} />
        <Route path="users/:user" element={<SingleUser />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="posts/:postId" element={<SinglePost />} />
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
