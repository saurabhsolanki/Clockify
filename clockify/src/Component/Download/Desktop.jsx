import { Box, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";

const Browser = () => {
  return (
    <>
      <Flex
      paddingTop="60px"
        maxW="1000px"
        w={["90vm", "90vm", "70vm", "70vm"]}
        direction={["column", "column", "row", "row"]}
        justify="center"
        boxShadow="md"
        rounded="lg"
        margin="auto"
        width="90%"
      >
        <Flex marginTop="40px" width="100%" align="center" mx="2">
          <Img src="https://clockify.me/assets/images/clockify-apps-desktop.png" />
        </Flex>
        <Flex width="100%" marginTop="50px" align="center" mx="2">
          <Box width="100%">
            <Text
              paddingTop="40px"
              textAlign="start"
              width="90%"
              fontSize={{ base: "24px", md: "28px", lg: "35px" }}
            >
             Desktop app
            </Text>
            <Text
              paddingTop="10px"
              textAlign="start"
              color="gray"
              width="90%"
              fontSize={{ base: "20px", md: "20px", lg: "20px" }}
            >
              Track time on your computer.

            </Text>

            <Flex
            marginTop="10px"
              gap="20px"
              w={["90vm", "90vm", "70vm", "70vm"]}
              direction={["column", "column", "row", "row"]}
            >
              <Img src="https://clockify.me/assets/images/download-app-mac.svg" />
              <Img src="https://clockify.me/assets/images/download-app-windows.svg" />
            </Flex>
            <Flex
            marginTop="10px"
              gap="20px"
              w={["90vm", "90vm", "70vm", "70vm"]}
              direction={["column", "column", "row", "row"]}
            >
              <Img src="https://clockify.me/assets/images/download-app-linux.svg" />
              </Flex>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default Browser;
