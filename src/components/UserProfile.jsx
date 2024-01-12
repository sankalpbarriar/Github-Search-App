import { Avatar, Flex, VStack,Button } from "@chakra-ui/react";
const UserProfile = ({ userData }) => {
  return (
    <>
      <Flex
        my={16}
        border={"2px solid"}
        borderColor={"green.500"}
        borderRadius={4}
        padding={8}
      >
        <VStack gap={5}>
          <Avatar size={"2xl"} name={userData.name} src={userData.avatar_url} />
          <Button  colorScheme='whatsapp'>
            <a href={userData.html_url}  target="_blank">
                View Profile
            </a>
         
          </Button>
        </VStack>
      </Flex>
    </>
  );
};

export default UserProfile;
