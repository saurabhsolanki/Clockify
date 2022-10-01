import React from "react";
import { Box, Flex, Img, Tab, TabList, Tabs, Text } from "@chakra-ui/react";

const Reports = () => {
  return (
    <>
      <Box>
        <Text
          paddingTop="40px"
          margin="auto"
          width="90%"
          fontSize={{ base: "24px", md: "38px", lg: "42px" }}
        >
          Reports
        </Text>
        <Text
          paddingTop="10px"
          margin="auto"
          color="gray"
          width="90%"
          fontSize={{ base: "20px", md: "23px", lg: "25px" }}
        >
          See who worked on what, how much money you earn, review your team's{" "}
          <br /> time, and export the data.
        </Text>

        <Box
          display="flex"
          paddingTop="30px"
          margin="auto"
          justifyContent="center"
        >
          <Tabs>
            <TabList>
              <Tab fontSize="22px" color="rgb(3,169,245)">
                SUMMARY
              </Tab>
              <Tab fontSize="22px" color="rgb(3,169,245)">
                DETAILED
              </Tab>
              <Tab fontSize="22px" color="rgb(3,169,245)">
                WEEKLY
              </Tab>
            </TabList>
          </Tabs>
        </Box>

        <Box paddingTop="20px" width="90%" margin="auto" className="container">
          <Img
            justifyContent="center"
            src="https://clockify.me/assets/images/features/features-reports-screenshot.svg"
          />
        </Box>
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
        <Box width="100%" marginTop="20px" align="center" mx="2">
          <Text fontSize={{ base: "20px", md: "20px", lg: "22px" }}>
            Breakdowns
          </Text>
          <Text color="gray">Overview by: day, activity, user...</Text>
        </Box>
        <Box marginTop="20px" width="100%" align="center" mx="2">
          <Text fontSize={{ base: "20px", md: "20px", lg: "22px" }}>
            Filters
          </Text>
          <Text color="gray">Drill down into your data.</Text>
        </Box>
        <Box marginTop="20px" width="100%" align="center" mx="2">
          <Text fontSize={{ base: "20px", md: "20px", lg: "22px" }}>Share</Text>
          <Text color="gray">Share reports with clients via link.</Text>
        </Box>
        <Box marginTop="20px" width="100%" align="center" mx="2">
          <Text fontSize={{ base: "20px", md: "20px", lg: "22px" }}>
            Export
          </Text>
          <Text color="gray">Download PDF, CSV, or Excel.</Text>
        </Box>
      </Flex>
    </>
  );
};

export default Reports;
