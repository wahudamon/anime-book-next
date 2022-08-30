import {
  background,
  Button,
  Container,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import Layout from "../components/layouts/Main";

const NotFound = () => {
  return (
    <Layout title="Page not Found" router="/">
      <Container
        pt="24"
        maxW="container.xl"
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
      >
        <Heading as="h2">Page not Found or Under Construction!</Heading>
        <Link href="/">
          <Button
            mt="4"
            background="#E4BAD4"
            _hover={{ background: "#E4BAD4" }}
            color={useColorModeValue("white", "grey")}
          >
            Back to Home
          </Button>
        </Link>
      </Container>
    </Layout>
  );
};

export default NotFound;
