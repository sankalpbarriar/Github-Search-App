import { Box, Flex, Button, useDisclosure } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import HistoryModel from "./HistoryModel";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex justify={"space-between"} py={6} alignItems={"center"}>
      <Box position={"relative"} aspectRatio={5 / 3} minHeight={20}>
        <Image
          src={"/github.svg"}
          fill
          alt="github logo"
          sx={{ filter: "invert(1)" }}
        />
      </Box>
      <Box>
        <Button size="md" colorScheme="whatsapp" onClick={onOpen}>
          Search History
        </Button>
      </Box>
      {isOpen && <HistoryModel isOpen={isOpen} onClose={onClose} />}
    </Flex>
  );
};

export default Navbar;
