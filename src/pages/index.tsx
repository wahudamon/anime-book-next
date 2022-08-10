import { Container } from "@chakra-ui/react";
import Layout from "../components/layouts/Main";

import { getUpcoming } from "../lib/api";
import { Grid } from "../components/Grid";

export default function Index() {
  const { upcomingDatas, upcomingError } = getUpcoming();

  if (upcomingError) return "An error has occured.";

  if (upcomingDatas)
    return (
      <Layout router="/">
        <Container maxW="container.xl">
          <Grid
            title="Upcoming"
            data={upcomingDatas.data}
            error={upcomingError}
          />
        </Container>
      </Layout>
    );
}
