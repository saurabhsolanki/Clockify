import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const StartTrack = () => {
  return (
    <>
      <Box>
        <Text
          paddingTop="40px"
          margin="auto"
          width="90%"
          fontSize={{ base: "24px", md: "40px", lg: "46px" }}
        >
          Start tracking time with Clockify
        </Text>
        <Link to='/signup'>

        <Button
          margin="auto"
          marginTop="20px"
          fontSize={{ base: "19px", md: "23px", lg: "25px" }}
          colorScheme="messenger"
          >
          CREATE FREE ACCOUNT
        </Button>
          </Link>
        <Text marginTop="20px">146, 872 people signed up last month</Text>
      </Box>
    </>
  );
};

export default StartTrack;
