import { useNavigate } from "react-router";
import Footer from "../footer";
import style from "./style.module.scss";
import { constRoute } from "@utils/route";
import { Button } from "antd";

const Home = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <Button onClick={() => navigate(constRoute?.incomeTaxReturn)} className={style.homePagePageContainer}>
        Goto Income Tax Return
      </Button>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
