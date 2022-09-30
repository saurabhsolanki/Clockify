import React, { useState } from "react";
import { Box, Button, Flex, Img, Text } from "@chakra-ui/react";

const Apps = () => {
  const [isVisible, setIsVisible] = useState(false);

  function over(e) {
    setIsVisible(true);
  }
  function out(e) {
    setIsVisible(false);
  }
  return (
    <>
      <Box>
        <Text
          paddingTop="40px"
          margin="auto"
          width="90%"
          fontSize={{ base: "24px", md: "38px", lg: "42px" }}
        >
          Apps
        </Text>
        <Text
          paddingTop="10px"
          margin="auto"
          color="gray"
          width="90%"
          fontSize={{ base: "20px", md: "23px", lg: "25px" }}
        >
          Track time using desktop and mobile app.
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
        <Flex
          display="flex"
          width="90%"
          margin="auto"
          direction={["column", "column", "row", "row"]}
        >
          <Button
            fontWeight="semibold"
            py={2}
            px={4}
            borderWidth="none"
            borderColor="blue.500"
            rounded="md"
            _hover={{ bg: "blue.500", color: " white" }}
            _focus={{ boxShadow: "outline" }}
            onMouseOver={over}
            onMouseOut={out}
          >
            Auto Tracker
          </Button>
          <Button
            fontWeight="semibold"
            py={2}
            px={4}
            borderWidth="none"
            borderColor="blue.500"
            rounded="md"
            _hover={{ bg: "blue.500", color: " white" }}
            _focus={{ boxShadow: "outline" }}
            onMouseOver={over}
            onMouseOut={out}
          >
            Idle detection
          </Button>
          <Button
            fontWeight="semibold"
            py={2}
            px={4}
            borderWidth="none"
            borderColor="blue.500"
            rounded="md"
            _hover={{ bg: "blue.500", color: " white" }}
            _focus={{ boxShadow: "outline" }}
            onMouseOver={over}
            onMouseOut={out}
          >
            Reminders
          </Button>
          <Button
            fontWeight="semibold"
            py={2}
            px={4}
            borderWidth="none"
            borderColor="blue.500"
            rounded="md"
            _hover={{ bg: "blue.500", color: " white" }}
            _focus={{ boxShadow: "outline" }}
            onMouseOver={over}
            onMouseOut={out}
          >
            Auto start/stop
          </Button>
          <Button
            fontWeight="semibold"
            py={2}
            px={4}
            borderWidth="none"
            borderColor="blue.500"
            rounded="md"
            _hover={{ bg: "blue.500", color: " white" }}
            _focus={{ boxShadow: "outline" }}
            onMouseOver={over}
            onMouseOut={out}
          >
            Offline mode
          </Button>
          <Button
            fontWeight="semibold"
            py={2}
            px={4}
            borderWidth="none"
            borderColor="blue.500"
            rounded="md"
            _hover={{ bg: "blue.500", color: " white" }}
            _focus={{ boxShadow: "outline" }}
            onMouseOver={over}
            onMouseOut={out}
          >
            Pomodoro timer
          </Button>
        </Flex>
      </Flex>
      <Box paddingTop="20px" width="90%" margin="auto" className="container">
        <Img
          justifyContent="center"
          src="https://clockify.me/assets/images/features/features-apps-screenshot.png"
        />
      </Box>
    </>
  );
};

export default Apps;
