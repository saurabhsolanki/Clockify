import React from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { AiOutlineDollarCircle, AiOutlineTeam } from "react-icons/ai";
import { SiTarget } from "react-icons/si";
import { IoIosTimer } from "react-icons/io";

const WhyTrack = () => {
  return (
    <>
      <Box>
        <Text
          paddingTop="30px"
          margin="auto"
          width="90%"
          fontSize={{ base: "24px", md: "40px", lg: "46px" }}
        >
          Why track time with Clockify
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
        <Flex width="100%" marginTop="50px" align="center" mx="2">
          <Box textAlign="start" margin="auto">
            <SiTarget size="60px" color="rgb(66,191,247)" />
            <Text marginTop="10px" fontWeight="bold">
              Boost Productivity
            </Text>
            <Text marginTop="10px">
              Track time you spend on activities, see where <br /> your time
              goes, and improve your time <br /> management skills
            </Text>
            <Button color="rgb(66,191,247)">
              Learn more <ArrowForwardIcon />
            </Button>
          </Box>
        </Flex>
        <Flex width="100%" marginTop="50px" align="center" mx="2">
          <Box textAlign="start" margin="auto">
            <AiOutlineDollarCircle size="60px" color="rgb(66,191,247)" />
            <Text marginTop="10px" fontWeight="bold">
              Bill Clients
            </Text>
            <Text marginTop="10px">
              Track billable time and expenses, show clients <br /> how much
              you've worked, see how much you've <br /> earned, and create
              invoices
            </Text>
            <Button color="rgb(66,191,247)">
              Learn more <ArrowForwardIcon color="rgb(66,191,247)" />
            </Button>
          </Box>
        </Flex>
      </Flex>

      {/*  */}
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
          <Box textAlign="start" margin="auto">
            <AiOutlineTeam size="60px" color="rgb(66,191,247)" />
            <Text marginTop="10px" fontWeight="bold">
              Manage Team
            </Text>
            <Text marginTop="10px">
              Track attendance for payroll and accounting, see <br /> who works
              on what, and manage workload among <br /> teams.
            </Text>
            <Button color="rgb(66,191,247)">
              Learn more <ArrowForwardIcon />
            </Button>
          </Box>
        </Flex>
        <Flex width="100%" marginTop="50px" align="center" mx="2">
          <Box textAlign="start" margin="auto">
            <IoIosTimer size="60px" color="rgb(66,191,247)" />
            <Text marginTop="10px" fontWeight="bold">
              Business Intelligence
            </Text>
            <Text marginTop="10px">
              Track time and analyze your company's efficiency <br /> across
              projects, clients, departments, and <br /> employees.
            </Text>
            <Button color="rgb(66,191,247)">
              Learn more <ArrowForwardIcon color="rgb(66,191,247)" />
            </Button>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default WhyTrack;
