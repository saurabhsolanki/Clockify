import React from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { IoCallOutline } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import { BiHeart, BiStats } from "react-icons/bi";
const CustomerSupport = () => {
  return (
    <>
      <Box>
        <Text
          paddingTop="40px"
          margin="auto"
          width="90%"
          fontSize={{ base: "24px", md: "40px", lg: "46px" }}
        >
          World-class customer support
        </Text>
        <Text
          paddingTop="10px"
          margin="auto"
          color="gray"
          width="90%"
          fontSize={{ base: "20px", md: "23px", lg: "25px" }}
        >
          We're here 24 hours a day, every day of the week, including holidays.
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
        <Flex gap="10px" width="100%" marginTop="50px" align="center" mx="2">
          <Box>
            <IoCallOutline size="35px" color="rgb(66,191,247)" />
          </Box>
          <Box>
            <Text fontSize="30px" fontWeight="bold">
              24/7
            </Text>
            <Text fontSize="19px" color="gray">
              support anytime, <br /> anywhere
            </Text>
          </Box>
        </Flex>
        <Flex gap="10px" width="100%" marginTop="50px" align="center" mx="2">
          <Box>
            <CgMail size="35px" color="rgb(66,191,247)" />
          </Box>
          <Box>
            <Text fontSize="30px" fontWeight="bold">
              24/7
            </Text>
            <Text fontSize="19px" color="gray">
              support anytime, <br /> anywhere
            </Text>
          </Box>
        </Flex>
        <Flex gap="10px" width="100%" marginTop="50px" align="center" mx="2">
          <Box>
            <BiHeart size="35px" color="rgb(66,191,247)" />
          </Box>
          <Box>
            <Text fontSize="30px" fontWeight="bold">
              24/7
            </Text>
            <Text fontSize="19px" color="gray">
              support anytime, <br /> anywhere
            </Text>
          </Box>
        </Flex>
        <Flex gap="10px" width="100%" marginTop="50px" align="center" mx="2">
          <Box>
            <BiStats size="35px" color="rgb(66,191,247)" />
          </Box>
          <Box>
            <Text fontSize="30px" fontWeight="bold">
              24/7
            </Text>
            <Text fontSize="19px" color="gray">
              support anytime, <br /> anywhere
            </Text>
          </Box>
        </Flex>
      </Flex>
      <Button
        variant="outline"
        margin="auto"
        marginTop="50px"
        fontSize={{ base: "19px", md: "23px", lg: "25px" }}
        colorScheme="messenger"
      >
        Contact Us
      </Button>
    </>
  );
};

export default CustomerSupport;
