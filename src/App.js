import { Route, Routes } from "react-router-dom";
import "./App.scss";
import HamburgerMenu from "./components/navigation/HamburgerMenu/HamburgerMenu";
import CoverPage from "./CoverPage";
import Work from "./Work";
import BrandedHeader from "./components/navigation/BrandedHeader/BrandedHeader";
import WorkPageTemplate from "./templates/WorkPageTemplate";

import work from "./content/work";


function App() {
  return (
    <div className="App">
      <HamburgerMenu />
      <BrandedHeader />
      <div className="content">
        <Routes>
          <Route path="/" element={<CoverPage />} />
          <Route path="work/*" element={<Work />} />
          {work.map((workItem, index) => {
            return (
              <Route path={`work/${workItem.path}`} element={<WorkPageTemplate title={workItem.title} index={index} />} />
            )
          })}
        </Routes>
      </div>
    </div>
  );
}

export default App;
