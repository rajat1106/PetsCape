import React,{useState} from "react";
import { Flex, Text, Box, Image } from "@chakra-ui/react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar, styled, Modal, TextField } from "@mui/material";
import CustomButton from "../../components/custom-button/customButton.component";

const requestData = {
  title: "This is a request title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id risus sed enim ullamcorper scelerisque luctus et velit. Phasellus in arcu ac metus dictum pretium. Ut arcu purus, dictum quis urna in, finibus fringilla elit. Aliquam ex dui, vestibulum sit amet turpis vel, dictum volutpat nisl. Aliquam tincidunt condimentum arcu ut mollis. Vestibulum a vestibulum urna. Nam at pharetra ante, nec fringilla nisi.",
};

const ImageBox = styled("div")(({ url }) => ({
  width: "30%",
  height: "200px",
  backgroundImage: `url('${url}')`,
  backgroundPosition: "center",
  backgroundSize: "cover",
}));

const RequestOverview = ({ request }) => {
  const [isAccepted, setIsAccepted] = useState(false);


  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Flex alignItems="center">
          <Avatar src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
          <Text marginLeft="20px">{request.title}</Text>
        </Flex>
      </AccordionSummary>
      <AccordionDetails>
        <Flex width="100%" direction="column">
          <Text margin="0 0 20px 0">{request.description}</Text>
          <Text fontWeight={700}>
            From 23 March 2022, 8:00 pm to 26 March 2022, 8:00 pm{" "}
          </Text>
          <Flex margin="20px 0 0 0 ">
            <CustomButton
              sx={{
                width: "25%",
                backgroundColor: "#009688",
                marginRight: "30px",
                "&:hover": { backgroundColor: "#009688" },
              }}
              simple
                onClick={() => {
                  setIsAccepted(true);
                }}
            >
              ACCEPT
            </CustomButton>
            <CustomButton
              sx={{
                width: "25%",
                backgroundColor: "#D32F2F",
                "&:hover": { backgroundColor: "#D32F2F" },
              }}
              simple
              //   onClick={() => {
              //     rejectHost({ _id: selectedHost._id });
              //   }}
            >
              REJECT
            </CustomButton>
          </Flex>
          {
              isAccepted?
              <Flex direction="column" width="40%" margin="20px 0"> 
                <Text fontSize="1.2em">Please set a rate and total amout for your quoatation</Text>
                <TextField sx={{margin:'10px 0'}} label="Total amount" placeholder="$300"/>
                <TextField sx={{margin:'10px 0'}} label="Fare" placeholder="$20/hr" />
                <CustomButton simple>SET</CustomButton>

              </Flex>:null
          }
        </Flex>
      </AccordionDetails>
    </Accordion>
  );
};

const HostRequest = () => {
  return (
    <Flex direction="column" alignItems="center">
      <Box padding="20px" width="90%">
        <Text fontSize="2em">YOUR RECENT REQUESTS:</Text>
        <Flex direction="column" padding="20px 0px">
          <RequestOverview request={requestData} />
        </Flex>
      </Box>
    </Flex>
  );
};

export default HostRequest;