import { Details } from "./Details";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

// react is a library that has many community created packages and tools
export function NavBar() {
  return (
    <div className="navbar">
      <div className="spacer navbar__items">
        <Details summary="Code examples">
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
              <NavLink to="/examples/componentsstatic">
                🔧 Splitting up into components
              </NavLink>
            </li>
            <li>
              <NavLink to="/examples/componentsdynamic">
                🔧 Component configuration with props
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="/examples/filterlist">
                🔧 Building the filter list
              </NavLink>
            </li> */}
            <li>
              <NavLink to="/examples/tabs">
                🔧 Building the &lt;Tabs&gt; element
              </NavLink>
            </li>
            <li>
              <NavLink to="/examples/filterwithtabs">
                🔗 Connecting &lt;Tabs&gt; the &lt;FilterResults&gt;
              </NavLink>
            </li>
            <li>
              <NavLink to="/examples/checkboxgroup">
                🔧 Building the &lt;Checkboxgroup&gt; element
              </NavLink>
            </li>
            <li>
              <NavLink to="/examples/filterwithcheckboxgroup">
                🔗 Connecting &lt;Checkboxgroup&gt; with &lt;FilterResults&gt;
              </NavLink>
            </li>
            <li>
              <NavLink to="/examples/checkboxgroup">
                🔧 Building the &lt;TextSearch&gt; element
              </NavLink>
            </li>
            <li>
              <NavLink to="/examples/filterwithcheckboxgroup">
                🔗 Connecting &lt;TextSearch&gt; with &lt;FilterResults&gt;
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
            rel="noreferrer"
          >
            <img src="/github.svg" alt="" /> Source code @ GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
