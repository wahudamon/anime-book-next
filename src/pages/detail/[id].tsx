import { Box, Container, Image, Spinner } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Layout from "../../components/layouts/Main";
import { getAnimeDetails } from "../../lib/api";

export default function AnimeDetail() {
  const router = useRouter();
  const { id } = router.query;

  const { animeDetailsData } = getAnimeDetails(id.toString());

  console.log(animeDetailsData);

  if (animeDetailsData && animeDetailsData.error) {
    return (
      <Layout title="Anime Details" router="/">
        <Container mt={8} maxW="container.xl">
          <h2
            style={{
              fontWeight: "bold",
              fontSize: "24px",
              textAlign: "center",
            }}
          >
            An error has occured.
          </h2>
        </Container>
      </Layout>
    );
  }

  if (!animeDetailsData) {
    return (
      <Layout title="Anime Details" router="/">
        <Container mt={8} maxW="container.xl">
          <Box
            pt={52}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </Box>
        </Container>
      </Layout>
    );
  }

  if (animeDetailsData && !animeDetailsData.error) {
    console.log(animeDetailsData.data);
    return (
      <Layout title={animeDetailsData.data.title} router="/">
        <Box position="fixed" top={0} left={0} w="100%" zIndex={5}>
          {animeDetailsData.data.trailer.images.maximum_image_url ? (
            <Image
              src={animeDetailsData.data.trailer.images.maximum_image_url}
              width="full"
              height="xl"
            />
          ) : (
            <Box></Box>
          )}

          <Box
            position="absolute"
            top={0}
            left={0}
            w="100%"
            h="100%"
            background="#F6DFEB"
            opacity={
              animeDetailsData.data.trailer.images.maximum_image_url ? 0.6 : 1
            }
          >
            {animeDetailsData.data.trailer.images.maximum_image_url ? (
              <div></div>
            ) : (
              <h2
                style={{
                  fontWeight: "bold",
                  fontSize: "24px",
                  textAlign: "center",
                }}
              >
                No Image Available.
              </h2>
            )}
          </Box>
        </Box>
        <Container
          position="fixed"
          left={0}
          top={400}
          maxW="full"
          h="container.md"
          zIndex={15}
          background="#F6DFEB"
          display="flex"
          gap={2}
        >
          <Box mt={-20}>
            <Image
              src={animeDetailsData.data.images.jpg.image_url}
              w="200px"
              h="300px"
              fit="cover"
              borderRadius="14px"
            />
          </Box>
          <Box display="flex">
            {animeDetailsData.data.title ===
              animeDetailsData.data.title_english ? (
              <Box>
                <h2 style={{ fontWeight: "bold", fontSize: "24px" }}>
                  {animeDetailsData.data.title}
                </h2>
              </Box>
            ) : (
              <Box>
                <h2 style={{ fontWeight: "bold", fontSize: "24px" }}>
                  {animeDetailsData.data.title_english}
                </h2>
                <h4 style={{ fontSize: "18px", fontStyle: "italic" }}>
                  {animeDetailsData.data.title}
                </h4>
              </Box>
            )}
          </Box>
        </Container>
      </Layout>
    );
  }
}
