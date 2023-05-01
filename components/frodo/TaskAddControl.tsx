import { Button, VStack, Input, Textarea, Spacer, HStack } from "@chakra-ui/react";
import { addDoc, collection } from "firebase/firestore";
import { FormEventHandler, useState } from "react";
import { Post } from "../../types";
import { db } from "../../util/firebase";

const TaskAddControl = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const addTask: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (title === "" || text === "") return;
    const post: Post = {
      title: title,
      text: text,
      likes: 0,
    };
    addDoc(collection(db, "posts"), post);
    setTitle("");
    setText("");
  };

  return (
    <form onSubmit={addTask}>
      <VStack shouldWrapChildren spacing={4} alignItems="stretch">
        <Input
          value={title}
          type="title"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          width="600px"
        />
        <Textarea
          value={text}
          placeholder="Description"
          onChange={(e) => setText(e.target.value)}
          width="600px"
          height="200px"
        />
        <Spacer />
        <HStack justifyContent="flex-end">
          <Button type="submit">Post</Button>
        </HStack>
      </VStack>
    </form>
  );
};

export default TaskAddControl;
