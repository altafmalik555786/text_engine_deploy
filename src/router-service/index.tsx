import Login from "@components/layout/main-layout/public-layout/login";
import Home from "@components/pages/home";
import IncomeTaxReturn from "@components/pages/income-tax-return";
import IncomeTaxReturnPageTwo from "@components/pages/income-tax-return-page-two";
import { constRoute } from "@utils/route";
import { memo } from "react";
import { Route, Routes } from "react-router-dom";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path={constRoute?.login} element={<Login />} />        
        <Route path={constRoute?.home} element={<Home />} />
        <Route path={constRoute?.incomeTaxReturn} element={<IncomeTaxReturn />} />
        <Route path={constRoute?.incomeTaxReturnPageTwo} element={<IncomeTaxReturnPageTwo />} />
      </Routes>
    </>
  );
};
export default memo(Routing);
