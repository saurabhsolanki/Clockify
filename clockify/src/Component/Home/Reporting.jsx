import React from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Img, Text } from "@chakra-ui/react";
const Reporting = () => {
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
        <Flex marginTop="40px" width="100%" align="center" mx="2">
          <Img src="https://clockify.me/assets/images/feature-time-reporting-activity.svg" />
        </Flex>
        <Flex width="100%" marginTop="50px" align="center" mx="2">
          <Box textAlign="start" margin="auto">
            <Text>REPORTING</Text>
            <Button>
              Reports <ArrowForwardIcon />
            </Button>
            <Text>Analyze and export tracked time.</Text>
            <Button>
              Activity <ArrowForwardIcon />
            </Button>
            <Text>See who works on what.</Text>
            <Button>
              Rates <ArrowForwardIcon />
            </Button>
            <Text>Track project estimates and budget.</Text>
            <Button>
              Progress <ArrowForwardIcon />
            </Button>
            <Text>
              {" "}
              <Text>See who works on what.</Text>
            </Text>
            <Button>
              Location <ArrowForwardIcon />
            </Button>
            <Text>See visited sites and routes.</Text>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default Reporting;
