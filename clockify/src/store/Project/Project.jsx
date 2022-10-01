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
import { getProjectapi, projectPostApi } from "./project.action";

function Project() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {loading , error , data} = useSelector(store=>store.project)
  const dispatch = useDispatch();
  const [forms, setForms] = useState({
    name: "",
    client: "-",
    tracked: "0.00h",
    amount: "0.00 USD",
    progress: "-",
    access: "Public",
  });

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const handleChange = (e) => {
    const { name: key, value } = e.target;
    setForms({
      ...forms,
      [key]: value,
      client: "-",
      tracked: "0.00h",
      amount: "0.00 USD",
      progress: "-",
      access: "Public",
    });
  };

  useEffect(() => {
    dispatch(getProjectapi())
  }, []);

  const handleClick = () => {
    dispatch(projectPostApi(forms));
    onClose();
  };

  return (
    <div style={{ padding:"10px" , backgroundColor:"white" , marginTop:"100px" , width:"70%" , margin:"auto"}}>
      <Box>
        <Flex>
          <Box>
            <h1>Projects</h1>
          </Box>
          <Spacer />
          <Box>
            <Button
              onClick={onOpen}
              style={{ backgroundColor: "#03a4f9", color: "white" }}
            >
              CREATE NEW PROJECT
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
                      placeholder="Enter project name"
                    />
                  </FormControl>

                  <FormControl mt={4}>
                    <Select placeholder="Select client">
                      <option value="option1">No clients yet </option>
                    </Select>
                    <Select placeholder="No template">
                      <option value="option1">Upgrade to use template</option>
                    </Select>
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
                <Th>CLIENT</Th>
                <Th>TRACKED</Th>
                <Th>AMOUNT</Th>
                <Th>PROGRESS</Th>
                <Th>ACCESS</Th>
              </Tr>
            </Thead>
            {data.map((el) => (
              <Tbody key={el._id}>
                <Tr >
                  <Td>{el.name}</Td>
                  <Td>{el.client}</Td>
                  <Td>{el.tracked}</Td>
                  <Td>{el.amount}</Td>
                  <Td>{el.progress}</Td>
                  <Td>{el.access}</Td>
                </Tr>
              </Tbody>
            ))}
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
}

export default Project;
