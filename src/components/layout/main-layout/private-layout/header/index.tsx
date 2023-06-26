import { constRoute } from "@utils/route";
import { Dropdown, Menu, Row, Space } from "antd";
import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import useWindowSize from "@utils/hooks/useWindowSize";
import type { MenuProps } from "antd";
import style from "./style.module.scss";
import { observer } from "mobx-react";
import { resetStore, useStore } from "@stores/root-store";
import LogoutIcon from "@assets/icons/log-out.svg";
import { constImages } from "@utils/images";
import { JWT_AUTH_ACCESS_TOKEN } from "@utils/constants/important";
const Header = observer(() => {
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [current, setCurrent] = useState(
    localStorage.getItem("currentPage") || "/home"
  );
  const {
    user: { loadUserInfo, getCurrentUserData },
  } = useStore(null);
  const onLogout = () => {
    resetStore();
    localStorage.removeItem(JWT_AUTH_ACCESS_TOKEN);
    navigate(constRoute.login);
  };
  const data = useWindowSize().width;
  useEffect(() => {
    if (data < 855) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  }, [data]);

  useEffect(() => {
    if (!localStorage.getItem(JWT_AUTH_ACCESS_TOKEN)) {
      navigate(constRoute.login);
    }
  }, []);

  const items: MenuProps["items"] = [
    {
      label: "Home",
      key: "/home",
    },
  ];

  useEffect(() => {
    if (location?.pathname === "/myProjects") setCurrent("/myProjects");
    else if (location?.pathname === "/FAQs") setCurrent("/FAQs");
    else if (location?.pathname === "/getExpertHelp")
      setCurrent("/getExpertHelp");
    else if (location?.pathname === "/home") setCurrent("/home");
    else if (location?.pathname === "/select-function") setCurrent("/home");
    else setCurrent("/");
  }, [location?.pathname, localStorage.getItem("currentPage")]);

  const onClick: MenuProps["onClick"] = (e) => {
    localStorage?.setItem("currentPage", e?.key);
    setCurrent(e.key);
    navigate(e.key);
  };

 

  const dropdownMenu = (
    <div className={style.profileDropDonwMenu}>
      <div className={style.userData}>
        <b style={{ textTransform: "capitalize" }}>{`${
          getCurrentUserData?.firstname || " "
        }  ${getCurrentUserData?.lastname || ""}`}</b>
        <p>{getCurrentUserData?.email || ""}</p>
      </div>

      <Menu>
        <Menu.Item
        >
          Terms
        </Menu.Item>
        <Menu.Item
        
        >
          Privacy Policy
        </Menu.Item>
        <Menu.Item className={style.itemWithImgIcon} onClick={onLogout}>
          <img src={LogoutIcon} alt="logout" />
          Logout
        </Menu.Item>
      </Menu>
    </div>
  );

  const styles = { background: `linear-gradient(to right,#00c5fb, 0%, 100%)` };

  const menuMemoized = useMemo(
    () =>
      !collapsed && (
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode={data > 576 ? "horizontal" : "vertical"}
          className={style.menuHeader}
          inlineCollapsed={false}
          items={items}
        />
      ),
    [collapsed, items]
  );

  return (
    <div className={style.topHeaderBar}>
      <div
        className={style.headerContainer}
        style={{ right: "0px", ...styles }}
      >
        <div className={style.headerMenuContainer}>
          {(data < 855 || collapsed) && (
            <MenuOutlined
              onClick={() => setCollapsed(!collapsed)}
              className={style.menuOutlinedIcon}
            />
          )}
          <Link
            className={style.welcomeText}
            to={constRoute?.home}
            onClick={() => {
              setCurrent("/home");
            }}
          >
            <img src={"logo"} alt="logo" />
          </Link>
        </div>

        {menuMemoized}

        <ul className={style.rightMenuHeader}>
          <li className={style.userProfileDropDownContainer}>
            <Row className={style.userProfileDropDownWrapper}>
              <Dropdown overlay={dropdownMenu} trigger={["click"]}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space className={style.spaceUserProfile}>
                    <span className={style.profileUserNameText}>
                      Hi,{" "}
                      <span style={{ textTransform: "capitalize" }}>
                        {" "}
                        {getCurrentUserData?.firstname || " "}
                      </span>
                    </span>
                    <span className="mobile">
                      <i className="fa fa-ellipsis-v" />
                    </span>
                    <img
                      style={{ height: 26, width: 26 }}
                      src={constImages.dropDownIcon}
                      alt=""
                    />
                  </Space>
                </a>
              </Dropdown>
            </Row>
          </li>
        </ul>
      </div>
    </div>
  );
});

export default Header;
