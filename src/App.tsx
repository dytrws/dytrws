import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar.tsx";
import { Slides } from "./pages/Slides/Slides.tsx";
import { BuildingStaticHTML } from "./pages/examples/BuildingStaticHTML/BuildingStaticHTML.tsx";
import { SplittingIntoComponents } from "./pages/examples/SplittingIntoComponents/SplittingIntoComponents.tsx";
import { ComponentConfiguration } from "./pages/examples/ComponentConfiguration/ComponentConfiguration.tsx";
import { InteractiveTabs } from "./pages/examples/InteractiveTabs/InteractiveTabs.tsx";
import { InteractiveCheckboxgroup } from "./pages/examples/InteractiveCheckboxgroup/InteractiveCheckboxgroup.tsx";
import { ConnectingTabsWithFilterResults } from "./pages/examples/ConnectingTabsWithFilterResults/ConnectingTabsWithFilterResults.tsx";
import { ConnectingCheckboxgroupWithFilterResults } from "./pages/examples/ConnectingCheckboxgroupWithFilterResults/ConnectingCheckboxgroupWithFilterResults.tsx";
import { BuildingFilterResults } from "./pages/examples/BuildingFilterResults/BuildingFilterResults.tsx";
import { FinalProduct } from "./pages/examples/FinalProduct/FinalProduct.tsx";

// import { Home } from "./pages/examples/Home/Home.tsx";
import "./App.css";
import "./Filter.css";

export function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/slides/" element={<Slides />} />

        <Route
          path="/examples/buildingstatichtml/"
          element={
            <div className="spacer">
              <BuildingStaticHTML />
            </div>
          }
        />
        <Route
          path="/examples/splittingintocomponents/"
          element={
            <div className="spacer">
              <SplittingIntoComponents />
            </div>
          }
        />
        <Route
          path="/examples/componentconfiguration/"
          element={
            <div className="spacer">
              <ComponentConfiguration />
            </div>
          }
        />
        <Route
          path="/examples/filterresults/"
          element={
            <div className="spacer">
              <BuildingFilterResults />
            </div>
          }
        />
        <Route
          path="/examples/interactivetabs/"
          element={
            <div className="spacer">
              <InteractiveTabs />
            </div>
          }
        />
        <Route
          path="/examples/tabswithfilterresults/"
          element={
            <div className="spacer">
              <ConnectingTabsWithFilterResults />
            </div>
          }
        />
        <Route
          path="/examples/interactivecheckboxgroup/"
          element={
            <div className="spacer">
              <InteractiveCheckboxgroup />
            </div>
          }
        />
        <Route
          path="/examples/checkboxgroupwithfilterresults/"
          element={<ConnectingCheckboxgroupWithFilterResults />}
        />
        <Route
          path="/examples/finalproduct/"
          element={
            <div className="spacer">
              <FinalProduct />
            </div>
          }
        />
        <Route
          path="/"
          element={
            <div className="spacer">
              <FinalProduct />
            </div>
          }
        />
        <Route
          path="*"
          element={
            <div className="spacer">
              <FinalProduct />
            </div>
          }
        />
      </Routes>
    </>
  );
}
