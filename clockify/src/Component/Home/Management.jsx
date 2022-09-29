import React from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Img, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Management = () => {
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
          <Box textAlign="start" margin="auto">
            <Text>MANAGEMENT</Text>
            <Button>
              Scheduling <ArrowForwardIcon />
            </Button>
            <Text>Schedule work, assignments, and shifts.</Text>
            <Button>
              Time Off <ArrowForwardIcon />
            </Button>
            <Text>Manage leaves and holidays.</Text>
            <Button>
              Approval <ArrowForwardIcon />
            </Button>
            <Text>Submit and approve timesheets.</Text>
            <Button>
              Invoicing <ArrowForwardIcon />
            </Button>
            <Text>Create invoices from billable time.</Text>
            <Button>
              Expenses <ArrowForwardIcon />
            </Button>
            <Text>Record project expenses and fees.</Text>
          </Box>
        </Flex>
        <Flex marginTop="40px" width="100%" align="center" mx="2">
          <Img src="https://clockify.me/assets/images/feature-team-scheduling.svg" />
        </Flex>
      </Flex>
      <Link to="/features">
        <Button
          margin="auto"
          marginTop="50px"
          fontSize={{ base: "19px", md: "23px", lg: "25px" }}
          colorScheme="messenger"
        >
          SEE ALL FEATURES
        </Button>
      </Link>
    </>
  );
};

export default Management;
