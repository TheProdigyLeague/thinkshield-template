import React, { useRef } from "react";
import "./mega-menu.css";

const CustomMegaMenu = ({ navItems = [] }) => {
  const activeKeyRef = useRef(null);

  const onHoverMenuItem = (id) => {
    if (!id) {
      return;
    }

    // remove all existing active menu item
    const activeMenuItems = document.querySelectorAll(".p-menuitem-active");
    if (!!activeMenuItems && activeMenuItems.length > 0) {
      activeMenuItems.forEach((item) => {
        item.classList.remove("p-menuitem-active");
      });
    }

    const menuItem = document.getElementById(`menuItem-${id}`);
    if (!!menuItem) {
      menuItem.classList.add("p-menuitem-active");
    }
  };

  const onLeaveMenuItem = (id) => {
    if (!id) {
      return;
    }

    const menuItem = document.getElementById(`menuItem-${id}`);
    if (!!menuItem) {
      menuItem.classList.remove("p-menuitem-active");
    }
  };

  const renderMenuItem = ({
    key,
    label = "",
    icon,
    link = "#",
    items = [],
  }) => {
    return (
      <li
        id={`menuItem-${key}`}
        key={key}
        onMouseEnter={() => onHoverMenuItem(key)}
        onMouseLeave={() => onLeaveMenuItem(key)}
        className="p-menuitem"
        role="none"
      >
        <a
          href={link}
          className="p-menuitem-link hover:text-white"
          role="menuitem"
          aria-haspopup="true"
        >
          {label}
        </a>
        {items?.length > 0 && renderSubMenu(items)}
      </li>
    );
  };

  const renderSubMenu = (items = []) => {
    if (!items || !Array.isArray(items) || items?.length < 1) {
      return;
    }

    return (
      <div className="p-megamenu-panel">
        <div className="p-megamenu-grid">
          {items?.map((childItem, idx) => (
            <div key={childItem.key} className="p-megamenu-col-6">
              <ul className="p-megamenu-submenu" role="menu">
                <li className="p-megamenu-submenu-header" role="presentation">
                  {childItem?.label}
                </li>

                {childItem?.items?.map((subChildItem, idx) => (
                  <li className="p-menuitem" role="none">
                    <a href="#" className="p-menuitem-link" role="menuitem">
                      <span className="p-menuitem-text">
                        {subChildItem.label}
                      </span>
                      <span
                        role="presentation"
                        className="p-ink"
                        style={{ height: "0px", width: "0px" }}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  };
  return (
    <div className="p-megamenu p-component p-megamenu-horizontal no-bg">
      <ul className="p-megamenu-root-list" role="menubar">
        {navItems?.length > 0 &&
          navItems?.map((item, idx) => renderMenuItem({ ...item, key: idx }))}
      </ul>
    </div>
  );
};

export default CustomMegaMenu;
