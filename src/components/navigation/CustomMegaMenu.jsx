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
          className="p-menuitem-link"
          role="menuitem"
          aria-haspopup="true"
        >
          <span className="p-menuitem-icon pi pi-fw pi-calendar" />
          <span className="p-menuitem-text px-3">{label}</span>
          {items?.length > 0 && (
            <React.Fragment>
              <svg
                width={14}
                height={14}
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="p-icon p-submenu-icon"
                aria-hidden="true"
              >
                <path
                  d="M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z"
                  fill="currentColor"
                />
              </svg>
              <span
                role="presentation"
                className="p-ink"
                style={{ height: "112.53125px", width: "112.53125px" }}
              />
            </React.Fragment>
          )}
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
      <a href="#" role="button" tabIndex={0} className="p-megamenu-button">
        <svg
          width={14}
          height={14}
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="p-icon"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.3226 3.6129H0.677419C0.497757 3.6129 0.325452 3.54152 0.198411 3.41448C0.0713707 3.28744 0 3.11514 0 2.93548C0 2.75581 0.0713707 2.58351 0.198411 2.45647C0.325452 2.32943 0.497757 2.25806 0.677419 2.25806H13.3226C13.5022 2.25806 13.6745 2.32943 13.8016 2.45647C13.9286 2.58351 14 2.75581 14 2.93548C14 3.11514 13.9286 3.28744 13.8016 3.41448C13.6745 3.54152 13.5022 3.6129 13.3226 3.6129ZM13.3226 7.67741H0.677419C0.497757 7.67741 0.325452 7.60604 0.198411 7.479C0.0713707 7.35196 0 7.17965 0 6.99999C0 6.82033 0.0713707 6.64802 0.198411 6.52098C0.325452 6.39394 0.497757 6.32257 0.677419 6.32257H13.3226C13.5022 6.32257 13.6745 6.39394 13.8016 6.52098C13.9286 6.64802 14 6.82033 14 6.99999C14 7.17965 13.9286 7.35196 13.8016 7.479C13.6745 7.60604 13.5022 7.67741 13.3226 7.67741ZM0.677419 11.7419H13.3226C13.5022 11.7419 13.6745 11.6706 13.8016 11.5435C13.9286 11.4165 14 11.2442 14 11.0645C14 10.8848 13.9286 10.7125 13.8016 10.5855C13.6745 10.4585 13.5022 10.3871 13.3226 10.3871H0.677419C0.497757 10.3871 0.325452 10.4585 0.198411 10.5855C0.0713707 10.7125 0 10.8848 0 11.0645C0 11.2442 0.0713707 11.4165 0.198411 11.5435C0.325452 11.6706 0.497757 11.7419 0.677419 11.7419Z"
            fill="currentColor"
          />
        </svg>
      </a>
      <ul className="p-megamenu-root-list" role="menubar">
        {navItems?.length > 0 &&
          navItems?.map((item, idx) => renderMenuItem({ ...item, key: idx }))}
      </ul>
    </div>
  );
};

export default CustomMegaMenu;
