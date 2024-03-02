import React, { useContext } from "react";
import LightDarkMode from "../LightDarkMode/LightDarkMode";
import TicTacToe from "../TicTacToe/TicTacToe";
import RandomColor from "../RandomColor/RandomColor";
import Accordition from "../Accordition/Accordition";
import TreeView from "../TreeView/TreeView";
import { FeatureFlagsContext } from "./context/Context";
import menus from "../TreeView/Data/Data";
import TabTest from "../CustomTabs/TabTest";

const FeatureFlag = () => {
  const { loading, enableFlags } = useContext(FeatureFlagsContext);

  const componentsToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode />,
    },
    {
      key: "showTicTacToeBoard",
      component: <TicTacToe />,
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColor />,
    },
    {
      key: "showAccordian",
      component: <Accordition />,
    },
    {
      key: "showTreeView",
      component: <TreeView menus={menus} />,
    },

    {
      key: "showTabs",
      component: <TabTest />,
    },
  ];

  function checkEnabledFlags(getCurrentKey) {
    return enableFlags[getCurrentKey];
  }

  if (loading) return <h1>Loading data! Please Wait...</h1>;

  return (
    <>
      <h1>FeatureFlag</h1>
      {componentsToRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null
      )}
    </>
  );
};

export default FeatureFlag;
