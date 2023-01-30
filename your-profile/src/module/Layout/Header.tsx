import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Flex
      w={"100%"}
      justifyContent={"space-between"}
      height={"5em"}
      background={"#242424"}
    >
      <Flex>
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxoVYK9gVqDWkfv3blKuxWEO0t9JrH6XSjxg&usqp=CAU"
          alt=""
          p="0.8em"
        />
      </Flex>
      <Flex flexDir={"row"} justifyContent={"space-between"}></Flex>
    </Flex>
  );
};

export default Header;
