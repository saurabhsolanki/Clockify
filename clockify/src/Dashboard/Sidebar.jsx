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
import style from "./Sidebar.module.css"
import DashboardNav from "./DashboardNav";


const SideBar = ({isOpen}) => {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggle = () => setIsOpen(!isOpen);
 
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
      <div className={style.main_container}>
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",
            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={style.sidebar }
        >
          <section className={style.routes}>
          <NavLink
                  to={"/dashboardpanel/timetracker"}
                  className={({ isActive }) =>
                  isActive ? style.active: style.link
                }
                 
                >
                  <div className={style.icon}><MdOutlineWatchLater /></div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className={style.link_text}
                      >
                       Time Tracker
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
                
                <NavLink
                  to={"/dashboardpanel/calender"}
                  className={({ isActive }) =>
                  isActive ? style.active:   style.link
                }
                >
                  <div className={style.icon}><VscCalendar /></div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className={style.link_text}
                      >
                       CALENDAR
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className={style.link_text}
                      >
                       ANALYZE
                      </motion.div>
                    )}
                  </AnimatePresence>
               
                <NavLink
                  to={ "/dashboardpanel/dashboard"}
                  className={({ isActive }) =>
                  isActive ? style.active: style.link
                }
                >
                  <div className={style.icon}><MdOutlineDashboard /></div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className={style.link_text}
                      >
                      DASHBOARD
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>

                <NavLink
                  to={"/dashboardpanel/reports"}
                  className={({ isActive }) =>
                  isActive ? style.active: style.link
                }
                >
                  <div className={style.icon}><BsBarChart /></div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className={style.link_text}
                      >
                       REPORTS
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
       
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className={style.link_text}
                      >
                       MANAGE
                      </motion.div>
                    )}
                  </AnimatePresence>
               
                <NavLink
                  to={"/dashboardpanel/projects"}
                  className={({ isActive }) =>
                  isActive ? style.active: style.link
                }
                >
                  <div className={style.icon}><HiOutlineUserGroup /></div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className={style.link_text}
                      >
                        PROJECTS
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>

                <NavLink
                  to={"/dashboardpanel/teams"}
                  className={({ isActive }) =>
                  isActive ? style.active: style.link
                }
                >
                  <div className={style.icon}><AiOutlineTeam/></div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className={style.link_text}
                      >
                        TEAM
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
                
                <NavLink
                  to={"/dashboardpanel/clients"}
                  className={({ isActive }) =>
                  isActive ? style.active: style.link
                }
                >
                  <div className={style.icon}><HiOutlineUserCircle/></div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className={style.link_text}
                      >
                        CLIENT
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>

                <NavLink
                  to={"/dashboardpanel/tags"}
                  className={({ isActive }) =>
                  isActive ? style.active: style.link
                }
                >
                  <div className={style.icon}><BsTag/></div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className={style.link_text}
                      >
                       TAGS
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>

                <NavLink
                  to={"/dashboardpanel/settings"}
                  className={({ isActive }) =>
                  isActive ? style.active: style.link
                }
                >
                  <div className={style.icon}><IoSettingsOutline/></div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className={style.link_text}
                      >
                       SETTINGS
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
          </section>
        </motion.div>



        

      </div>
    </>
  );
};

export default SideBar;