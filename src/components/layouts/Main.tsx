import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "../Navbar";
// import { NextRouter } from "next/router";

// type Props = {
//   children: React.ReactNode;
//   router: NextRouter;
// };

const Layout = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Home - Anime Book</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="100%" pt={14}>
        {children}
      </Container>
    </Box>
  );
};

export default Layout;
