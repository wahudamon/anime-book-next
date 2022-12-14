import { Logo } from "./Logo";
import NextLink from "next/link";
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
// import ThemeTogglerButton from "./ThemeTogglerButton";

const LinkItem = ({ href, path, children }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray.600", "whiteAlpha.900");

  return (
    <NextLink href={href}>
      <Link
        p={2}
        color={active ? "#FA8072" : inactiveColor}
        fontWeight={active ? "bold" : "normal"}
      >
        {children}
      </Link>
    </NextLink>
  );
};

export default function Navbar(props) {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#F6DFEB", "#20202380")}
      style={{ backdropFilter: "blur(10px)" }}
      zIndex={50}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.xl"
        flexWrap="wrap"
        justifyContent="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
          pt={2}
        >
          {/* <LinkItem href="/anime" path={path}>
            Anime
          </LinkItem> */}
          <LinkItem href="/about" path={path}>
            About
          </LinkItem>
        </Stack>

        <Box pt={1}>
          <Box
            mx={2}
            display={{ base: "inline-block", md: "none" }}
            float="right"
          >
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                borderColor={useColorModeValue("silver", "grey")}
                aria-label="Options"
              />
              <MenuList>
                {/* <NextLink href="/anime" passHref>
                  <MenuItem as={Link}>Anime</MenuItem>
                </NextLink> */}
                <NextLink href="/about" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
          {/* <Box float="right">
            <ThemeTogglerButton />
            </Box> */}
        </Box>
      </Container>
    </Box>
  );
}
