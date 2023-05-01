export type Post = {
  title: string
  text: string
  likes: number
}

export type PostId = {
  id: string
}

export type PostWithId = Post & PostId
