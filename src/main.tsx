import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import Test from "./zendesk";
import Theme1 from "./theme1";
import Theme2 from "./theme2";
import Settings from "./settings";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const DOMAIN = process.env.REACT_APP_AUTH0_DOMAIN
// const CLIENT = process.env.REACT_APP_AUTH0_CLIENT_ID

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/zendesk",
    element: <Test />,
  },
  {
    path: "/theme1",
    element: <Theme1 />,
  },
  {
    path: "/theme2",
    element: <Theme2 />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
]);

// ReactDOM.createRoot(document.getElementById("root")).render();

ReactDOM.render(
  <Auth0Provider
    domain="dev-1zuludq6ny2drvi2.us.auth0.com"
    clientId="2d5ln5XLwurN01rU9azLKZkazye4inpf"
    authorizationParams={{
      redirect_uri: "http://127.0.0.1:5173/zendesk",
    }}
  >
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Auth0Provider>,
  document.getElementById("root")
);
