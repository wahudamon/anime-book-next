import { Container } from "@chakra-ui/react";
import Layout from "../components/layouts/Main";

import { getTodayReleases, getUpcoming } from "../lib/api";
import { Grid } from "../components/Grid";

export default function Index() {
  const { upcomingDatas, upcomingError } = getUpcoming();
  const { todayDatas, todayError } = getTodayReleases();

  return (
    <Layout router="/">
      <Container maxW="container.xl">
        <Grid title="Today's Releases" data={todayDatas} error={todayError} />
        <Grid title="Upcoming" data={upcomingDatas} error={upcomingError} />
      </Container>
    </Layout>
  );
}
