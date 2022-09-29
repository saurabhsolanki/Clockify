import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineQuestionCircle} from 'react-icons/ai';
import { IoNotificationsOutline} from 'react-icons/io5';
import style from "./DashNav.module.css"

const DashboardNav = ({onOpen}) => {
  return (
    <nav className={style.nav}>
       <div className={style.contanier_btn_logo}>
         <GiHamburgerMenu onClick={()=>onOpen()} size={30} cursor={"pointer"}/>
         <div className={style.logo_cont}>
            <img  src="https://clockify.me/assets/images/clockify-logo.svg" alt="clockify-logo" />
         </div>
       </div>

       <div className={style.contanier_info}>
        <div>Rohit Kumar's workspace</div>
        <button>Upgrade</button>
        <div className={style.vertical_dotted_line}></div>
        <AiOutlineQuestionCircle size={21}/>
        <div className={style.vertical_dotted_line}></div>
        <IoNotificationsOutline size={21}/>
        <div className={style.vertical_dotted_line}></div>
        <div className={style.user}>RK</div>

       </div>
    </nav>
  )
}

export default DashboardNav
