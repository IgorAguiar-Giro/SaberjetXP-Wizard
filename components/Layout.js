// components/Layout.js
import { useEffect, React } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js";
    script.type = "module";
    document.body.appendChild(script);

    const nomoduleScript = document.createElement("script");
    nomoduleScript.src =
      "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js";
    nomoduleScript.setAttribute("nomodule", "");
    document.body.appendChild(nomoduleScript);
  }, []);

  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
