import { Link as ChakraLink, Text } from "@chakra-ui/react";

import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";

import useSWR from "swr";
import {
  getAnimeCharacters,
  getAnimeDetails,
  getAnimeEpisodes,
  getAnimeVideos,
  getPopularAnime,
  getSeasonalAnimeList,
  getSeasonsList,
  getTodayReleases,
  getUpcoming,
  searchAnimeByTitle,
} from "../lib/queriesList";

const Index = () => {
  // const { data, error } = useSWR(
  //   "https://api.github.com/repos/vercel/swr",
  //   fetcher
  // );

  // if (error) return "An error has occured.";
  // if (!data) return "Loading...";

  // const { data, error } = getAnimeVideos("48895");
  // const { data, error } = getSeasonalAnimeList("2022", "summer", 1);
  // const { data, error } = getSeasonsList();

  // if (data) console.log(data);

  return (
    <Container height="100vh">
      <Hero />
      {/* <Main>
        <Text color="text">Subscribers {data.subscribers_count}</Text>
        <Text color="text">Forks {data.forks_count}</Text>
        <Text color="text">Stargazers {data.stargazers_count}</Text>
      </Main> */}

      <DarkModeSwitch />
      <Footer>
        <Text>Next ❤️ Chakra</Text>
      </Footer>
      <CTA />
    </Container>
  );
};

export default Index;
