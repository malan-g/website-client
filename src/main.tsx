import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  About as AboutPage,
  Introduction as IntroductionPage,
  WorkHistory as WorkHistoryPage,
  Education as EducationPage,
  Home as HomePage,
  Projects as ProjectsPage,
  Project as ProjectPage,
  Root as RootPage,
} from "./routes";
import ErrorPage from "./error-page.tsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
        children: [
          {
            path: "/about",
            element: <IntroductionPage />,
          },
          {
            path: "/about/work-history",
            element: <WorkHistoryPage />,
          },
          {
            path: "/about/education",
            element: <EducationPage />,
          },
        ],
      },
      {
        path: "/projects",
        element: <ProjectsPage />,
      },
      {
        path: "/projects/:project",
        element: <ProjectPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
