import { Container } from "@chakra-ui/react";
import Layout from "../components/layouts/Main";

import { getTodayReleases, getUpcoming } from "../lib/api";
import { Grid } from "../components/Grid";
import { LoadingSpinner } from "../components/LoadingSpinner";

export default function Index() {
  const { upcomingDatas } = getUpcoming();
  const { todayDatas } = getTodayReleases();

  if (!upcomingDatas || !todayDatas) {
    return (
      <Layout title="Home" router="/">
        <LoadingSpinner />
      </Layout>
    );
  }

  return (
    <Layout title="Home" router="/">
      <Container maxW="container.xl">
        <Grid title="Today's Releases" data={todayDatas} />
        <Grid title="Upcoming" data={upcomingDatas} />
      </Container>
    </Layout>
  );
}
