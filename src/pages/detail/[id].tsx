import { Box, Container, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Layout from "../../components/layouts/Main";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { getAnimeDetails } from "../../lib/api";

export default function AnimeDetail() {
  const router = useRouter();
  const { id } = router.query;
  let animeDetailsData = null;

  if (id) {
    const { data } = getAnimeDetails(id.toString());
    animeDetailsData = data;

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
      const animeTitle = animeDetailsData.data.title.toString();
      const animeTitleEnglish = animeDetailsData.data.title_english?.toString();

      // console.log(animeDetailsData.data);
      return (
        <Layout title={animeDetailsData.data.title} router="/">
          <Container marginX={0} p={0} maxW="full">
            <Box position="relative" top={2} zIndex={5} w="full">
              {animeDetailsData.data.trailer.images.maximum_image_url ? (
                <Image
                  src={animeDetailsData.data.trailer.images.maximum_image_url}
                  w="full"
                  h="lg"
                  filter="blur(4px)"
                />
              ) : (
                <Box w="full" h="md"></Box>
              )}

              <Box
                position="absolute"
                top={0}
                left={0}
                w="100%"
                h="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                background="#F6DFEB"
                opacity={
                  animeDetailsData.data.trailer.images.maximum_image_url
                    ? 0.6
                    : 1
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
              position="relative"
              left={0}
              marginX={0}
              paddingX={0}
              pl={4}
              pb={4}
              maxW="full"
              h="full"
              zIndex={15}
              background="#F6DFEB"
            >
              <Box display="grid" gridTemplateColumns="300px auto auto" gap={6}>
                <Box mt={-20} maxW="fit-content">
                  <Image
                    src={animeDetailsData.data.images.jpg.image_url}
                    w="300px"
                    h="400px"
                    fit="cover"
                    borderRadius="14px"
                  />
                </Box>
                <Box display="flex" flexDirection="column">
                  <Box mt={animeTitleEnglish ? -16 : -10}>
                    {animeTitle && animeTitleEnglish ? (
                      <div>
                        <h2 style={{ fontWeight: "bold", fontSize: "24px" }}>
                          {animeTitleEnglish.length > 60
                            ? `${animeTitleEnglish.slice(0, 60)}...`
                            : animeTitleEnglish}
                        </h2>
                        <p style={{ fontStyle: "italic" }}>
                          {animeTitle.length > 60
                            ? `${animeTitle.slice(0, 60)}...`
                            : animeTitle}
                        </p>
                      </div>
                    ) : (
                      <h2 style={{ fontWeight: "bold", fontSize: "24px" }}>
                        {animeTitle.length > 60
                          ? `${animeTitle.slice(0, 60)}...`
                          : animeTitle}
                      </h2>
                    )}
                  </Box>
                  <Box>
                    <Box
                      mt="8px"
                      display="flex"
                      gap={2}
                      alignItems="flex-end"
                      justifyContent="space-between"
                      width="container.lg"
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
                        <h3>
                          Status:&nbsp;
                          {animeDetailsData.data.status
                            ? animeDetailsData.data.status
                            : "NA"}
                        </h3>
                        <h3>
                          Rank:&nbsp;
                          {animeDetailsData.data.rank
                            ? `#${animeDetailsData.data.rank}`
                            : "NA"}
                        </h3>
                        <h3>
                          Popularity:&nbsp;
                          {animeDetailsData.data.popularity
                            ? `#${animeDetailsData.data.popularity}`
                            : "NA"}
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
                      ? `${animeDetailsData.data.scored_by.toLocaleString(
                          "id"
                        )} Users`
                      : "0 Users"}
                  </p>
                </Box>
              </Box>
            </Container>
          </Container>
        </Layout>
      );
    }
  }
}
