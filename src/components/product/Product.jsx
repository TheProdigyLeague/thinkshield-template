import React, { useState } from "react";
import "./product.css";
import { ToggleButton } from "primereact/togglebutton";
const Product = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div class="flex flex-column justify-content-center bg-2 ">
      <h1 class="text-center text-5xl text-gray-800">
        Bringing to you and your organization our great products
      </h1>
      <div class="flex justify-content-center ">
        <div
          class="flex hidden-img xl:col-7 lg:col-10 md:col-11  justify-content-center glassmorphism-card  p-6 border-round-lg bg-white  relative"
          style={{ overflow: "hidden", height: "69vh" }}
        >
          <div className="col-12 p-4">
            <img
              class="height-img col-12 "
              style={{ height: checked ? "0" : "50vh", transition: "1s" }}
              src="src/assets/images/chart.gif"
            />
            <h3 className="text-3xl text-green-600">
              ThinkVitals Community Health
            </h3>
            <p className="text-2xl text-gray-600">
              ThinkShield is the home of ThinkVitals Community Health product
              suite, that comprises both inpatient acuity and emergency care
              applications, along with a Telehealth option TaViE (Telehealth and
              Virtual Inpatient Essentials) that supports virtual wards, health
              at home, remote monitoring and private executive healthcare
              monitoring. Our solutions can all be customised to fit
              organisation requirements with support options ranging from
              standard business hours to around the clock. We partner with a
              number of recognisable brands in support of wearables technology
              that supports a wide range of lifestyles including those who wish
              not to be seen as dependent but needing that additional support in
              a less obvious way.
            </p>
          </div>

          <ToggleButton
            onLabel=""
            offLabel=""
            offIcon="pi pi-angle-up"
            onIcon="pi pi-times"
            checked={checked}
            onChange={(e) => setChecked(e.value)}
            className="absolute bottom-0 left-50 m-2  border-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
