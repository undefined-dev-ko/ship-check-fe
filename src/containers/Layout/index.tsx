import React from "react";
import DefaultLayout from "../../components/DefaultLayout";

function Layout({ children }: { children: React.ReactNode }) {
  return <DefaultLayout>{children}</DefaultLayout>;
}

export default Layout;
