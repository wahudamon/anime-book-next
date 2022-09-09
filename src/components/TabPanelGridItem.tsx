import { Box } from "@chakra-ui/react";

const TabPanelGridItem = ({ title, content }) => (
  <Box display="grid" gridTemplateColumns="5% 95%">
    <p>{title}</p>
    <p>{content}</p>
  </Box>
);

export default TabPanelGridItem;
