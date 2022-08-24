import { Box, Container, Spinner } from "@chakra-ui/react";

export const LoadingSpinner = () => (
  <Container mt={8} maxW="container.xl">
    <Box pt={52} display="flex" justifyContent="center" alignItems="center">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Box>
  </Container>
);
