import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar.tsx";
import { ExampleTabs } from "./pages/Tabs/ExampleTabs.tsx";
import { ExampleJSX } from "./pages/JSX/ExampleJSX.tsx";
import { ExampleCheckboxgroup } from "./pages/ExampleCheckboxgroup/ExampleCheckboxgroup.tsx";
import { ExampleFilterWithCheckboxgroup } from "./pages/ExampleFilterWithCheckboxgroup/ExampleFilterWithCheckboxgroup.tsx";
import { ExampleFilterWithTabs } from "./pages/ExampleFilterWithTabs/ExampleFilterWithTabs.tsx";
import { ExampleFilterResults } from "./pages/ExampleFilterResults/ExampleFilterResults.tsx";
import { ExampleFinishedFilter } from "./pages/ExampleFinishedFilter/ExampleFinishedFilter.tsx";
import { ComingSoon } from "./pages/ComingSoon/ComingSoon.tsx";
// import { Home } from "./pages/Home/Home.tsx";
import "./App.css";

export function App() {
  return (
    <>
      <NavBar />
      <div className="spacer">
        <Routes>
          <Route path="/" element={<ExampleFinishedFilter />} />
          <Route path="/examples/jsx/" element={<ExampleJSX />} />
          <Route
            path="/examples/filterlist/"
            element={<ExampleFilterResults />}
          />
          <Route path="/examples/tabs/" element={<ExampleTabs />} />
          <Route
            path="/examples/filterwithtabs/"
            element={<ExampleFilterWithTabs />}
          />
          <Route
            path="/examples/checkboxgroup/"
            element={<ExampleCheckboxgroup />}
          />
          <Route
            path="/examples/filterwithcheckboxgroup/"
            element={<ExampleFilterWithCheckboxgroup />}
          />
          <Route path="/examples/comingsoon/" element={<ComingSoon />} />
          <Route
            path="/examples/finishedfilter/"
            element={<ExampleFinishedFilter />}
          />
          <Route path="*" element={<ExampleFinishedFilter />} />
        </Routes>
      </div>
    </>
  );
}
