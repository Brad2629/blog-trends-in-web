import { Heading, VStack } from "@chakra-ui/react";
import TaskAddControl from "./TaskAddControl";

const AddHeading = () => (
  <Heading
    as="h1"
    w="fit-content"
    bgGradient="linear(to-r, cyan.700, purple.500)"
    bgClip="text"
    lineHeight={1.33}
  >
    ADD A NEW POST
  </Heading>
);

const Frodo = () => {
  return (
    <VStack spacing={4}>
      <AddHeading />
      <TaskAddControl />
    </VStack>
  );
};

export default Frodo;

