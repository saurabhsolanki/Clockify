import { Box, Flex, Img,  Text } from "@chakra-ui/react";
import React from "react";

const Kios = () => {
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
          <Img src="https://clockify.me/assets/images/clockify-apps-kiosk.png" />
        </Flex>
        <Flex width="100%" marginTop="50px" align="center" mx="2">
          <Box width="100%">
            <Text
              paddingTop="40px"
              textAlign="start"
              width="90%"
              fontSize={{ base: "24px", md: "28px", lg: "35px" }}
            >
             Kiosk
            </Text>
            <Text
              paddingTop="10px"
              textAlign="start"
              color="gray"
              width="90%"
              fontSize={{ base: "20px", md: "20px", lg: "20px" }}
            >
              Set up a shared time clock kiosk on any device.



            </Text>

            <Text
            paddingTop="10px"
            textAlign="start"
            color="gray"
            width="90%"
            >TABLET  •  PHONE  •  COMPUTER</Text>
           <Text 
           paddingTop="30px"
           textAlign="start"
           justifyContent="flex-start"
           
           width="90%"
           cursor="pointer"
           textDecoration="underline"
           color="rgb(3,177,247)">Learn more</Text>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default Kios;
