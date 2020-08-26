import Link from "next/link";

const Menu = () => {
  return (
    <nav>
      <Link className="nav" href="/">
        <a>Home</a>
      </Link>
      <Link className="nav" href="/about">
        <a>About</a>
      </Link>
      <style jsx>
        {`
          a {
            margin: 10px;
          }
          nav {
            width: 100%;
            text-align: center;
            padding: 20px 0;
            background-color: white;
            opacity: 0.8;
            position: fixed;
          }
        `}
      </style>
    </nav>
  );
};

export default Menu;
