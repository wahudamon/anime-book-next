import Link from "next/link";
import { Box, Image, Text, LinkBox, LinkOverlay } from "@chakra-ui/react";
// import { Global } from "@emotion/react";

// export const GridItemStyle = () => {
//   <Global
//     styles={`
//       .grid-item-thumbnail {
//         display: none;
//       }
//     `}
//   />;
// };

export const GridItem = ({ id, title, thumbnail }) => (
  <Box w="100%" h="100%" textAlign="center">
    <Link href={id}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          boxSize="xs"
          fit="cover"
          borderRadius="2xl"
        />
        <LinkOverlay href={id} target="_blank">
          <Text fontWeight="bold" colorScheme="blackAlpha" mt={2}>
            {title}
          </Text>
        </LinkOverlay>
      </LinkBox>
    </Link>
  </Box>
);
