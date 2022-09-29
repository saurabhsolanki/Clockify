import React from "react";
import { Box, Button, Flex, Img, Text } from "@chakra-ui/react";

const MobileView = () => {
  return (
    <>
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
            <Img src="https://clockify.me/assets/images/clockify-apps-mobile.png" />
          </Flex>
          <Text marginTop="15px">MOBILE APP</Text>
          <Box display="flex" justifyContent="center" gap="20px" margin="auto">
            <Button marginTop="20px" colorScheme="teal" variant="outline">
              Android
            </Button>
            <Button marginTop="20px" colorScheme="teal" variant="outline">
              Ios
            </Button>
          </Box>
        </Box>
        <Box>
          <Flex width="100%" marginTop="50px" align="center" mx="2">
            <Img src="https://clockify.me/assets/images/clockify-apps-kiosk.png" />
          </Flex>
          <Text marginTop="15px">KIOSK APP</Text>
          <Box display="flex" justifyContent="center" gap="20px" margin="auto">
            <Button marginTop="20px" colorScheme="teal" variant="outline">
              Any Device
            </Button>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default MobileView;
