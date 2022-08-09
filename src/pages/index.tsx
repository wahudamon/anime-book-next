import Link from "next/link";
import {
  Box,
  Container,
  Heading,
  Icon,
  Image,
  List,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";
import Layout from "../components/layouts/Main";
import Section from "../components/Section";
import Paragraph from "../components/Paragraph";

export default function Index() {
  return (
    <Layout router="/">
      <Container maxW="full">
        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title"></Heading>
            {/* <p>All things about anime now in your hands.</p> */}
          </Box>
        </Box>

        {/* <Section delay="0.1s">
          <Heading as="h3" variant="section-title">
            About
          </Heading>
          <Paragraph>Lorem Ipsum</Paragraph>
        </Section> */}
      </Container>
    </Layout>
  );
}
