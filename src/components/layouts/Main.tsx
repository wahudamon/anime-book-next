import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "../Navbar";

const Layout = ({ title, children, router }) => {
  const titleText = `${title} - Anime Book`;

  return (
    <Box as="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{titleText}</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container paddingX={0} maxW="100%" pt={14}>
        {children}
      </Container>
    </Box>
  );
};

export default Layout;
