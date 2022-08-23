import { Box, Container, Image } from "@chakra-ui/react";
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

  // add skeleton loader for good user experience
  if (!animeDetailsData) {
    return (
      <Layout title="Anime Details" router="/">
        <Container mt={8} maxW="container.xl">
          <p>Getting data, please wait...</p>
        </Container>
      </Layout>
    );
  }

  if (animeDetailsData) {
    // console.log(animeDetailsData.data);
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
          zIndex={15}
          background="pink.700"
          color="whiteAlpha.900"
        >
          <p>{animeDetailsData.data.title}</p>
        </Container>
      </Layout>
    );
  }
}
