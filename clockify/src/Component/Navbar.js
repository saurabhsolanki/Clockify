import { Box, Flex, Img, } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
const links = [
  {
    path: "/features",
    title: "Features",
  },
  {
    path: "/download",
    title: "Download",
  },
];

const links1 = [
  {
    path: "/login",
    title: "Log In",
  },
  {
    path: "/signup",
    title: "Sign Up Free",
  },
];
const Navbar = () => {
  return (
    <div>
      <Flex alignItems="center" justifyContent="space-evenly" >
        <Box >
          <Img
            boxSize="100px"
            src="https://clockify.me/assets/images/clockify-logo.svg"
          />
        </Box>
        <Box>
          {links.map((link) => {
            return (
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.active : styles.default
                }
                key={link.path}
                to={link.path}
              >
                {link.title}
              </NavLink>
            );
          })}
        </Box>
        <Box display= "flex">
          {links1.map((link) => {
            return (
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.active : styles.default
                }
                key={link.path}
                to={link.path}
              >
                {link.title}
              </NavLink>
            );
          })}
        </Box>
      </Flex>
    </div>
  );
};

export default Navbar;
