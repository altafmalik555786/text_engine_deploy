import { observer } from "mobx-react";
import { memo } from "react";
import style from "./style.module.scss";
import { useStore } from "@stores/root-store";
import { useNavigate } from "react-router-dom";

const Login = observer(() => {
  const navigate = useNavigate();
  const {
    user: { onUserLogin, isLoadingLogin },
  } = useStore(null);
  const onLogin = (value) => {
    onUserLogin(value, navigate);
  };

  return (
    <div className={style.mainLoginWrraper}>
      <div style={{ width: 500, margin: 10 }}>Login Page</div>
    </div>
  );
});

export default memo(Login);
