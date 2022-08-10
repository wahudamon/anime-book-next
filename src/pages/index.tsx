import { useState } from "react";
import { Button, Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from "../components/layouts/Main";
import Section from "../components/Section";
import { GridItem } from "../components/GridItem";

import { getUpcoming } from "../lib/queriesList";

export default function Index() {
  const [showAll, setShowAll] = useState(false);
  const { upcomingDatas, upcomingError } = getUpcoming();

  const changeShowAllValue = () => {
    setShowAll(!showAll);
  };

  if (upcomingError) return "An error has occured.";

  if (upcomingDatas)
    return (
      <Layout router="/">
        <Container maxW="container.xl">
          <Heading as="h3" fontSize={20} mt={8} mb={4}>
            Upcoming
            <span>
              <Button
                ml={4}
                size="sm"
                background="#E4BAD4"
                color="whiteAlpha.900"
                onClick={changeShowAllValue}
              >
                Show All
              </Button>
            </span>
          </Heading>

          <SimpleGrid columns={[1, 3, 5]} gap={8}>
            {showAll
              ? upcomingDatas.data.map((data, index) => {
                  return (
                    <Section key={index}>
                      <GridItem
                        id={data.title}
                        title={data.title}
                        thumbnail={data.images.webp.image_url}
                      />
                    </Section>
                  );
                })
              : upcomingDatas.data.slice(0, 5).map((data, index) => {
                  return (
                    <Section key={index}>
                      <GridItem
                        id={data.title}
                        title={data.title}
                        thumbnail={data.images.webp.image_url}
                      />
                    </Section>
                  );
                })}
          </SimpleGrid>
        </Container>
      </Layout>
    );
}
