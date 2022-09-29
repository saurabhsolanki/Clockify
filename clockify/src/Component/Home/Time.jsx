import { TimeIcon } from "@chakra-ui/icons";
import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Time = () => {
  return (
    <>
      <Box>
        <Text
          paddingTop="10px"
         
          margin="auto"
          width="90%"
          fontSize={{ base: "24px", md: "40px", lg: "46px" }}
        >
          The most popular free time tracker for teams
        </Text>
        <Text
          paddingTop="10px"
          margin="auto"
          color="gray"
          width="90%"
          fontSize={{ base: "20px", md: "23px", lg: "25px" }}
        >
          Time tracking software used by millions. Clockify is a time tracker{" "}
          <br /> and timesheet app that lets you track work hours across
          projects. <br /> Unlimited users, free forever.
        </Text>
        <Text paddingTop="10px">⭐⭐⭐⭐⭐ 4,000+ Reviews</Text>
        <Link to="/signup">
        <Button
          margin="auto"
          marginTop="10px"
          fontSize={{ base: "19px", md: "23px", lg: "25px" }}
          colorScheme="messenger"
          >
          START TRACKING TIME-IT'S FREE
        </Button>
          </Link>
        <Text marginTop="10px">
          <TimeIcon />
          147,049 people signed up last month
        </Text>
      </Box>
    </>
  );
};

export default Time;
