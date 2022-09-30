import React from "react";
import { Box, Flex, Img, Text } from "@chakra-ui/react";

const Timeoff = () => {
  return (
    <>
      <Box>
        <Text
          paddingTop="40px"
          margin="auto"
          width="90%"
          fontSize={{ base: "24px", md: "38px", lg: "42px" }}
        >
          Time off
        </Text>
        <Text
          paddingTop="10px"
          margin="auto"
          color="gray"
          width="90%"
          fontSize={{ base: "20px", md: "23px", lg: "25px" }}
        >
          Track your team's holidays and time off requests.
        </Text>

        <Box paddingTop="20px" width="90%" margin="auto" className="container">
          <Img
            justifyContent="center"
            src="https://clockify.me/assets/images/features/features-timeoff-screenshot.svg"
          />
        </Box>
      </Box>

      <Flex
        maxW="1000px"
        w={["90vm", "90vm", "70vm", "70vm"]}
        direction={["column", "column", "row", "row"]}
        justify="center"
        boxShadow="md"
        rounded="lg"
        margin="auto"
        width="90%"
      >
        <Box width="100%" marginTop="20px" align="center" mx="2">
          <Text fontSize={{ base: "20px", md: "20px", lg: "22px" }}>
            Policies
          </Text>
          <Text color="gray">Create time off policies.</Text>
        </Box>
        <Box marginTop="20px" width="100%" align="center" mx="2">
          <Text fontSize={{ base: "20px", md: "20px", lg: "22px" }}>
            Holidays
          </Text>
          <Text color="gray">Define holidays for paid leaves.</Text>
        </Box>
        <Box marginTop="20px" width="100%" align="center" mx="2">
          <Text fontSize={{ base: "20px", md: "20px", lg: "22px" }}>
            Requests
          </Text>
          <Text color="gray">Request and approve leaves.</Text>
        </Box>
        <Box marginTop="20px" width="100%" align="center" mx="2">
          <Text fontSize={{ base: "20px", md: "20px", lg: "22px" }}>
            Balance
          </Text>
          <Text color="gray">Track available days/hours.</Text>
        </Box>
      </Flex>
    </>
  );
};

export default Timeoff;
