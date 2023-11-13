import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {

  return (
    <div className="w-full h-screen">
      {children}
    </div>
  );
}

export default Layout;
