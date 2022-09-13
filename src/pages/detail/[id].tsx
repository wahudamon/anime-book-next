import {
  Box,
  Container,
  Image,
  Link,
  Tab,
  Table,
  TableContainer,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tbody,
  Td,
  Text,
  Tr,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import Layout from "../../components/layouts/Main";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import TabPanelGridItem from "../../components/TabPanelGridItem";
import TabPanelGridItems from "../../components/TabPanelGridItems";
import {
  getAnimeCharacters,
  getAnimeDetails,
  getAnimeEpisodes,
  getAnimeRecommendations,
} from "../../lib/api";
import { Grid } from "../../components/Grid";

export default function AnimeDetail() {
  const router = useRouter();
  const { id } = router.query;
  let animeDetails, animeEpisodes, animeCharacters, animeRecommendations;

  if (id) {
    const { detailsData } = getAnimeDetails(id.toString());
    const { episodesData } = getAnimeEpisodes(id.toString());
    const { charactersData } = getAnimeCharacters(id.toString());
    const { recommendationsData } = getAnimeRecommendations(id.toString());

    animeDetails = detailsData && detailsData.data ? detailsData.data : null;
    animeEpisodes =
      episodesData && episodesData.data ? episodesData.data : null;
    animeCharacters =
      charactersData && charactersData.data ? charactersData.data : null;
    animeRecommendations =
      recommendationsData && recommendationsData.data
        ? recommendationsData.data
        : null;

    // Change recommend.entry to recommend.data
    if (animeRecommendations) {
      animeRecommendations.data = [];
      animeRecommendations.map((recommend) => {
        animeRecommendations.data.push(recommend.entry);
      });
    }

    if (animeDetails && animeDetails.error) {
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

    if (!animeDetails) {
      return (
        <Layout title="Anime Details" router="/">
          <LoadingSpinner />
        </Layout>
      );
    }

    if (animeDetails && !animeDetails.error) {
      const animeTitle = animeDetails.title.toString();
      const animeTitleEnglish = animeDetails.title_english?.toString();

      let genresList = [],
        studiosList = [];

      if (animeDetails.genres.length !== 0)
        animeDetails.genres.map((genre) => genresList.push(genre.name));

      if (animeDetails.studios.length !== 0)
        animeDetails.studios.map((studio) => studiosList.push(studio.name));

      console.log(animeRecommendations);

      return (
        <Layout title={animeDetails.title} router="/">
          <Container marginX={0} p={0} maxW="full">
            <Box position="relative" zIndex={5} w="full">
              {animeDetails.trailer.images.maximum_image_url ? (
                <Image
                  src={animeDetails.trailer.images.maximum_image_url}
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
                  animeDetails.trailer.images.maximum_image_url ? 0.7 : 1
                }
              >
                {animeDetails.trailer.images.maximum_image_url ? (
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
                    src={animeDetails.images.jpg.image_url}
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
                          {animeDetails.status ? animeDetails.status : "NA"}
                        </h3>
                        <h3>
                          Rank:&nbsp;
                          {animeDetails.rank ? `#${animeDetails.rank}` : "NA"}
                        </h3>
                        <h3>
                          Popularity:&nbsp;
                          {animeDetails.popularity
                            ? `#${animeDetails.popularity}`
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
                      {animeDetails.synopsis
                        ? animeDetails.synopsis
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
                    {animeDetails.score
                      ? animeDetails.score
                      : "NA"}
                  </p>
                  <p style={{ fontSize: "14px" }}>
                    {animeDetails.scored_by
                      ? `${animeDetails.scored_by.toLocaleString(
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
                          animeDetails.aired && animeDetails.aired.string
                            ? animeDetails.aired.string
                            : "Not Available"
                        }
                      />
                      <TabPanelGridItem
                        title="Broadcast"
                        content={
                          animeDetails.broadcast &&
                          animeDetails.broadcast.string
                            ? animeDetails.broadcast.string
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
                          animeDetails.season
                            ? animeDetails.season.charAt(0).toUpperCase() +
                              animeDetails.season.slice(1)
                            : "Not Available"
                        }
                      />
                      <TabPanelGridItem
                        title="Type"
                        content={
                          animeDetails.type
                            ? animeDetails.type
                            : "Not Available"
                        }
                      />

                      <TabPanelGridItem
                        title="Rating"
                        content={
                          animeDetails.rating
                            ? animeDetails.rating
                            : "Not Available"
                        }
                      />
                      <TabPanelGridItem
                        title="Episodes"
                        content={
                          animeDetails.episodes
                            ? animeDetails.episodes
                            : "Not Available"
                        }
                      />
                      <TabPanelGridItem
                        title="Duration"
                        content={
                          animeDetails.duration
                            ? animeDetails.duration
                            : "Not Available"
                        }
                      />
                    </TabPanelGridItems>
                  </TabPanel>
                  <TabPanel>
                    {animeEpisodes && animeEpisodes.length ? (
                      <TableContainer>
                        <Table variant="simple">
                          <Tbody>
                            {animeEpisodes.map((episode, index) => (
                              <Tr key={index}>
                                <Td fontWeight="bold" fontSize="18pt">
                                  Episode {episode.mal_id}
                                </Td>
                                <Td fontSize="18pt">{episode.title}</Td>
                                <Td fontStyle="italic" fontSize="18pt">
                                  {episode.title_romanji}
                                </Td>
                                <Td fontStyle="italic" fontSize="18pt">
                                  <StarIcon /> {episode.score}
                                </Td>
                                <Td fontSize="18pt">
                                  {episode.aired.slice(0, 10)}
                                </Td>
                                <Td fontStyle="italic" fontSize="18pt">
                                  <Link href={episode.forum_url} color="purple">
                                    Discussions
                                  </Link>
                                </Td>
                              </Tr>
                            ))}
                          </Tbody>
                        </Table>
                      </TableContainer>
                    ) : (
                      <Text as="p" fontWeight="bold" fontSize="18pt">
                        Not Available.
                      </Text>
                    )}
                  </TabPanel>
                  <TabPanel>
                    <Text as="p" fontWeight="bold" fontSize="18pt">
                      To be announced!
                    </Text>
                  </TabPanel>
                  <TabPanel>
                    <Text as="p" fontWeight="bold" fontSize="18pt">
                      To be announced!
                    </Text>
                  </TabPanel>
                  <TabPanel>
                    {animeRecommendations &&
                    animeRecommendations.data.length !== 0 ? (
                      <Grid
                        title="Similar to this show"
                        data={animeRecommendations}
                      />
                    ) : (
                      <Text as="p" fontWeight="bold" fontSize="18pt">
                        Not Available.
                      </Text>
                    )}
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
