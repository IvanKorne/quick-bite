import Header from "@/components/Header";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container flex-1 py-10 mx-auto">{children}</div>
    </div>
  );
};

export default Layout;
