import Link from "next/link";
import {
  Button,
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
import { ChevronRightIcon } from "@chakra-ui/icons";

export default function Index() {
  return (
    <Layout router="/">
      <Container>
        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Afwa Bagas Wahuda
            </Heading>
            <p>Human, Software Engineer, Blogger</p>
          </Box>
        </Box>

        <Section delay="0.1s">
          <Heading as="h3" variant="section-title">
            About
          </Heading>
          <Paragraph>
            I&apos;m a Frontend Web Engineer with 3+ years experiences based in
            Indonesia. Eager to explore modern web technologies. Also, would be
            defined as highly motivated, good communication, and fast learner.
            Experienced in Javascript and it&apos;s framework like Vue and Nuxt.
            Currently, i&apos;m learning and tinkering about React, Next.js and
            Typescript by creating personal projects.
          </Paragraph>
          <Paragraph style={{ marginTop: "12px", fontStyle: "italic" }}>
            Currently still looking for a job as a Frontend Engineer for
            Fulltime Remote.
          </Paragraph>
          <Box textAlign="center" my={4}>
            <Link href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="pink">
                My Portfolio
              </Button>
            </Link>
          </Box>
        </Section>
      </Container>
    </Layout>
  );
}
