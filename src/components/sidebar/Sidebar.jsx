import React from "react";
import "./sidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { sidebarItems } from "../../utils/helpers";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarPadding">
        {sidebarItems.map((itemsLinks) => {
          return (
            <>
              {itemsLinks.id !== 3 && (
                <Link
                  to={`/${itemsLinks.name}`}
                  className="containerGeneral" 
                  key={itemsLinks.id}
                >
                  <div className={`${itemsLinks.name} logoLanguage`}>
                    <FontAwesomeIcon
                      icon={itemsLinks.icon}
                      className={"fa-2x"}
                    />
                  </div>
                  <div className="textSidebar">
                    <p>{itemsLinks.title}</p>
                  </div>
                </Link>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
