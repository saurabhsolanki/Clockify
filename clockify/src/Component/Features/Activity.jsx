import React from "react";
import { Box, Flex, Img, Tab, TabList, Tabs, Text } from "@chakra-ui/react";

const Activity = () => {
  return (
    <>
      <Box>
        <Text
          paddingTop="40px"
          margin="auto"
          width="90%"
          fontSize={{ base: "24px", md: "38px", lg: "42px" }}
        >
          Activity
        </Text>
        <Text
          paddingTop="10px"
          margin="auto"
          color="gray"
          width="90%"
          fontSize={{ base: "20px", md: "23px", lg: "25px" }}
        >
          See visited sites and what you've worked on.
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
                LOCATIONS
              </Tab>
              <Tab fontSize="22px" color="rgb(3,169,245)">
                SCREENSHOTS
              </Tab>
            </TabList>
          </Tabs>
        </Box>

        <Box paddingTop="20px" width="90%" margin="auto" className="container">
          <Img
            justifyContent="center"
            src="https://clockify.me/assets/images/features/features-locations-screenshot.png"
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
            Locations
          </Text>
          <Text color="gray">Track GPS location.</Text>
        </Box>
        <Box marginTop="20px" width="100%" align="center" mx="2">
          <Text fontSize={{ base: "20px", md: "20px", lg: "22px" }}>
            Routes
          </Text>
          <Text color="gray">See all visited locations.</Text>
        </Box>
        <Box marginTop="20px" width="100%" align="center" mx="2">
          <Text fontSize={{ base: "20px", md: "20px", lg: "22px" }}>
            Screenshots
          </Text>
          <Text color="gray">Record what you've worked on.</Text>
        </Box>
        <Box marginTop="20px" width="100%" align="center" mx="2">
          <Text fontSize={{ base: "20px", md: "20px", lg: "22px" }}>
            Privacy
          </Text>
          <Text color="gray">Control what data is gathered.</Text>
        </Box>
      </Flex>
    </>
  );
};

export default Activity;
