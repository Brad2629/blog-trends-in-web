import { Icon, TriangleUpIcon } from "@chakra-ui/icons"
import { Checkbox, VStack, IconButton, Text, StackDivider, HStack } from "@chakra-ui/react"
import { collection, deleteDoc, doc, updateDoc } from "firebase/firestore"
import { PostWithId } from "../../types"
import { db } from "../../util/firebase"
import { AiOutlineHeart } from 'react-icons/ai';

type Props = {
  readonly post: PostWithId
}

const PostItem = ({ post: { id, title, text, likes } }: Props) => {

  return (
    <HStack>
      <Icon as={AiOutlineHeart} />
      <VStack style={{
        backgroundColor: "white", borderWidth: 2,
        borderColor: "linear(to-r, cyan.700, purple.500)",
        borderRadius: 10
      }} w="100%" divider={<StackDivider borderColor='black' />}>
        <Text width="800px" style={{
          fontSize: "30px"
        }} >
          {title}
        </Text>
        <Text width="800px">
          {text}
        </Text>
      </VStack >
    </HStack>
  )
}

export default PostItem