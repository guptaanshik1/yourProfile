import { Box, Button, color, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Body = () => {
  return (
    <Box
      w={"100%"}
      bgGradient={"linear(to-r, green.200, #242424)"}
      h={"36em"}
      max-height={"40em"}
      position={"relative"}
      justifyContent={"center"}
      alignContent={"center"}
    >
      <Flex
        position={"absolute"}
        w={"45%"}
        height="35%"
        m={"6em 20em"}
        justifyContent={"space-between"}
        alignItems={"center"}
        border={"1px solid black"}
        backgroundColor={"#ffffff"}
        borderRadius={"8px"}
        flexDir={"column"}
        z-zIndex={100}
      >
        <Flex m={"1em"} justifySelf={"center"}>
          <Text fontSize={"2rem"} color={"#242424"}>
            Create Your Social Profile Here
          </Text>
        </Flex>
        <Flex>
          <Button
            backgroundColor={"green.400"}
            border={"1px solid green.400"}
            p={"1.5em"}
            w={"8em"}
            m={"2em"}
            color={"#ffffff"}
            fontWeight={700}
            _hover={{ color: "#242424", border: "1px solid #ffffff" }}
          >
            Check In
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Body;
