import React from "react";
import { Button } from "@chakra-ui/react";

interface IProp {
  buttonType: "primary" | "secondary" | "custom";
}

const CustomButton = ({ buttonType }: IProp) => {};

export default Button;
