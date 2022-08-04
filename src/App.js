import { Route, Routes } from "react-router-dom";
import "./App.scss";
import HamburgerMenu from "./components/HamburgerMenu/HamburgerMenu";
import CoverPage from "./CoverPage";
import Work from "./Work";
import BrandedHeader from "./components/BrandedHeader/BrandedHeader";
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
          {work.map((workItem) => {
            return (
              <Route path={`work/${workItem.path}`} element={<WorkPageTemplate title={workItem.title} />} />
            )
          })}
        </Routes>
      </div>
    </div>
  );
}

export default App;
