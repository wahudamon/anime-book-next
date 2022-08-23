import { Box, Container, Image } from "@chakra-ui/react";
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

  // add skeleton loader for good user experience
  if (!animeDetailsData) {
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
            Getting data, please wait...
          </h2>
        </Container>
      </Layout>
    );
  }

  if (animeDetailsData && !animeDetailsData.error) {
    console.log(animeDetailsData.data);
    return (
      <Layout title={animeDetailsData.data.title} router="/">
        <Box position="fixed" top={0} left={0} w="100%" zIndex={5}>
          <Image
            src={animeDetailsData.data.trailer.images.maximum_image_url}
            width="full"
            height="xl"
          />
          <Box
            position="absolute"
            top={0}
            left={0}
            w="100%"
            h="100%"
            background="#F6DFEB"
            opacity={0.6}
          ></Box>
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
          <Box position="absolute" left={5} top={-20}>
            <Image
              src={animeDetailsData.data.images.jpg.image_url}
              w="200px"
              h="300px"
              fit="cover"
              borderRadius="14px"
            />
          </Box>
          <Box ml="18%" display="flex">
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
