import { Routes } from "react-router-dom";

import { homeRouter } from "./pages/home/router";

const App = () => {
  return <Routes>{homeRouter}</Routes>;
};
export default App;
