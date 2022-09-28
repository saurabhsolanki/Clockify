import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";

import { AiOutlineGoogle } from "react-icons/ai";

const Login = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      <Link to="/login"></Link>
      <Box
        // border="1px solid black"
        w="40%"
        ml="20%"
        boxShadow="dark-lg"
        p="8"
        mt="6%"
      >
        <Heading as="h3" size="lg">
          Log in{" "}
        </Heading>
        <FormControl isRequired padding="5%">
          <Input placeholder="Enter your Email" />
          <InputGroup size="md" mt="20px">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Box display="flex" justifyContent="space-between" mt="10px">
            <Box>
              <Checkbox isInvalid>Stay Logged in</Checkbox>
            </Box>
            <Box color="blue" cursor="pointer">
              Forgot password?
            </Box>
          </Box>
          <Button w="100%" mt="20px">
            LOGIN
          </Button>

          <Box mt="20px">
            {" "}
            <b>OR</b>
            {/* <hr /> */}
          </Box>
          <Box
            border="1px solid #cccc"
            display="flex"
            gap="15%"
            h="50px"
            w="70%"
            ml="12%"
            mt="10px"
            p="10px"
            borderRadius="10px"
            cursor="pointer"
            _hover={{ " backgroundColor": "#C6D2D9" }}
          >
            <Text fontSize="3xl">
              <AiOutlineGoogle />
            </Text>
            <Text fontSize="17px" color="#8C8C8C">
              Continue with Google
            </Text>
          </Box>
        </FormControl>
      </Box>
    </>
  );
};

export default Login;
