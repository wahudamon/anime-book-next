import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from "../components/layouts/Main";
import Section from "../components/Section";
import { GridItem } from "../components/GridItem";

import { getUpcoming } from "../lib/queriesList";

export default function Index() {
  const { upcomingDatas, upcomingError } = getUpcoming();

  if (upcomingError) return "An error has occured.";

  if (upcomingDatas)
    return (
      <Layout router="/">
        <Container maxW="container.xl">
          <Heading as="h3" fontSize={20} mt={8} mb={4}>
            Upcoming
          </Heading>

          <SimpleGrid columns={[1, 3, 5]} gap={8}>
            {upcomingDatas.data.map((data) => (
              <Section key={data.mal_id}>
                <GridItem
                  id={data.title}
                  title={data.title}
                  thumbnail={data.images.webp.image_url}
                />
              </Section>
            ))}
          </SimpleGrid>
        </Container>
      </Layout>
    );
}
