import { Icon, TriangleUpIcon } from "@chakra-ui/icons"
import {
  Checkbox,
  VStack,
  IconButton,
  Text,
  HStack,
  Box,
} from "@chakra-ui/react"
import { collection, deleteDoc, doc, updateDoc } from "firebase/firestore"
import { PostWithId } from "../../types"
import { db } from "../../util/firebase"
import { AiOutlineHeart } from "react-icons/ai"
import { AiFillHeart } from "react-icons/ai"
import { useAuth } from "../auth/AuthUserProvider"
import { useState } from "react"

type Props = {
  readonly post: PostWithId
}

const PostItem = ({ post: { id, title, text, likes, owner } }: Props) => {
  const { user } = useAuth()
  const [liked, setLiked] = useState(false)

  const toggleLike = () => {
    setLiked(!liked)
  }
  const iconFontSize = "24px"
  return (
    <Box position="relative">
      <IconButton
        aria-label="Like post"
        icon={
          liked ? (
            <AiFillHeart fontSize={iconFontSize} />
          ) : (
            <AiOutlineHeart fontSize={iconFontSize} />
          )
        }
        position="absolute"
        right={4}
        top={4}
        zIndex={1}
        onClick={toggleLike}
        color={liked ? "red" : undefined}
        bg="white"
        boxSize={iconFontSize}
      />
      <VStack
        style={{
          backgroundColor: "white",
          borderWidth: 2,
          borderColor: "linear(to-r, cyan.700, purple.500)",
          borderRadius: 10,
        }}
        w="100%"
      >
        <VStack align="start" spacing={0} ml={4}>
          <Text
            bgGradient="linear(to-r, cyan.700, purple.500)"
            bgClip="text"
            lineHeight={1.33}
            width="800px"
            fontSize="30px"
          >
            {title}
          </Text>
            <Text fontSize="small" color="gray.500">
              from {owner}
            </Text>
          <Box borderTop="1px solid" borderColor="gray.200" pt={1}>
          <Text fontStyle="italic" mt={2}>
            {text}
          </Text>
          </Box>
        </VStack>
      </VStack>
    </Box>
  )
}

export default PostItem


