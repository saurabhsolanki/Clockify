import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";
import style from "./DashNav.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../store/Auth/auth.action";
import { useNavigate } from "react-router-dom";

const DashboardNav = ({ onOpen }) => {
  const user = useSelector((store) => store.auth.user.email);
  // console.log(user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const LOGOUT = () => {
    dispatch(Logout());
    // }
    navigate("/");
  };

  return (
    <nav className={style.nav}>
      <div className={style.contanier_btn_logo}>
        <GiHamburgerMenu
          onClick={() => onOpen()}
          size={30}
          cursor={"pointer"}
        />
        <div className={style.logo_cont}>
          <img
            src="https://clockify.me/assets/images/clockify-logo.svg"
            alt="clockify-logo"
          />
        </div>
      </div>

      <div className={style.contanier_info}>
        <div>{user}</div>
        <button>Upgrade</button>
        <div className={style.vertical_dotted_line}></div>
        <AiOutlineQuestionCircle size={21} />
        <div className={style.vertical_dotted_line}></div>
        <IoNotificationsOutline size={21} />
        <div className={style.vertical_dotted_line}></div>
        <div className={style.user} onClick={LOGOUT}>
          LogOut
        </div>
      </div>
    </nav>
  );
};

export default DashboardNav;
