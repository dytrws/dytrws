import { Details } from "./Details";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export function NavBar() {
  return (
    <div className="navbar">
      <div className="spacer navbar__items">
        <Details summary="Select a chapter">
          <ul>
            <li>
              <NavLink to="/examples/finishedfilter">
                ✨ Final product (end goal)
              </NavLink>
            </li>
            <li>
              <NavLink to="/examples/jsx">🔧 Building the static HTML</NavLink>
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
          </ul>
        </Details>
        <div className="navbar__links">
          <NavLink to="/slides">📄 Slides</NavLink>
        </div>
        <div>
          <a
            className="github"
            href="https://github.com/dytrws/dytrws"
            target="_blank"
          >
            <img src="/github.svg" /> Source code @ GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
