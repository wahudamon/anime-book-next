import { useState } from "react";
import { Container, Heading, Button, SimpleGrid, Box } from "@chakra-ui/react";
import Section from "./Section";
import { GridItem } from "./GridItem";

export const Grid = ({ title, data }) => {
  const [showAll, setShowAll] = useState(false);
  const changeShowAllValue = () => {
    setShowAll(!showAll);
  };

  if (data && data.error)
    return (
      <Container maxW="container.xl">
        <Container
          maxW="container.xl"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Heading as="h3" fontSize={20} mt={8} mb={4}>
            {title}
          </Heading>
          <Button
            disabled
            mt={3}
            size="sm"
            background="#F6DFEB"
            color="blackAlpha.900"
            _hover={{ background: "#F6DFEB", color: "blackAlpha.900" }}
            _active={{ background: "#F6DFEB" }}
          >
            Show All
          </Button>
        </Container>

        <Box textAlign="center">
          <Heading as="h2">An error has occured.</Heading>
        </Box>
      </Container>
    );

  if (!data)
    return (
      <Container maxW="container.xl">
        <Container
          maxW="container.xl"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Heading as="h3" fontSize={20} mt={8} mb={4}>
            {title}
          </Heading>
          <Button
            disabled
            mt={3}
            size="sm"
            background="#F6DFEB"
            color="blackAlpha.900"
            _hover={{ background: "#F6DFEB", color: "blackAlpha.900" }}
            _active={{ background: "#F6DFEB" }}
          >
            Show All
          </Button>
        </Container>

        <Box textAlign="center">
          <Heading as="h2">Loading...</Heading>
        </Box>
      </Container>
    );

  if (data)
    return (
      <Container maxW="container.xl">
        <Container
          maxW="container.xl"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Heading as="h3" fontSize={20} mt={8} mb={4}>
            {title}
          </Heading>
          {data && data.data.length >= 5 ? (
            <Button
              mt={3}
              size="sm"
              background="#F6DFEB"
              color="blackAlpha.900"
              _hover={{ background: "#E4BAD4", color: "whiteAlpha.900" }}
              _active={{ background: "#F6DFEB", color: "whiteAlpha.900" }}
              onClick={changeShowAllValue}
            >
              {showAll ? "Show Less" : "Show All"}
            </Button>
          ) : null}
        </Container>

        <SimpleGrid columns={[1, 3, 5]} gap={8}>
          {showAll
            ? data.data.map((data: any, index: number) => {
                return (
                  <Section key={index}>
                    <GridItem
                      id={`${data.mal_id}`}
                      title={
                        data.title_english ? data.title_english : data.title
                      }
                      thumbnail={data.images.jpg.image_url}
                    />
                  </Section>
                );
              })
            : data.data.slice(0, 5).map((data: any, index: number) => {
                return (
                  <Section key={index}>
                    <GridItem
                      id={`${data.mal_id}`}
                      title={
                        data.title_english ? data.title_english : data.title
                      }
                      thumbnail={data.images.jpg.image_url}
                    />
                  </Section>
                );
              })}
        </SimpleGrid>
      </Container>
    );
};
