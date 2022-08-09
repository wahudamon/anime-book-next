import Link from "next/link";
import Image from "next/image";
import { Box, Text, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { Global } from "@emotion/react";

export const GridItemStyle = () => {
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px
      }
    `}
  />;
};

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <Link href={href}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
          loading="lazy"
        />
        <LinkOverlay href={href} target="_blank">
          <Text mt={2}>{title}</Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </Link>
  </Box>
);
