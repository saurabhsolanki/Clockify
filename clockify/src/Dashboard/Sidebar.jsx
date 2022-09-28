import { NavLink } from "react-router-dom";
import {AiOutlineTeam } from "react-icons/ai";
import { VscCalendar } from "react-icons/vsc";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineWatchLater } from "react-icons/md";
import { BsBarChart,BsTag } from "react-icons/bs";
import {HiOutlineUserGroup ,HiOutlineUserCircle} from "react-icons/hi";
import { MdOutlineDashboard} from "react-icons/md";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import "./Sidebar.css"
import DashboardNav from "./DashboardNav";
const routes = [
  {
    path: "/tracker",
    name: "Time Tracker",
    icon: <MdOutlineWatchLater />,
  },
  {
    path: "/calendar",
    name: "CALENDAR",
    icon: <VscCalendar />,
  },
  {
  
    name: "ANALYZE",
    icon: "",
  },
  {
    path: "/dashboard",
    name: "DASHBOARD",
    icon: <MdOutlineDashboard />,
  },
  {
    path: "/reports",
    name: "REPORTS",
    icon: <BsBarChart />,
  },
  {
 
    name: "MANAGE",
    icon: "",
  },
  {
    path: "/projects",
    name: "PROJECTS",
    icon: <HiOutlineUserGroup />,
  },
  
  {
    path: "/team",
    name: "TEAM",
    icon: <AiOutlineTeam/>,
  },
  
  {
    path: "/client",
    name: "CLIENT",
    icon: <HiOutlineUserCircle/>,
  },
  
  {
    path: "/tag",
    name: "TAGS",
    icon: <BsTag/>,
  },
  {
    path: "/settings",
    name: "SETTINGS",
    icon: <IoSettingsOutline/>,
  },
  
  // {
  //   path: "/file-manager",
  //   name: "File Manager",
  //   icon: <AiTwotoneFileExclamation />,
  //   subRoutes: [
  //     {
  //       path: "/settings/profile",
  //       name: "Profile ",
  //       icon: <FaUser />,
  //     },
  //     {
  //       path: "/settings/2fa",
  //       name: "2FA",
  //       icon: <FaLock />,
  //     },
  //     {
  //       path: "/settings/billing",
  //       name: "Billing",
  //       icon: <FaMoneyBill />,
  //     },
  //   ],
  // },
  // {
  //   path: "/order",
  //   name: "Order",
  //   icon: <BsCartCheck />,
  // },
  // {
  //   path: "/settings",
  //   name: "Settings",
  //   icon: <BiCog />,
  //   exact: true,
  //   subRoutes: [
  //     {
  //       path: "/settings/profile",
  //       name: "Profile ",
  //       icon: <FaUser />,
  //     },
  //     {
  //       path: "/settings/2fa",
  //       name: "2FA",
  //       icon: <FaLock />,
  //     },
  //     {
  //       path: "/settings/billing",
  //       name: "Billing",
  //       icon: <FaMoneyBill />,
  //     },
  //   ],
  // },
  // {
  //   path: "/saved",
  //   name: "Saved",
  //   icon: <AiFillHeart />,
  // },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
    <DashboardNav onOpen={toggle} />
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          
         
          {/* <div className="search">
            <div className="search_icon">
              <MdOutlineWatchLater />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div> */}


          <section className="routes">
            {routes.map((route, index) => {
              // if (route.subRoutes) {
              //   return (
              //     <SidebarMenu
              //       setIsOpen={setIsOpen}
              //       route={route}
              //       showAnimation={showAnimation}
              //       isOpen={isOpen}
              //     />
              //   );
              // }

              return (
                <NavLink
                  to={route?.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
          {/* <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  ANALYZE
                </motion.h1>
              )}
            </AnimatePresence>
          </div> */}
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;