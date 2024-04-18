// Complete the Index page component for Blixt's personal website
import { Box, Text, Link, Icon, VStack } from "@chakra-ui/react";
import { FaTwitter, FaGithub } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="blue.800" color="white" minH="100vh" p={8} textAlign="center">
      <VStack spacing={4} justify="center" align="center" h="100%">
        <Text fontSize="xl" fontWeight="bold">
          Making software more fun
        </Text>
        <Text>I’m currently exploring ways to make interacting with computers more fun, with a little help from AI.</Text>
        <Box>
          <Link href="https://twitter.com/blixt" isExternal mx={2}>
            <Icon as={FaTwitter} w={6} h={6} />
          </Link>
          <Link href="https://github.com/blixt" isExternal mx={2}>
            <Icon as={FaGithub} w={6} h={6} />
          </Link>
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;
