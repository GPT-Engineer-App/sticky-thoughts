import { Container, Text, VStack, Heading, Box, Input, Textarea, Button, useToast } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState([]);
  const toast = useToast();

  const handleAddNote = () => {
    if (title.trim() === "" || content.trim() === "") {
      toast({
        title: "Error",
        description: "Title and content cannot be empty.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const newNote = { title, content };
    setNotes([...notes, newNote]);
    setTitle("");
    setContent("");
    toast({
      title: "Note added",
      description: "Your note has been added successfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Note Taking App</Heading>
        <Box width="100%">
          <Input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            mb={2}
          />
          <Textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            mb={2}
          />
          <Button colorScheme="teal" onClick={handleAddNote} width="100%">
            Add Note
          </Button>
        </Box>
        <VStack spacing={4} width="100%" mt={4}>
          {notes.map((note, index) => (
            <Box key={index} p={4} borderWidth="1px" borderRadius="md" width="100%">
              <Heading as="h3" size="md">{note.title}</Heading>
              <Text mt={2}>{note.content}</Text>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;