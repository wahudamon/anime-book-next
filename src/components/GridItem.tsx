import Link from "next/link";
import { Box, Image, Text, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";

export const GridItem = ({ id, title, thumbnail }) => {
  return (
    <Box w="100%" h="100%" textAlign="center">
      <Global
        styles={css`
          .grid-item-thumbnail {
            display: block;
            border-radius: 20px;
          }

          .grid-item-overlay {
            padding: 0 10px 0 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            color: white;
          }

          .grid-item-overlay--primary {
            border-radius: 20px;
            background-color: #e4bad4;
          }

          .grid-item-overlay > * {
            transform: translateY(20px);
            transition: transform 0.25s;
          }

          .grid-item-overlay:hover {
            opacity: 1;
          }

          .grid-item-overlay:hover > * {
            transform: translateY(0);
          }
        `}
      />
      <Link as={`/detail/${id}`} href={`/detail/${id}`}>
        <LinkBox cursor="pointer" position="relative">
          <Image
            className="grid-item-thumbnail"
            display="block"
            src={thumbnail}
            alt={title}
            boxSize="xs"
            fit="cover"
          />
          <LinkOverlay
            className="grid-item-overlay grid-item-overlay--primary"
            href={id}
            target="_blank"
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            textAlign="center"
            opacity="0"
            transition="opacity 0.25s"
          >
            <Text fontWeight="bold" colorScheme="blackAlpha" mt={2}>
              {title.length > 60 ? `${title.slice(0, 60)}...` : title}
            </Text>
          </LinkOverlay>
        </LinkBox>
      </Link>
    </Box>
  );
};
