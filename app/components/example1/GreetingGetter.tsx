
"use client";
import React from "react";
import { usePublicClient } from "wagmi";
import greeterAbi from "@/abi/greeter_abi.json";
import StyledButton from "../ui/StyledButton";

const GreetingGetter = () => {
  const [greeting, setGreeting] = React.useState<string>();
  const publicClient = usePublicClient();
  const greetingGet = async () => {
    const data = await publicClient.readContract({
      address: process.env.NEXT_PUBLIC_EXAMPLE_1_CONTRACT,
      abi: greeterAbi,
      functionName: "greeting",
    });
    setGreeting(data  as string);
  };
  return (
    <div className="flex flex-col justify-center items-center bg-black p-4 rounded-lg border-2 border-gray-600 my-4">
      <h4 className="text-xl font-semibold text-gray-400">Get Greeting</h4>
      <p className="block w-full my-4 text-gray-200">
        <b>Greeting:</b> {greeting}
      </p>
      <StyledButton onClick={greetingGet} color="green">
        Get
      </StyledButton>
    </div>
  );
};

export default GreetingGetter;