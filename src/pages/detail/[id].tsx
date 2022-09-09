import {
  Box,
  Container,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Layout from "../../components/layouts/Main";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import TabPanelGridItem from "../../components/TabPanelGridItem";
import TabPanelGridItems from "../../components/TabPanelGridItems";
import { getAnimeDetails, getAnimeEpisodes } from "../../lib/api";

export default function AnimeDetail() {
  const router = useRouter();
  const { id } = router.query;
  let animeDetailsData, animeEpisodes;

  if (id) {
    const { data } = getAnimeDetails(id.toString());
    const { episodesData } = getAnimeEpisodes(id.toString());

    animeDetailsData = data;
    animeEpisodes =
      episodesData && episodesData.data ? episodesData.data : null;

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

      let genresList = [],
        studiosList = [];

      if (animeDetailsData.data.genres.length !== 0)
        animeDetailsData.data.genres.map((genre) =>
          genresList.push(genre.name)
        );

      if (animeDetailsData.data.studios.length !== 0)
        animeDetailsData.data.studios.map((studio) =>
          studiosList.push(studio.name)
        );

      // console.log(animeDetailsData.data);

      return (
        <Layout title={animeDetailsData.data.title} router="/">
          <Container marginX={0} p={0} maxW="full">
            <Box position="relative" zIndex={5} w="full">
              {animeDetailsData.data.trailer.images.maximum_image_url ? (
                <Image
                  src={animeDetailsData.data.trailer.images.maximum_image_url}
                  w="full"
                  h="md"
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
                    ? 0.7
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
              <Box display="grid" gridTemplateColumns="15% 80% 5%" gap={6}>
                <Box mt={-20} maxW="fit-content">
                  <Image
                    src={animeDetailsData.data.images.jpg.image_url}
                    maxW="200px"
                    maxH="300px"
                    fit="fill"
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
              {/* <Box
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
              </Box> */}
            </Container>
            <Box mt={2}>
              <Tabs isFitted size="lg" variant="line" colorScheme="purple">
                <TabList>
                  <Tab fontWeight="bold">Details</Tab>
                  <Tab fontWeight="bold">Episodes</Tab>
                  <Tab fontWeight="bold">Characters</Tab>
                  <Tab fontWeight="bold">Staffs</Tab>
                  <Tab fontWeight="bold">Recommendations</Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    <TabPanelGridItems>
                      <TabPanelGridItem
                        title="Airing Date"
                        content={
                          animeDetailsData.data.aired &&
                          animeDetailsData.data.aired.string
                            ? animeDetailsData.data.aired.string
                            : "Not Available"
                        }
                      />
                      <TabPanelGridItem
                        title="Broadcast"
                        content={
                          animeDetailsData.data.broadcast &&
                          animeDetailsData.data.broadcast.string
                            ? animeDetailsData.data.broadcast.string
                            : "Not Available"
                        }
                      />
                      <TabPanelGridItem
                        title="Genres"
                        content={
                          genresList.length !== 0
                            ? genresList.join(", ")
                            : "Not Available"
                        }
                      />
                      <TabPanelGridItem
                        title="Studios"
                        content={
                          studiosList.length !== 0
                            ? studiosList.join(", ")
                            : "Not Available"
                        }
                      />
                      <TabPanelGridItem
                        title="Season"
                        content={
                          animeDetailsData.data.season
                            ? animeDetailsData.data.season
                                .charAt(0)
                                .toUpperCase() +
                              animeDetailsData.data.season.slice(1)
                            : "Not Available"
                        }
                      />
                      <TabPanelGridItem
                        title="Type"
                        content={
                          animeDetailsData.data.type
                            ? animeDetailsData.data.type
                            : "Not Available"
                        }
                      />

                      <TabPanelGridItem
                        title="Rating"
                        content={
                          animeDetailsData.data.rating
                            ? animeDetailsData.data.rating
                            : "Not Available"
                        }
                      />
                      <TabPanelGridItem
                        title="Episodes"
                        content={
                          animeDetailsData.data.episodes
                            ? animeDetailsData.data.episodes
                            : "Not Available"
                        }
                      />
                      <TabPanelGridItem
                        title="Duration"
                        content={
                          animeDetailsData.data.duration
                            ? animeDetailsData.data.duration
                            : "Not Available"
                        }
                      />
                    </TabPanelGridItems>
                  </TabPanel>
                  <TabPanel>
                    <p>To be announced!</p>
                  </TabPanel>
                  <TabPanel>
                    <p>To be announced!</p>
                  </TabPanel>
                  <TabPanel>
                    <p>To be announced!</p>
                  </TabPanel>
                  <TabPanel>
                    <p>To be announced!</p>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
          </Container>
        </Layout>
      );
    }
  }
}
