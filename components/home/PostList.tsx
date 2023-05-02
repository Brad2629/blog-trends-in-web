import { DeleteIcon } from "@chakra-ui/icons"
import {
  Button,
  Checkbox,
  Container,
  Heading,
  HStack,
  Icon,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react"
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore"
import { PostWithId } from "../../types"
import { db } from "../../util/firebase"
import PostItem from "./PostItem"

type Props = {
  readonly posts: PostWithId[]
}

const PostList = ({ posts }: Props) => {
  return (
    <VStack spacing={5}>
      {posts.length ? (
        posts.map((post) => <PostItem key={post.id} post={post} />)
      ) : (
        <Text>The list is looking kinda empty 👀</Text>
      )}
    </VStack>
  )
}

export default PostList