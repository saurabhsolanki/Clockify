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
  Image,
} from "@chakra-ui/react";

const Login = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      <Box display="flex" w="100%">
        <Box
          w="65%"
          // border="1px solid red"
        >
          <Box m="22px">
            <Link to="/">
              <Image
                src="https://clockify.me/assets/images/clockify-logo.svg"
                style={{ height: "32px" }}
                alt="Clock logo"
              />
            </Link>
            <Text marginLeft="53%" fontSize="14px" color="grey">
              Don't have an account?{" "}
              <Link
                to="/signup"
                style={{
                  fontWeight: "600",
                  color: "#1b74e4",
                  cursor: "pointer",
                  textDecoration: "none",
                }}
              >
                Singup
              </Link>
            </Text>
          </Box>
          <Link to="/login"></Link>

          <Box w="43%" ml="23%" boxShadow="dark-lg" p="8" mt="6%">
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
              <div
                style={{
                  opacity: "0.98",
                  fontSize: "14px",
                  color: "black",
                  borderRadius: "4px",
                  border: "1px solid #c6c6c6",
                  fontWeight: "700",
                  marginTop: "0px",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "10px",
                  width: "100%",
                  margin: "auto",
                  height: "40px",
                }}
              >
                <img
                  src="https://app.clockify.me/assets/ui-icons/icon-google.svg"
                  alt=""
                />
                <p>Continue with Google</p>
              </div>
            </FormControl>
          </Box>
        </Box>

        <Box
          // border="1px solid red"
          w="40%"
          h="700px"
          backgroundColor="#444FB6"
        >
          <Button color="black" backgroundColor="white" mt="10px" h="25px">
            NEW
          </Button>
          <Heading as="h3" fontSize="2xl" color="white" mt="12px">
            Scheduling
          </Heading>
          <Text color="white" w="64%" m="auto">
            Visualize projects on a timeline and plan team's capacity (see who's
            busy and who's available).
          </Text>
          <a href="https://clockify.me/help/extra-features/scheduling">
            {" "}
            <Button mt="10px">SEE HOW IT WORKS</Button>
          </a>

          <Image
            mt="10px"
            w="97%"
            ml="14px"
            src="https://app.clockify.me/assets/features-info/scheduling-promo.webp"
            alt=""
          />
        </Box>
      </Box>
    </>
  );
};

export default Login;
