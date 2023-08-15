import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

// https://www.youtube.com/watch?v=Ul3y1LXxzdU
// memory router only for testing
// hash router good for static sites
// browser router good for dynamic sites 99% of the time
// https://reactrouter.com/web/guides/quick-start
// https://reactrouter.com/web/example/basic
// https://reactrouter.com/web/api/Link
// static router only for server side rendering
// native router for react native

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
