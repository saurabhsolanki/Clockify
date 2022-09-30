import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";

const TimeManage = () => {
  return (
    <>
      <Box>
        <Text
          paddingTop="10px"
          
          margin="auto"
          width="90%"
          fontSize={{ base: "24px", md: "40px", lg: "46px" }}
        >
          Time management features
        </Text>
        <Text
          paddingTop="10px"
          margin="auto"
          color="gray"
          width="90%"
          fontSize={{ base: "20px", md: "23px", lg: "26px" }}
        >
          Track productivity, attendance, and billable hours with a simple{" "}
          <br /> time tracker and timesheet.
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
            <Text>TIMEKEEPING</Text>
            <Button>
              Timer <ArrowForwardIcon />
            </Button>
            <Text>Track work hours in real time.</Text>
            <Button>
              TimeSheet <ArrowForwardIcon />
            </Button>
            <Text>Enter time in a weekly timesheet.</Text>
            <Button>
              Calender <ArrowForwardIcon />
            </Button>
            <Text>Visually block out and manage time.</Text>
            <Button>
              Auto Tracker <ArrowForwardIcon />
            </Button>
            <Text>Track apps and websites you use.</Text>
            <Button>
              Kiosk <ArrowForwardIcon />
            </Button>
            <Text>Clock in from a shared device.</Text>
          </Box>
        </Flex>
        <Flex marginTop="40px" width="100%" align="center" mx="2">
          <Img src="https://clockify.me/assets/images/feature-time-tracker-methods.svg" />
        </Flex>
      </Flex>
    </>
  );
};

export default TimeManage;
