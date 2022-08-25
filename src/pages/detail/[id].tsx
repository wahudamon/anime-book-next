import { Box, Container, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Layout from "../../components/layouts/Main";
import { LoadingSpinner } from "../../components/LoadingSpinner";
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
        <LoadingSpinner />
      </Layout>
    );
  }

  if (animeDetailsData && !animeDetailsData.error) {
    // console.log(animeDetailsData.data);
    return (
      <Layout title={animeDetailsData.data.title} router="/">
        <Box position="fixed" top={0} left={0} w="100%" zIndex={5}>
          {animeDetailsData.data.trailer.images.maximum_image_url ? (
            <Image
              src={animeDetailsData.data.trailer.images.maximum_image_url}
              width="full"
              height="xl"
              filter="blur(4px)"
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
          pb={4}
          maxW="full"
          maxH="full"
          zIndex={15}
          background="#F6DFEB"
        >
          <Box display="grid" gridTemplateColumns="200px auto auto" gap={6}>
            <Box mt={-20} maxW="fit-content">
              <Image
                src={animeDetailsData.data.images.jpg.image_url}
                w="200px"
                h="300px"
                fit="cover"
                borderRadius="14px"
              />
            </Box>
            <Box display="flex" flexDirection="column">
              <Box mt={-10}>
                <h2 style={{ fontWeight: "bold", fontSize: "24px" }}>
                  {animeDetailsData.data.title}
                </h2>
              </Box>
              <Box>
                <Box
                  mt="8px"
                  display="flex"
                  gap={2}
                  alignItems="flex-end"
                  justifyContent="space-between"
                  maxW="container.xl"
                >
                  <h3
                    style={{
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                  >
                    Synopsis
                  </h3>
                  <Box
                    display="flex"
                    gap={4}
                    style={{ fontWeight: "bold", fontSize: "20px" }}
                  >
                    <h3>Status: {animeDetailsData.data.status}</h3>
                    <h3>Rank: {`#${animeDetailsData.data.rank}`}</h3>
                    <h3>
                      Popularity: {`#${animeDetailsData.data.popularity}`}
                    </h3>
                  </Box>
                </Box>
                <p
                  style={{
                    marginTop: "12px",
                    float: "left",
                    fontSize: "14px",
                    textAlign: "justify",
                    fontWeight: "400",
                  }}
                >
                  {animeDetailsData.data.synopsis
                    ? animeDetailsData.data.synopsis
                    : "No synopsis found."}
                </p>
              </Box>
            </Box>
          </Box>
          <Box
            mt={4}
            maxW="fit-content"
            maxH="fit-content"
            background="orange.200"
            borderRadius="14px"
          >
            <Box
              px={4}
              py={2}
              display="flex"
              flexDirection="column"
              textAlign="center"
            >
              <p style={{ fontWeight: "bold", fontSize: "18px" }}>SCORE</p>
              <p style={{ fontWeight: "bold", fontSize: "32px" }}>
                {animeDetailsData.data.score
                  ? animeDetailsData.data.score
                  : "NA"}
              </p>
              <p style={{ fontSize: "14px" }}>
                {animeDetailsData.data.scored_by
                  ? `${animeDetailsData.data.scored_by} Users`
                  : "0 Users"}
              </p>
            </Box>
          </Box>
        </Container>
      </Layout>
    );
  }
}
