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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  ModalFooter,
  useDisclosure,
  ModalHeader,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { teamPostApi, getTeamApi } from "./team.action";
// const Getapi = () => {
//   return axios.get("http://localhost:8000/teams");
// };
function Team() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let {loading , error , data} = useSelector(store=>store.team)
  console.log(data,"team")
  // const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const [forms, setForms] = useState({
    name: "",
    email: "",
  });

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const handleChange = (e) => {
    const { name: key, value } = e.target;
    setForms({
      ...forms,
      [key]: value,
      billableRate: 0,
    });
  };

  useEffect(() => {
    dispatch(getTeamApi())
    // Getapi()
    //   .then((d) => {
    //     setData(d.data);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
  }, []);

  const handleClick = () => {
    dispatch(teamPostApi(forms));
    // Getapi();
    onClose();
  };

  return (
    <div style={{marginTop:"100px" , padding:"10px" , width:"70%" , margin:"auto"}}>
      <Tabs variant="enclosed" style={{ backgroundColor: "white" }}>
        <TabList>
          <Tab>MEMBERS</Tab>
          <Tab>GROUPS</Tab>
          <Tab>REMINDER</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Box>
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
                  <Button onClick={onOpen} style={{backgroundColor:"#03a4f9" ,color:"white"}}>
                    ADD NEW MEMBER
                  </Button>
                  <Modal
                    initialFocusRef={initialRef}
                    finalFocusRef={finalRef}
                    isOpen={isOpen}
                    onClose={onClose}
                  >
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>Add members</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody pb={6}>
                        <FormControl>
                          <FormLabel>Name</FormLabel>
                          <Input
                            type="text"
                            name="name"
                            value={forms.name}
                            onChange={handleChange}
                            placeholder="Name"
                          />
                        </FormControl>

                        <FormControl mt={4}>
                          <FormLabel>Email</FormLabel>
                          <Input
                            type="email"
                            name="email"
                            value={forms.email}
                            onChange={handleChange}
                            placeholder="Email"
                          />
                        </FormControl>
                      </ModalBody>

                      <ModalFooter>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button onClick={handleClick} colorScheme="blue" mr={3}>
                          Add
                        </Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                </Box>
              </Flex>
            </Box>
            <Box>
              <div
                style={{
                  textAlign: "left",
                  marginTop: "10px",
                  backgroundColor: "#e4eaee",
                  padding: "10px",
                }}
              >
                Members
              </div>
              <TableContainer>
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>NAME</Th>
                      <Th>EMAIL</Th>
                      <Th>BILLABLE RATE(USD)</Th>
                      <Th>ROLE</Th>
                      <Th>GROUP</Th>
                    </Tr>
                  </Thead>
                  {data?.map((el) => (
                    <Tbody key={el._id}>
                      <Tr>
                        <Td>{el.name}</Td>
                        <Td>{el.email}</Td>
                        <Td>{el.billableRate}</Td>
                        <Td>
                          <div
                            style={{
                              textAlign: "center",
                              backgroundColor: "#03a4f9",
                              color: "white",
                            }}
                          >
                            Owner
                          </div>
                        </Td>
                        <Td style={{ color: "blue" }}>Group</Td>
                      </Tr>
                    </Tbody>
                  ))}
                </Table>
              </TableContainer>
            </Box>
          </TabPanel>
          <TabPanel>
            <Box style={{ textAlign: "right" }}>
              <Input
                htmlSize={25}
                width="auto"
                placeholder="Add new user group"
              />
              <Button style={{backgroundColor:"#03a4f9" ,color:"white"}}>ADD</Button>
            </Box>
            <Box>
              <div
                style={{
                  textAlign: "left",
                  marginTop: "10px",
                  backgroundColor: "#e4eaee",
                  padding: "10px",
                }}
              >
                Groups
              </div>
            </Box>
            <Box>
              <TableContainer>
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>NAME</Th>
                      <Th>ACCESS</Th>
                    </Tr>
                  </Thead>
                </Table>
              </TableContainer>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default Team;
