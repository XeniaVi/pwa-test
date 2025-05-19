import "react-router-dom";

export const ROUTES = {
  HOME: "/",
  ESTIMATES: "/estimates",
  PROJECTS: "/projects",
} as const;

export type PathParams = {
  [ROUTES.PROJECTS]: {
    projectId: string;
  };
  [ROUTES.ESTIMATES]: {
    estimateId: string;
  };
};

declare module "react-router-dom" {
  interface Register {
    params: PathParams;
  }
}
