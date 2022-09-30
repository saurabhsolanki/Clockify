import React, { useState } from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
const Feature = () => {
  const [isVisible, setIsVisible] = useState(false);

  function over(e) {
    setIsVisible(true);
  }
  function out(e) {
    setIsVisible(false);
  }
  return (
    <>
      <Box marginTop="100px">
        <Text
          paddingTop="10px"
          margin="auto"
          width="90%"
          fontSize={{ base: "24px", md: "40px", lg: "46px" }}
        >
          Features
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
        <Box width="100%" marginTop="99px" align="center" mx="2">
          <Text textAlign="center" fontSize={{ base: "20px", md: "20px", lg: "20px" }}>
            TIMEKEEPING
          </Text>
          <Box color="gray" fontSize={{ base: "20px", md: "20px", lg: "20px" }}>
            <Box display="flex" width="90%" margin="auto">
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
                Time Tracker
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
                Kiosk
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
                Apps
              </Button>
            </Box>
            <Box display="flex" width="90%" margin="auto">
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
                TimeSheet
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
                Calender
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
                Integrations
              </Button>
            </Box>
          </Box>
        </Box>
        <Box marginTop="99px" width="100%" align="center" mx="2">
          <Text textAlign="center" fontSize={{ base: "20px", md: "20px", lg: "20px" }}>
            REPORTING
          </Text>
          <Box color="gray" fontSize={{ base: "20px", md: "20px", lg: "20px" }}>
            <Box display="flex" width="90%" margin="auto">
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
                Dashboard
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
                Activity
              </Button>
              
            </Box>
            <Box display="flex" width="90%" margin="auto">
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
                Reports
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
                Projects
              </Button>
              
            </Box>
          </Box>
        </Box>
        <Box marginTop="99px" width="100%" align="center" mx="2">
          <Text textAlign="center" fontSize={{ base: "20px", md: "20px", lg: "20px" }}>
            MANAGEMENT
          </Text>
          <Box color="gray" fontSize={{ base: "20px", md: "20px", lg: "20px" }}>
            <Box display="flex" width="90%" margin="auto">
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
                Team
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
                Time Off
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
                Expenses
              </Button>
            </Box>
            <Box display="flex" width="90%" margin="auto">
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
                Scheduling
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
                Approval
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
                Invoicing
              </Button>
            </Box>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Feature;
