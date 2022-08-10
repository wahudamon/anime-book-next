import { useState } from "react";
import { Container, Heading, Button, SimpleGrid } from "@chakra-ui/react";
import Section from "./Section";
import { GridItem } from "./GridItem";

export const Grid = ({ title, data, error }) => {
  const [showAll, setShowAll] = useState(false);
  const changeShowAllValue = () => {
    setShowAll(!showAll);
  };

  if (error)
    return (
      <Container maxW="container.xl">
        <Heading as="h2" fontSize={24} mt={8} mb={4}>
          {title}
        </Heading>
      </Container>
    );

  if (data)
    return (
      <Container maxW="container.xl">
        <Heading as="h3" fontSize={20} mt={8} mb={4}>
          {title}
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
            ? data.map((data, index) => {
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
            : data.slice(0, 5).map((data, index) => {
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
    );
};
