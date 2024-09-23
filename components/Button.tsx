"use client";
import { FaArrowRightLong } from "react-icons/fa6";
import { Button } from "./ui/button";
import { VariantProps } from "class-variance-authority";

const ButtonComponent = ({
  text,
  icon = false,
  fill,
}: {
  text: string;
  icon?: boolean;
  fill?: "destructive" | "outline" | "secondary";
}) => {
  return (
    <div>
      <Button className="rounded-full " variant={fill}>
        {text}
        {icon && <FaArrowRightLong className="ml-4" />}
      </Button>
    </div>
  );
};

export default ButtonComponent;
