import { Box, Text } from "@chakra-ui/react";

const TabPanelGridItem = ({ title, content }) => (
  <Box display="grid" gridTemplateColumns="10% 90%">
    <Text as="p" fontSize="18pt" fontWeight="bold">
      {title}
    </Text>
    <Text as="p" fontSize="18pt">
      {content}
    </Text>
  </Box>
);

export default TabPanelGridItem;
