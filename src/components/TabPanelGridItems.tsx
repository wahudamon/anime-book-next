import { Box } from "@chakra-ui/react";

const TabPanelGridItems = ({ children }) => (
  <Box display="flex" flexDir="column">
    {children}
  </Box>
);

export default TabPanelGridItems;
