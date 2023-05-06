import React from "react"
import NextLink from "next/link"
import { Box, Button, HStack, Link } from "@chakra-ui/react"
import { EditIcon } from "@chakra-ui/icons"
import { useRouter } from "next/router"
import { useAuth } from "../auth/AuthUserProvider"
import { signInWithGoogle, signOut } from "../../util/firebase"

type NavLinkData = {
  name: string
  path: string
}

const navData: NavLinkData =
{
  name: "Home",
  path: "/",
}

const addData: NavLinkData =
{
  name: "Add",
  path: "/add",
}


const NavLink = ({ name, path }: NavLinkData) => {
  const { pathname: currentPath } = useRouter()
  return (
    <NextLink key={path} href={path} passHref legacyBehavior>
      <Link
        _hover={{
          textDecoration: "none",
        }}
        tabIndex={-1}
      >
        <Button
          _focusVisible={{ shadow: "outline" }}
          _focus={{ shadow: "none" }}
          colorScheme={"facebook"}
          variant={currentPath === path ? "solid" : "ghost"}
        >
          {name}
        </Button>
      </Link>
    </NextLink>
  )
}

const AddLink = ({ name, path }: NavLinkData) => {
  const { pathname: currentPath } = useRouter()
  return (
    <NextLink key={path} href={path} passHref legacyBehavior>
      <Link
        _hover={{
          textDecoration: "none",
        }}
        tabIndex={-1}
      >
        <Button
          rightIcon={<EditIcon />}
          _focusVisible={{ shadow: "outline" }}
          _focus={{ shadow: "none" }}
          colorScheme={"facebook"}
          variant={currentPath === path ? "solid" : "ghost"}
        >
          {name}
        </Button>
      </Link>
    </NextLink>
  )
}

const Navbar = () => {
  const { user } = useAuth()
  return (
    <Box px={4} shadow="base">
      <HStack justifyContent="space-between">
        <HStack h={14} as="nav" spacing={4} alignItems="center">
          <NavLink {...navData} />
        </HStack>
        <HStack>
          <HStack h={14} as="nav" spacing={4} alignItems="center">
            <AddLink {...addData} />
          </HStack>
          <Button
            _focusVisible={{ shadow: "outline" }}
            _focus={{ shadow: "none" }}
            colorScheme={"facebook"}
            variant={"ghost"}
            onClick={user ? signOut : signInWithGoogle}
          >
            {user ? "Sign Out" : "Sign In"}
          </Button>
        </HStack>
      </HStack>
    </Box>
  )
}

export default Navbar
