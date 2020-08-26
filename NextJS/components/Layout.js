import Menu from "./Menu";
import Head from "next/head";
import globalStyles from "../styles/global.js";

const Layout = ({ children, title }) => (
  <main>
    <Head>
      <title>{title || "British."}</title>
    </Head>
    <Menu />
    <div className="content">{children}</div>
    <style jsx global>
      {globalStyles}
    </style>
  </main>
);

export default Layout;
