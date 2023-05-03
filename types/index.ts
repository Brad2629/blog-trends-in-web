export type Post = {
  title: string
  text: string
  likes: number
  owner: string
}

export type PostId = {
  id: string
}

export type PostWithId = Post & PostId
