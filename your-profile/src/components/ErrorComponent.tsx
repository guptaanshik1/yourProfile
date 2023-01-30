import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
  const error = useRouteError();
  return (
    <Flex justifyContent={"center"} textAlign={"center"} alignItems={"center"}>
      <Text>Page not found</Text>
      <Button>Return To Home Page</Button>
    </Flex>
  );
};

export default ErrorComponent;
