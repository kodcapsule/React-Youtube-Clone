import React from "react";

// COMPONENTS

import Header from "./components/header/Header";
import AsideMenu from "./components/sideMenu/SideMenu";
import MaintContent from "./components/mainContent/MaintContent";

const App = () => {
  return (
    <>
      <Header />
      <main className="container main_container">
        <AsideMenu />
        <MaintContent />
      </main>
    </>
  );
};

export default App;
