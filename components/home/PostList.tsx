import {
  Text,
  VStack,
} from "@chakra-ui/react"
import { PostWithId } from "../../types"
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
        <Text>No post yet. Log in and click on the Add button to make the first one!</Text>
      )}
    </VStack>
  )
}

export default PostList