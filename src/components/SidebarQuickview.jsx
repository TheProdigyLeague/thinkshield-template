import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import "primeicons/primeicons.css";

const SidebarQuickview = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="card flex justify-content-center">
      <Button label="Product view  >" onClick={() => setVisible(true)} />
      <Dialog
        className="col-12 card flex justify-content-center"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
      >
        <div className="col-4 card flex justify-content-center">
          <img src="src/image/vest_1.jpg" alt="vest" height={80}></img>
        </div>
        <div className="col-8 card flex justify-content-center">
          sadsafdsafgvsvfdvcx
        </div>
      </Dialog>
    </div>
  );
};

export default SidebarQuickview;
