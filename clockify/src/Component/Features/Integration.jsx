import { Box, Img, Text, Flex, Link } from "@chakra-ui/react";
import React, { useState } from "react";

const Integration = () => {
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
          Integrations
        </Text>
        <Text
          paddingTop="10px"
          margin="auto"
          color="gray"
          width="90%"
          fontSize={{ base: "20px", md: "23px", lg: "25px" }}
        >
          Connect Clockify with other apps.
        </Text>
      </Box>
      <Box paddingTop="20px" width="70%" margin="auto" className="container">
        <Img
          fontWeight="semibold"
          py={1}
          px={1}
          borderWidth="none"
          borderColor="blue.500"
          rounded="md"
          _hover={{ bg: "blue.500", color: " white" }}
          _focus={{ boxShadow: "outline" }}
          onMouseOver={over}
          onMouseOut={out}
          justifyContent="center"
          src="https://clockify.me/assets/images/integrations/time-tracking-integrations-quickbooks.png"
        />
        <Img
          fontWeight="semibold"
          py={1}
          px={1}
          borderWidth="none"
          borderColor="blue.500"
          rounded="md"
          _hover={{ bg: "blue.500", color: " white" }}
          _focus={{ boxShadow: "outline" }}
          onMouseOver={over}
          onMouseOut={out}
          justifyContent="center"
          src="https://clockify.me/assets/images/integrations/time-tracking-integrations-trello.png"
        />
        <Img
          fontWeight="semibold"
          py={1}
          px={1}
          borderWidth="none"
          borderColor="blue.500"
          rounded="md"
          _hover={{ bg: "blue.500", color: " white" }}
          _focus={{ boxShadow: "outline" }}
          onMouseOver={over}
          onMouseOut={out}
          justifyContent="center"
          src="https://clockify.me/assets/images/integrations/time-tracking-integrations-asana.png"
        />
        <Img
          fontWeight="semibold"
          py={1}
          px={1}
          borderWidth="none"
          borderColor="blue.500"
          rounded="md"
          _hover={{ bg: "blue.500", color: " white" }}
          _focus={{ boxShadow: "outline" }}
          onMouseOver={over}
          onMouseOut={out}
          justifyContent="center"
          src="https://clockify.me/assets/images/integrations/time-tracking-integrations-jira.png"
        />
      </Box>

      <Flex
        display="flex"
        width="90%"
        margin="auto"
        justifyContent="center"
        marginTop="40px"
      >
        <Img
          cursor="pointer"
          src="https://clockify.me/assets/images/multiple-clockify-integrations.svg"
        />
      </Flex>
      <Box marginTop="50px">
        <Link paddingTop="50px" color="rgb(3,177,247)">
          See All Integrations (80+)
        </Link>
      </Box>
      <Box marginTop="30px">
        <Link color="rgb(3,177,247)">API / Webhooks</Link>
      </Box>
    </>
  );
};

export default Integration;
