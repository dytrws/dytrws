import { Details } from "./Details";
import { NavLink } from "react-router-dom";
import { MarkupComponent } from "./MarkupComponent";
import "./NavBar.css";

export function NavBar() {
  return (
    <div className="navbar">
      <div className="spacer navbar__items">
        <Details summary="Code examples">
          <ul>
            <li>
              <NavLink to="/examples/finalproduct">
                ✨ Final product (end goal)
              </NavLink>
            </li>
            <li>
              <NavLink to="/examples/buildingstatichtml">
                🔧 Building static HTML
              </NavLink>
            </li>
            <li>
              <NavLink to="/examples/splittingintocomponents">
                🔧 Splitting into components
              </NavLink>
            </li>
            <li>
              <NavLink to="/examples/componentconfiguration">
                🔧 Component configuration (properties)
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="/examples/filterlist">
                🔧 Building the filter list
              </NavLink>
            </li> */}
            <li>
              <NavLink to="/examples/interactivetabs">
                🔧 Interactive <MarkupComponent>Tabs</MarkupComponent>
              </NavLink>
            </li>
            <li>
              <NavLink to="/examples/tabswithfilterresults">
                🔗 Connecting <MarkupComponent>Tabs</MarkupComponent> with{" "}
                <MarkupComponent>FilterResults</MarkupComponent>
              </NavLink>
            </li>
            <li>
              <NavLink to="/examples/interactivecheckboxgroup">
                🔧 Interactive <MarkupComponent>Checkboxgroup</MarkupComponent>
              </NavLink>
            </li>
            <li>
              <NavLink to="/examples/checkboxgroupwithfilterresults">
                🔗 Connecting <MarkupComponent>Checkboxgroup</MarkupComponent>{" "}
                with <MarkupComponent>FilterResults</MarkupComponent>
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="/examples/interactivetextsearch">
                🔧 Interactive <MarkupComponent>TextSearch</MarkupComponent>
              </NavLink>
            </li>
            <li>
              <NavLink to="/examples/textsearchwithfilterresults">
                🔗 Connecting <MarkupComponent>TextSearch</MarkupComponent> with{" "}
                <MarkupComponent>FilterResults</MarkupComponent>
              </NavLink>
            </li> */}
            {/* <li>🚧 WIP: more examples coming soon</li> */}
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
