import { createBrowserRouter } from "react-router-dom";

import { ROUTES } from "@/shared/model/routes";

import { App } from "./app";
import { Providers } from "./providers";

export const router = createBrowserRouter([
  {
    element: (
      <Providers>
        <App />
      </Providers>
    ),
    children: [
      {
        path: ROUTES.HOME,
        lazy: () => import("@/features/home/home.page"),
      },
      {
        path: ROUTES.PROJECTS,
        lazy: () => import("@/features/projects/projects.page"),
      },
      {
        path: ROUTES.ESTIMATES,
        lazy: () => import("@/features/estimates/estimates.page"),
      },
    ],
  },
]);
