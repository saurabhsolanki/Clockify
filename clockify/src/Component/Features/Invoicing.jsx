import React from "react";
import { Box, Flex, Img, Text } from "@chakra-ui/react";

const Invoicing = () => {
  return (
    <>
      <Box>
        <Text
          paddingTop="40px"
          margin="auto"
          width="90%"
          fontSize={{ base: "24px", md: "38px", lg: "42px" }}
        >
          Invoicing
        </Text>
        <Text
          paddingTop="10px"
          margin="auto"
          color="gray"
          width="90%"
          fontSize={{ base: "20px", md: "23px", lg: "25px" }}
        >
          Issue invoices based on tracked time, expenses, and hourly rates.
        </Text>

        <Box paddingTop="20px" width="90%" margin="auto" className="container">
          <Img
            justifyContent="center"
            src="https://clockify.me/assets/images/features/features-invoicing-screenshot.svg"
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
            Create
          </Text>
          <Text color="gray">Import time and edit invoices.</Text>
        </Box>
        <Box marginTop="20px" width="100%" align="center" mx="2">
          <Text fontSize={{ base: "20px", md: "20px", lg: "22px" }}>PDF</Text>
          <Text color="gray">Download and send to client.</Text>
        </Box>
        <Box marginTop="20px" width="100%" align="center" mx="2">
          <Text fontSize={{ base: "20px", md: "20px", lg: "22px" }}>
            Customize{" "}
          </Text>
          <Text color="gray">Add company logo and notes.</Text>
        </Box>
        <Box marginTop="20px" width="100%" align="center" mx="2">
          <Text fontSize={{ base: "20px", md: "20px", lg: "22px" }}>
            Expenses
          </Text>
          <Text color="gray">Record and invoice fixed fees.</Text>
        </Box>
      </Flex>
    </>
  );
};

export default Invoicing;
