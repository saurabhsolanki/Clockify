import { React } from "react";
import SocialLinks from "./SocialLinks";
import {
  Box,
  Container,
  Img,
  
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import {Link} from "react-router-dom"

const Logo = (props) => {
  return <Img src="https://clockify.me/assets/images/clockify-logo.svg" />;
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithLogoLeft() {
  return (
    <>
      <Box
        marginTop="60px"
        bg={useColorModeValue("gray.50", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
      >
        <Container as={Stack} maxW={"6xl"} py={10}>
          <SimpleGrid
            templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }}
            spacing={8}
          >
            <Stack spacing={6}>
              <Box>
                <Logo color={useColorModeValue("gray.700", "white")} />
              </Box>
              <Text fontSize={"sm"}>
                The world's leading time tracker and timesheet software for
                teams
              </Text>
              
              <Link to="/login">Log In</Link>
              <Link to="/signup">Sign Up Free</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Product</ListHeader>
              <Link to="/features">Features</Link>
              <Link to="/download">DownLoad</Link>
              <Link href={"#"}>Integrations</Link>
              <Link href={"#"}>Upgrade</Link>
              <Link href={"#"}>API</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Solution</ListHeader>
              <Link href={"#"}>TimeKeeping</Link>
              <Link href={"#"}>Management</Link>
              <Link href={"#"}>Reporting</Link>
              <Link href={"#"}>Business</Link>
              <Link href={"#"}>Calculators</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Company</ListHeader>
              <Link href={"#"}>About Us</Link>
              <Link href={"#"}>Customer</Link>
              <Link href={"#"}>Puple</Link>
              <Link href={"#"}>Plaky</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Support </ListHeader>
              <Link href={"#"}>Help</Link>
              <Link href={"#"}>Tutorials</Link>
              <Link href={"#"}>Resources</Link>
              <Link href={"#"}>Blog</Link>
              <Link href={"#"}>Contact</Link>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
      <SocialLinks />
    </>
  );
}
