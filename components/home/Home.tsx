import { Post, PostWithId } from "../../types"
import PostList from "./PostList"
import { Heading, Spinner, VStack } from "@chakra-ui/react"
import { collection, onSnapshot, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../util/firebase"

const HomeHeading = () => (
  <Heading
    as="h1"
    w="fit-content"
    bgGradient="linear(to-r, cyan.700, purple.500)"
    bgClip="text"
    lineHeight={1.33}
  >
    HOME
  </Heading>
);

const postQuery = query(collection(db, "posts"))

const Home = () => {
  const [posts, setPosts] = useState<PostWithId[] | null>(null)

  useEffect(() => {
    const unsubscribe = onSnapshot(postQuery, (querySnapshot) => {
      const snapshotPosts: PostWithId[] = querySnapshot.docs.map((doc) => {
        const data = doc.data() as Post
        return { ...data, id: doc.id }
      })
      setPosts(snapshotPosts)
    })
    return unsubscribe
  }, [])

  return (
    <VStack spacing={5}>
      <HomeHeading />
      {posts ? <PostList posts={posts} /> : <Spinner />}
    </VStack>
  );
};

export default Home;

