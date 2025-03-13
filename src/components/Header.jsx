import { Box, Text, Flex } from "@chakra-ui/react";

const Header = () => {
  return (
<Box 
      position="relative" 
      top="0" 
      left="0" 
      right="0" 
      height="350px" r
      bgImage="url('src/assets/icons/learningbg7.jpeg')"
      bgSize="cover" 
      bgPosition="center"
      opacity={0.9}
      zIndex="-1" 
      px={["5%", "15%"]} 
      py="20px" 
    >
      <Flex justify="center" align="center" height="100%">
        <Text fontSize="50px" fontWeight="bold" color="#FFF"> 
          E-Learning Platform
        </Text>
      </Flex>
    </Box>
  );
};

export default Header;