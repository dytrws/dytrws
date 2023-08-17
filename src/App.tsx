import "./App.css";
import { NavLink, Routes, Route } from "react-router-dom";
import { ExampleTabs } from "./pages/Tabs/ExampleTabs.tsx";
import { ExampleJSX } from "./pages/JSX/ExampleJSX.tsx";
import { ExampleCheckboxgroup } from "./pages/ExampleCheckboxgroup/ExampleCheckboxgroup.tsx";
import { ExampleFilterWithCheckboxgroup } from "./pages/ExampleFilterWithCheckboxgroup/ExampleFilterWithCheckboxgroup.tsx";
import { ExampleFilterWithTabs } from "./pages/ExampleFilterWithTabs/ExampleFilterWithTabs.tsx";
import { ExampleFilterResults } from "./pages/ExampleFilterResults/ExampleFilterResults.tsx";
import { ExampleFinishedFilter } from "./pages/ExampleFinishedFilter/ExampleFinishedFilter.tsx";
import { ComingSoon } from "./pages/ComingSoon/ComingSoon.tsx";
import { Home } from "./pages/Home/Home.tsx";

export default function App() {
  return (
    <>
      <div className="navbar">
        <div className="spacer navbar__items">
          <details className="chapters">
            <summary>Select a chapter</summary>
            <ul>
              <li>
                <NavLink to="/examples/jsx">
                  🔧 Building the static HTML
                </NavLink>
              </li>
              <li>
                <NavLink to="/examples/filterlist">
                  🔧 Building the filter list
                </NavLink>
              </li>
              <li>
                <NavLink to="/examples/tabs">
                  🔧 Building the Tabs element
                </NavLink>
              </li>
              <li>
                <NavLink to="/examples/filterwithtabs">
                  🔗 Connecting the tabs element with the filterresults
                </NavLink>
              </li>
              <li>
                <NavLink to="/examples/checkboxgroup">
                  🔧 Building the CheckboxGroup element
                </NavLink>
              </li>
              <li>
                <NavLink to="/examples/filterwithcheckboxgroup">
                  🔗 Connecting Checkboxgroup with filter
                </NavLink>
              </li>
              <li>
                <NavLink to="/examples/finishedfilter">
                  ✨ Final product
                </NavLink>
              </li>
            </ul>
          </details>
          <div>
            <a
              className="github"
              href="https://github.com/dytrws/dytrws"
              title="GitHub"
              target="_blank"
            >
              <img src="github.svg" />
            </a>
          </div>
        </div>
      </div>
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
