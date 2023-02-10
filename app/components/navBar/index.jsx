import { Link } from "@remix-run/react";

const NavBar = () => {
  const listPage = [
    {
      id: 1,
      href: "/users",
      text: "List Users",
    },
    { id: 2, href: "/user", text: "Account" },
    { id: 3, href: "/", text: "Home" },
    { id: 4, href: "/concat", text: "Concat" },
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
