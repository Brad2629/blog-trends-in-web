import { Heading, VStack } from "@chakra-ui/react";
import PostAddControl from "./PostAddControl";

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

const Add = () => {
  return (
    <VStack spacing={4}>
      <AddHeading />
      <PostAddControl />
    </VStack>
  );
};

export default Add;

