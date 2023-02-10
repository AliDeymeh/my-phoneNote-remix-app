import { Link } from "@remix-run/react";

const NavBar = () => {
  const listPage = [
    { id: 3, href: "/", text: "Home" },
    { id: 4, href: "/concat", text: "Add Concat" },
  ];
  return (
    <nav className="navBar">
      <ul className="navBarUl">
        {listPage.map((e) => {
          return (
            <li key={e.id}>
              <Link to={e.href}>{e.text}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
