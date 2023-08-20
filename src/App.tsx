import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar.tsx";
import { Presentation } from "./pages/Presentation/Presentation.tsx";
import { ExampleTabs } from "./pages/ExampleTabs/ExampleTabs.tsx";
import { ExampleJSX } from "./pages/ExampleJSX/ExampleJSX.tsx";
import { ExampleComponentsStatic } from "./pages/ExampleComponentsStatic/ExampleComponentsStatic.tsx";
import { ExampleComponentsDynamic } from "./pages/ExampleComponentsDynamic/ExampleComponentsDynamic.tsx";
import { ExampleCheckboxgroup } from "./pages/ExampleCheckboxgroup/ExampleCheckboxgroup.tsx";
import { ExampleFilterWithCheckboxgroup } from "./pages/ExampleFilterWithCheckboxgroup/ExampleFilterWithCheckboxgroup.tsx";
import { ExampleFilterWithTabs } from "./pages/ExampleFilterWithTabs/ExampleFilterWithTabs.tsx";
import { ExampleFilterResults } from "./pages/ExampleFilterResults/ExampleFilterResults.tsx";
import { ExampleFinishedFilter } from "./pages/ExampleFinishedFilter/ExampleFinishedFilter.tsx";
import { ComingSoon } from "./pages/ComingSoon/ComingSoon.tsx";
// import { Home } from "./pages/Home/Home.tsx";
import "./App.css";
import "./Filter.css";

export function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/slides/" element={<Presentation />} />

        <Route
          path="/examples/jsx/"
          element={
            <div className="spacer">
              <ExampleJSX />
            </div>
          }
        />
        <Route
          path="/examples/componentsstatic/"
          element={
            <div className="spacer">
              <ExampleComponentsStatic />
            </div>
          }
        />
        <Route
          path="/examples/componentsdynamic/"
          element={
            <div className="spacer">
              <ExampleComponentsDynamic />
            </div>
          }
        />
        <Route
          path="/examples/filterlist/"
          element={
            <div className="spacer">
              <ExampleFilterResults />
            </div>
          }
        />
        <Route
          path="/examples/tabs/"
          element={
            <div className="spacer">
              <ExampleTabs />
            </div>
          }
        />
        <Route
          path="/examples/filterwithtabs/"
          element={
            <div className="spacer">
              <ExampleFilterWithTabs />
            </div>
          }
        />
        <Route
          path="/examples/checkboxgroup/"
          element={
            <div className="spacer">
              <ExampleCheckboxgroup />
            </div>
          }
        />
        <Route
          path="/examples/filterwithcheckboxgroup/"
          element={<ExampleFilterWithCheckboxgroup />}
        />
        <Route path="/examples/comingsoon/" element={<ComingSoon />} />
        <Route
          path="/examples/finishedfilter/"
          element={
            <div className="spacer">
              <ExampleFinishedFilter />
            </div>
          }
        />
        <Route
          path="/"
          element={
            <div className="spacer">
              <ExampleFinishedFilter />
            </div>
          }
        />
        <Route
          path="*"
          element={
            <div className="spacer">
              <ExampleFinishedFilter />
            </div>
          }
        />
      </Routes>
    </>
  );
}
