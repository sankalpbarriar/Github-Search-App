import { Avatar, Flex, VStack, Button, Badge, Text, Box } from "@chakra-ui/react";
import { TiLocationOutline } from "react-icons/ti";
import Repos from "./Repos";

const UserProfile = ({ userData }) => {
  return (
    <>
      <Flex
        direction={{ base: "column", md: "row" }}
        my={16}
        border={"2px solid"}
        borderColor={"green.500"}
        borderRadius={4}
        padding={{ base: 4, md: 8 }}
      >
        <VStack
          gap={5}
          mb={{ base: 4, md: 0 }}
          mr={{ base: 0, md: 8 }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Avatar size={"2xl"} name={userData.name} src={userData.avatar_url} />
          <Button colorScheme="whatsapp" mt={4} width={{ base: "100%", md: "auto" }}>
            <a href={userData.html_url} target="_blank" style={{ width: "100%" }}>
              View Profile
            </a>
          </Button>
        </VStack>
        <VStack alignItems={{ base: "center", md: "self-start" }} textAlign="left">
          <Flex
            gap={4}
            flexWrap={{ base: "wrap", md: "nowrap" }}
            justifyContent={{ base: "center", md: "flex-start" }}
          >
            <Badge fontSize={"0.9em"} colorScheme="orange">
              Public repos: {userData.public_repos}
            </Badge>
            <Badge fontSize={"0.9em"} colorScheme="pink">
              Public Gists: {userData.public_gists}
            </Badge>
            <Badge fontSize={"0.9em"} colorScheme="cyan">
              Followers: {userData.followers}
            </Badge>
            <Badge fontSize={"0.9em"} colorScheme="purple">
              Following: {userData.following}
            </Badge>
          </Flex>

          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"} mt={4} color={"green.400"}>
            {userData.name}
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"} mt={4} color={"green.500"}>
            {userData.bio}
          </Text>
          <Box>
            {/* Company */}
            <Text fontSize={"md"}>
              <Text as={"span"} fontWeight={"bold"} color={"green.200"} mr={1}>
                Company:
              </Text>
              {userData.company || "Not Specified"}
            </Text>

            {/* Location */}
            <Text fontSize={"md"}>
              <Text as={"span"} fontWeight={"bold"} color={"green.200"} mr={1}>
                Location:
              </Text>
              {userData.location || "Not Specified"}
            </Text>

            {/* Blog */}
            <Text fontSize={"md"}>
              <Text as={"span"} fontWeight={"bold"} color={"green.200"} mr={1}>
                Blog / Website:
              </Text>
              {userData.blog ? (
                <a href={userData.blog} target="_blank">
                  {userData.blog}
                </a>
              ) : (
                "Not Specified"
              )}
            </Text>

            {/* Member Since */}
            <Text fontSize={"md"}>
              <Text as={"span"} fontWeight={"bold"} color={"green.200"} mr={1}>
                Member since:
              </Text>
              {new Date(userData.created_at).toLocaleDateString()}
            </Text>
          </Box>
        </VStack>
      </Flex>

      {/* REPOS */}
      <Repos reposUrl={userData.repos_url} />
    </>
  );
};

export default UserProfile;
