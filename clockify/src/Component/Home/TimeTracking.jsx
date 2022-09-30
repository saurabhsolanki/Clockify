import React from "react";
import { Box, Button, Flex, Img, Text } from "@chakra-ui/react";
const TimeTracking = () => {
  return (
    <>
      <Box>
        <Text
          paddingTop="10px"
          
          margin="auto"
          width="90%"
          fontSize={{ base: "24px", md: "40px", lg: "46px" }}
        >
          Time tracking apps
        </Text>
        <Text
          paddingTop="10px"
          margin="auto"
          color="gray"
          width="90%"
          fontSize={{ base: "20px", md: "23px", lg: "25px" }}
        >
          Clockify works across devices. Track time from anywhere — <br /> all
          data is synced online.
        </Text>
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
        <Box>
          <Flex width="100%" marginTop="50px" align="center" mx="2">
            <Img src="https://clockify.me/assets/images/time-tracking-app-desktop.png" />
          </Flex>
          <Text marginTop="15px">DESKTOP APP</Text>
          <Box display="flex" justifyContent="center" gap="20px" margin="auto">
            <Button marginTop="20px" colorScheme="teal" variant="outline">
              Windows
            </Button>
            <Button marginTop="20px" colorScheme="teal" variant="outline">
              Mac
            </Button>
            <Button marginTop="20px" colorScheme="teal" variant="outline">
              Linux
            </Button>
          </Box>
        </Box>
        <Box>
          <Flex marginTop="40px" width="100%" align="center" mx="2">
            <Img src="https://clockify.me/assets/images/time-tracking-app-web.png" />
          </Flex>
          <Text marginTop="15px">WEB APP</Text>
          <Box display="flex" justifyContent="center" gap="20px" margin="auto">
            <Button marginTop="20px" colorScheme="teal" variant="outline">
              Edge
            </Button>
            <Button marginTop="20px" colorScheme="teal" variant="outline">
              Chrome
            </Button>
            <Button marginTop="20px" colorScheme="teal" variant="outline">
              FireFox
            </Button>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default TimeTracking;
