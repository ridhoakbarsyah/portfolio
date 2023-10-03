import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <main className="px-80">
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
