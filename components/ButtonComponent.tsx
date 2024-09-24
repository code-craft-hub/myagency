"use client";
import { FaArrowRightLong } from "react-icons/fa6";
import { Button } from "./ui/button";
import { FiPhoneCall } from "react-icons/fi";

const ButtonComponent = ({
  text,
  icon = false,
  call = false,
  fill,
}: {
  text: string;
  icon?: boolean;
  call?: boolean;
  fill?: "destructive" | "outline" | "secondary";
}) => {
  return (
    <div>
      <Button className="rounded-full w-full " variant={fill}>
        {text}
        {icon && <FaArrowRightLong className="ml-4" />}
        {call && <FiPhoneCall className="ml-4 animate-bounce" />}
      </Button>
    </div>
  );
};

export default ButtonComponent;
