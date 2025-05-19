import { type ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }) => {
  return <main className="pt-[60px]">{children}</main>;
};
