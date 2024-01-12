
import { Box,Flex,Button } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex justify={"space-between"} py={6} alignItems={"center"}>
      <Box position={"relative"} aspectRatio={5/3} minHeight={20}>
        <Image src={"/github.svg"} fill alt="github logo" sx={{filter:"invert(1)"}} />
      </Box>
      <Box>
      <Button size="md" colorScheme="whatsapp">Search History</Button>
      </Box>
    </Flex>
  );
};

export default Navbar;
