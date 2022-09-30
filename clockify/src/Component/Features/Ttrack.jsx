import { Box, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";

const Ttrack = () => {
  return (
    <>
      <Box>
        <Text
          paddingTop="40px"
          margin="auto"
          width="90%"
          fontSize={{ base: "24px", md: "38px", lg: "42px" }}
        >
          Time tracker
        </Text>
        <Text
          paddingTop="10px"
          margin="auto"
          color="gray"
          width="90%"
          fontSize={{ base: "20px", md: "23px", lg: "25px" }}
        >
          Start and stop timer as you work, or enter hours manually.
        </Text>
        <Box paddingTop="20px" width="90%" margin="auto" className="container">
          <Img
            justifyContent="center"
            src="https://clockify.me/assets/images/features/features-tracker-screenshot.svg"
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
          <Text fontSize={{ base: "20px", md: "20px", lg: "22px" }}>Timer</Text>
          <Text color='gray'>Track Time using Stopwatch</Text>
        </Box>
        <Box marginTop="20px" width="100%" align="center" mx="2">
          <Text fontSize={{ base: "20px", md: "20px", lg: "22px" }}>Add time</Text>
          <Text color='gray'>Enter and edit hours manually.</Text>
        </Box>
        <Box marginTop="20px" width="100%" align="center" mx="2">
          <Text fontSize={{ base: "20px", md: "20px", lg: "22px" }}>Continue</Text>
          <Text color='gray'>Continue tracking with one click.</Text>
        </Box>
        <Box marginTop="20px" width="100%" align="center" mx="2">
          <Text fontSize={{ base: "20px", md: "20px", lg: "22px" }}>Billable</Text>
          <Text color='gray'>Mark hours as billable.</Text>
        </Box>
      </Flex>
    </>
  );
};

export default Ttrack;
