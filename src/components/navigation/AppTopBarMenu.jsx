import React from "react";
import { navItems } from "./AppTopBarConstants";
import CustomMegaMenu from "./CustomMegaMenu";

const AppTopBarMenu = () => {
  return (
    <div>
      <CustomMegaMenu navItems={navItems} />
    </div>
  );
};

export default AppTopBarMenu;
