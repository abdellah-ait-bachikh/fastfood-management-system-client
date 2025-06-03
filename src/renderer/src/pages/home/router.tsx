import { Route } from "react-router-dom";
import Layout from "../../Layout";
import Home from "./Home";

export const homeRouter = (
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
  </Route>
);
