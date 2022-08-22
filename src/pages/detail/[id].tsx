import { Container } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Layout from "../../components/layouts/Main";
import { getAnimeDetails } from "../../lib/api";

export default function AnimeDetail() {
  const router = useRouter();
  const { id } = router.query;

  const { animeDetailsData, animeDetailsError } = getAnimeDetails(
    id.toString()
  );

  if (animeDetailsError) {
    <Layout title="Anime Details" router="/">
      <Container mt={8} maxW="container.xl">
        <p>An error has occured.</p>
      </Container>
    </Layout>;
  }

  if (!animeDetailsData) {
    return (
      <Layout title="Anime Details" router="/">
        <Container mt={8} maxW="container.xl">
          <p>Getting data, please wait.</p>
        </Container>
      </Layout>
    );
  }

  if (animeDetailsData) {
    return (
      <Layout title={animeDetailsData.data.title} router="/">
        <Container mt={8} maxW="container.xl">
          <p>Hello World, {animeDetailsData.data.title}!</p>
        </Container>
      </Layout>
    );
  }
}
