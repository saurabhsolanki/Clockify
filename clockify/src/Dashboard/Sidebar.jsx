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


const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
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
          <section className="routes">
          <NavLink
                  to={"/tracker"}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon"><MdOutlineWatchLater /></div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                       Time Tracker
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
                
                <NavLink
                  to={"/calendar"}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon"><VscCalendar /></div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
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
                        className="link_text"
                      >
                       ANALYZE
                      </motion.div>
                    )}
                  </AnimatePresence>
               
                <NavLink
                  to={ "/dashboard"}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon"><MdOutlineDashboard /></div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                      DASHBOARD
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>

                <NavLink
                  to={"/reports"}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon"><BsBarChart /></div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
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
                        className="link_text"
                      >
                       MANAGE
                      </motion.div>
                    )}
                  </AnimatePresence>
               
                <NavLink
                  to={"/projects"}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon"><HiOutlineUserGroup /></div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        PROJECTS
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>

                <NavLink
                  to={"/team"}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon"><AiOutlineTeam/></div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        TEAM
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
                
                <NavLink
                  to={"/client"}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon"><HiOutlineUserCircle/></div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        CLIENT
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>

                <NavLink
                  to={"/tag"}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon"><BsTag/></div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                       TAGS
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>

                <NavLink
                  to={"/settings"}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon"><IoSettingsOutline/></div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                       SETTINGS
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;