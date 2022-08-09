import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from "../components/layouts/Main";
import Section from "../components/Section";
import { GridItem } from "../components/GridItem";

import thumbExample from "../assets/images/example.jpg";

export default function Index() {
  return (
    <Layout router="/">
      <Container maxW="container.xl">
        <Heading as="h3" fontSize={20} mt={8} mb={4}>
          Upcoming
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <GridItem id="example" title="Example" thumbnail={thumbExample}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
              esse sunt porro aut. Quam, sunt quos commodi quisquam atque
              placeat tempora assumenda, maiores debitis dolore, sint minus
              quidem consequatur eos.
            </GridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
}
