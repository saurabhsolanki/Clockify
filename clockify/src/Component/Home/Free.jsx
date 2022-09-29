import React from "react";
import { Box, Button, Flex, Img, Text } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { FiCheck } from "react-icons/fi";

const Free = () => {
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
        <Flex width="100%" marginTop="50px" align="center" mx="2">
          <Img src="https://clockify.me/assets/images/free-forever-clock-4.svg" />
        </Flex>

        <Flex
          width="100%"
          direction={["column", "column", "column", "column"]}
          align="center"
          mx="2"
        >
          <Box justifyContent="center" margin="auto">
            <Text
              marginTop="50px"
              fontWeight="bold"
              color="rgb(66,191,247)"
              margin="auto"
              width="90%"
              fontSize={{ base: "24px", md: "40px", lg: "56px" }}
            >
              FREE
            </Text>
            <Text
              fontWeight="bold"
              color="rgb(66,191,247)"
              margin="auto"
              width="100%"
              fontSize={{ base: "20px", md: "30px", lg: "36px" }}
            >
              FOREVER!
            </Text>
            <Text display="flex" gap="10px">
              {" "}
              <FiCheck color="rgb(66,191,247)" />
              Unlimited users
            </Text>
            <Text display="flex" gap="10px">
              {" "}
              <FiCheck color="rgb(66,191,247)" />
              Unlimited tracking
            </Text>
            <Text display="flex" gap="10px">
              {" "}
              <FiCheck color="rgb(66,191,247)" />
              Unlimited projects
            </Text>
            <Button color="rgb(66,191,247)">
              Upgrade <ArrowForwardIcon color="rgb(66,191,247)" />
            </Button>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default Free;
