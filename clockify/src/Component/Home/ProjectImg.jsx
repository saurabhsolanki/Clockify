import { Box, Button, Img } from "@chakra-ui/react";
import React from "react";
import "./ProjectImg.css"
import {FaPlayCircle} from 'react-icons/fa'
const ProjectImg = () => {
  return (
    <>
      <Box paddingTop="40px" width="90%" margin="auto" className="container">
        <a href="https://www.youtube.com/watch?v=NMZhFs_b0Aw">
        <Img
          justifyContent="center"
          src="https://clockify.me/assets/images/time-tracker-screenshot.svg"
          />
          <Button borderRadius="50%" className="btn"><FaPlayCircle size="35px"/> </Button>
          </a>
      </Box>
    </>
  );
};

export default ProjectImg;
