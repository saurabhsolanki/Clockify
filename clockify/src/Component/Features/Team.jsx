import React from "react";
import { Box, Flex, Img, Text } from "@chakra-ui/react";

const Team = () => {
  return (
    <>
      <Box>
        <Text
          paddingTop="40px"
          margin="auto"
          width="90%"
          fontSize={{ base: "24px", md: "38px", lg: "42px" }}
        >
          Team
        </Text>
        <Text
          paddingTop="10px"
          margin="auto"
          color="gray"
          width="90%"
          fontSize={{ base: "20px", md: "23px", lg: "25px" }}
        >
          Invite your team to track time in your account.
        </Text>
        <Box paddingTop="20px" width="90%" margin="auto" className="container">
          <Img
            justifyContent="center"
            src="https://clockify.me/assets/images/features/features-team-screenshot.svg"
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
            Invite team
          </Text>
          <Text color="gray">Unlimited number of users, free.</Text>
        </Box>
        <Box marginTop="20px" width="100%" align="center" mx="2">
          <Text fontSize={{ base: "20px", md: "20px", lg: "22px" }}>Rates</Text>
          <Text color="gray">Set per user hourly rates.</Text>
        </Box>
        <Box marginTop="20px" width="100%" align="center" mx="2">
          <Text fontSize={{ base: "20px", md: "20px", lg: "22px" }}>
            Manager
          </Text>
          <Text color="gray">Give additional permissions.</Text>
        </Box>
        <Box marginTop="20px" width="100%" align="center" mx="2">
          <Text fontSize={{ base: "20px", md: "20px", lg: "22px" }}>
            Groups
          </Text>
          <Text color="gray">Manage access using groups.</Text>
        </Box>
      </Flex>
    </>
  );
};

export default Team;
