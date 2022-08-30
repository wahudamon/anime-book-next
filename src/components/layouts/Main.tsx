import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "../Navbar";

const Layout = ({ title, children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title} - Anime Book</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="100%" pt={14}>
        {children}
      </Container>
    </Box>
  );
};

export default Layout;
