import "./App.css";
import Accordition from "./components/Accordition/Accordition";
import TabTest from "./components/CustomTabs/TabTest";
import FeatureFlag from "./components/FeatureFlag/FeatureFlag";
import FeatureFlagGlobalState from "./components/FeatureFlag/context/Context";
import GithubProfile from "./components/GithubProfile/GithubProfile";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import LightDarkMode from "./components/LightDarkMode/LightDarkMode";
import LoadMoreData from "./components/LoadMoreData/LoadMoreData";
import ModalTest from "./components/ModalPopUp/ModalTest";
import QRGenerator from "./components/QR-Code/QRGenerator";
import RandomColor from "./components/RandomColor/RandomColor";
import ScrollIndicator from "./components/Scroll-Indicator/ScrollIndicator";
import ScrollToSection from "./components/ScrollTopBottom/ScrollToSection";
import ScrollTopBottom from "./components/ScrollTopBottom/ScrollTopBottom";
import SearchAutoComplete from "./components/SearchAutoComplete/SearchAutoComplete";
import StarRating from "./components/StarRating/StarRating";
import TicTacToe from "./components/TicTacToe/TicTacToe";
import menus from "./components/TreeView/Data/Data";
import TreeView from "./components/TreeView/TreeView";
import UseFetchHookTest from "./components/UseFetch/Test";
import UseOnclickOutsideTest from "./components/UseOutsideClick/Test";
import UseWindowResizeTest from "./components/UseWindowResize/Test";

function App() {
  return (
    <>
      {/* <Accordition />
      <RandomColor />
      <StarRating noOfStars={10} />
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        limit={"10"}
        page={"1"}
      />
      <LoadMoreData /> */}
      {/* <TreeView menus={menus} /> */}
      {/* <QRGenerator /> */}
      {/* <LightDarkMode /> */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}
      {/* <TabTest /> */}
      {/* <ModalTest /> */}
      {/* <GithubProfile /> */}
      {/* <SearchAutoComplete /> */}
      {/* <TicTacToe /> */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlag />
      </FeatureFlagGlobalState> */}
      {/* <UseFetchHookTest /> */}
      {/* <UseOnclickOutsideTest /> */}
      {/* <UseWindowResizeTest /> */}
      {/* <ScrollTopBottom /> */}
      {/* <ScrollToSection /> */}
    </>
  );
}

export default App;
