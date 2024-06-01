import { ReactNode } from "react";
import { Header } from "../Header/Header";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="container">
      <Header />
      {children}
    </div>
  );
};
