import { Badge, Button, Flex, Spinner, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";

const Repos = ({ reposUrl }) => {
  const toast = useToast();
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const res = await fetch(reposUrl);
        const data = await res.json();
        if (data.message) throw new Error(data.message);
        setRepos(data);
      } catch (error) {
        toast({
          title: "Error",
          description: error.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [reposUrl, toast]);

  return (
    <>
      <Text
        textAlign={"center"}
        letterSpacing={1.5}
        fontSize={{ base: "2xl", md: "3xl" }}
        fontWeight={"bold"}
        color={"green.400"}
        mt={4}
      >
        REPOSITORIES
      </Text>
      {loading && (
        <Flex justifyContent={"center"}>
          <Spinner size={"xl"} my={4} />
        </Flex>
      )}

      {repos
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .map((repo, idx) => {
          if (idx > 4 && !showMore) return null;
          return (
            <Flex
              key={repo.id}
              padding={4}
              bg={"whiteAlpha.200"}
              _hover={{ bg: "whiteAlpha.400" }}
              my={4}
              px={{ base: 4, md: 10 }}
              gap={4}
              borderRadius={4}
              transition={"all 0.3s ease"}
              flexDirection={{ base: "column", md: "row" }}
              justifyContent={{ base: "center", md: "space-between" }}
              alignItems={{ base: "center", md: "flex-start" }}
            >
              <Flex
                flex={{ base: 1, md: 1 }}
                direction={"column"}
                mb={{ base: 4, md: 0 }}
                textAlign={{ base: "center", md: "left" }}
              >
                <Link href={repo.html_url} fontSize={{ base: "md", md: "lg" }} fontWeight={"bold"} display="block">
                  {repo.name}
                </Link>
                <Badge
                  fontSize={{ base: "sm", md: "0.7em" }}
                  colorScheme={"whatsapp"}
                  w={"min-content"}
                  textAlign={"center"}
                  px={{ base: 1, md: 2 }}
                  mt={1}
                >
                  Language: {repo.language || "None"}
                </Badge>
              </Flex>

              <Flex flex={{ base: 1, md: 1 }} gap={4} ml={{ base: 0, md: 6 }} textAlign={{ base: "center", md: "left" }}>
                <Badge fontSize={{ base: "sm", md: "0.9em" }} colorScheme="orange" flex={1}>
                  Stars: {repo.stargazers_count}
                </Badge>
                <Badge fontSize={{ base: "sm", md: "0.9em" }} colorScheme="pink" flex={1}>
                  Forks: {repo.forks_count}
                </Badge>
                <Badge fontSize={{ base: "sm", md: "0.9em" }} colorScheme="cyan" flex={1}>
                  Watchers: {repo.watchers_count}
                </Badge>
              </Flex>
            </Flex>
          );
        })}

      {showMore && (
        <Flex justifyContent={"center"} my={4}>
          <Button size={{ base: "md", md: "lg" }} colorScheme='whatsapp' onClick={() => setShowMore(false)}>
            Show Less
          </Button>
        </Flex>
      )}

      {!showMore && repos.length > 5 && (
        <Flex justifyContent={"center"} my={4}>
          <Button size={{ base: "md", md: "lg" }} colorScheme='whatsapp' onClick={() => setShowMore(true)}>
            Show More
          </Button>
        </Flex>
      )}
    </>
  );
};

export default Repos;
