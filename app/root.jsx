import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import NavBar from "./components/navBar";
import Styles from "./style/navBar.css";

export const meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
      <NavBar/>
        <Outlet />

        <ScrollRestoration />

        <Scripts />

        <LiveReload />
        
      </body>
    </html>
  );
}
export function links() {
  return [
    { rel: "stylesheet", href: Styles },

  ];
}