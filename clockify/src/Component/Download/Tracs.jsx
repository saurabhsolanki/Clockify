import React, { useState } from "react";
import { Box, Button, Flex, Img, Link, Text } from "@chakra-ui/react";

const Track = () => {
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
          Time tracking apps
        </Text>
        <Text
          paddingTop="10px"
          margin="auto"
          color="gray"
          width="90%"
          fontSize={{ base: "20px", md: "23px", lg: "25px" }}
        >
         Install Clockify and track time from anywhere — everything is synced online.

        </Text>
      </Box>
    <Flex  paddingTop="20px"       direction={["column", "column", "row", "row"]}
 margin="auto" color="rgb(32,178,170)" justifyContent="center" gap="20px">
            
        <Link>Chrome  •</Link>
        <Link> Firefox  • </Link>
        <Link> Edge  •</Link>
        <Link>Mac  •</Link>
        <Link> Windows  •</Link>
        <Link> Linux  • </Link>
        <Link>Android  •</Link>
        <Link>iOS</Link>
        

    </Flex>
      <Flex
        maxW="1000px"
        w={["90vm", "90vm", "70vm", "70vm"]}
        direction={["column", "column", "row", "row"]}
        justify="center"
        boxShadow="md"
        rounded="lg"
        margin="auto"
        width="90%"
        paddingTop="20px"
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
            Default project
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
            Pomodoro timer
          </Button>
        </Flex>
      </Flex>
      
    </>
  );
};

export default Track;
