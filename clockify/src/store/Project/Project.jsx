import {
  Box,
  Button,
  Container,
  Flex,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Stack,
  Select,
  Spacer,
} from "@chakra-ui/react";
import React from "react";

function Team() {
  return (
    <div>
      <Tabs variant="enclosed">
        <TabList>
          <Tab>MEMBERS</Tab>
          <Tab>GROUPS</Tab>
          <Tab>REMINDER</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Container>
              <Flex>
                <Box style={{ display: "flex" }}>
                  <Box>
                    <Stack spacing={3}>
                      <Select placeholder="Show all" size="md">
                        <option value="option2">Show active</option>
                        <option value="option3">Show inactive</option>
                      </Select>
                    </Stack>
                  </Box>
                  <Box>
                    <Input placeholder="Search by name or email" />
                  </Box>
                </Box>
                <Spacer />
                <Box>
                  <Button>ADD MEMBER</Button>
                </Box>
              </Flex>
            </Container>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default Team;
