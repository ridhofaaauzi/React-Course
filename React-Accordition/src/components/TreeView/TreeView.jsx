import React from "react";
import "./TreeView.css";
import MenuList from "./Menu/MenuList";

const TreeView = ({ menus = [] }) => {
  return (
    <>
      <div className="tree-view-container">
        <MenuList list={menus} />
      </div>
    </>
  );
};

export default TreeView;
