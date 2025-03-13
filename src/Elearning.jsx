import { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Image,
  Flex,
  Center,
  Button,
  Icon,
  ScaleFade,
} from "@chakra-ui/react";
import { IoArrowDownSharp } from "react-icons/io5";
import { PiPlayFill } from "react-icons/pi";

export const ElearningSection = () => {
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState("");
  const [pageCount, setPageCount] = useState(0);
  const [perPage] = useState(20);
  const [videoId, setVideoId] = useState("");

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = () => {
    const nextPageTokenParam = nextPageToken ? `&pageToken=${nextPageToken}` : "";
    fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,id&order=date&maxResults=${perPage}&key=AIzaSyDa8RapuEe8EperfOGwBEoyAhr5JMh-F6g&playlistId=UUp4BnNoGAAzJWkyjhLe_L2w${nextPageTokenParam}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data && data.items) {
          setVideos(data.items);
          setNextPageToken(data.nextPageToken || "");
          if (!pageCount && data.pageInfo) {
            setPageCount(Math.ceil(data.pageInfo.totalResults / perPage));
            setVideoId(data.items[0].snippet.resourceId.videoId);
          }
        } else {
          console.error("Error: No video data found in API response");
        }
      })
      .catch((error) => {
        console.error("Error fetching videos:", error);
      });
  };

  const handlePageClick = () => {
    setNextPageToken("");
    fetchVideos();
  };

  return (
    <Box mt="100px" bgImage="url('src/assets/icons/learningbg3.jpg')">
      <Box bgColor="#FFFFFF" px={["5%", "10%", "15%"]} py={["20px", "40px"]}>
        <Text
          color="#1FAD92"
          fontSize="16px"
          fontWeight="600"
          textTransform="uppercase"
        >
          E-learning Platform
        </Text>

        <Heading
          fontSize={["30px", "35px", "40px"]}
          fontWeight="600"
          lineHeight={["35px", "42px", "52px"]}
          color="#111111"
        >
          E-Learning
        </Heading>
        <Box mt="28px">
          <Text fontSize={["sm", "md", "lg"]} lineHeight="1.625rem" color="#000000">
            One of our major ways of combating infant and maternal mortality in Nigeria is by training community birth attendants. Due to the pandemic, we could no longer do physical training, therefore we had to create an E-learning platform where community birth attendants can access our training and also train several others like them using the free mobile tablet given to them. Below, you can access the 20 prerecorded videos which cuts across salient topics in delivery and childbirth. They were recorded in the birth attendant’s indigenous language for better comprehension.
            <br />
            We also extend our support by distributing HelpMum free mobile tablets to community health workers operating in remote rural areas. These HelpMum Free Mobile tablets are pre-loaded with the content from our E-learning platform, ensuring accessibility even without the need for Wi-Fi or internet connectivity.
            <br />
            The content of HelpMum E-learning Platform are used to save the lives of pregnant women during childbirth in remote rural areas in Nigeria. The content of the HelpMum E-learning Platform is primarily created in Yoruba, a major indigenous language in Nigeria. This ensures that community health workers and traditional birth attendants in remote rural areas can access and understand the information provided.
          </Text>
        </Box>

        <Flex alignItems="center" mt="29px" columnGap="16px">
          <Text
            fontWeight="600"
            fontSize="1rem"
            lineHeight="1.625rem"
            color="#000000"
          >
            Watch some of our E-learning Videos below
          </Text>
          <Center
            border="1px solid #11111133"
            rounded="50%"
            height="35px"
            width="36px"
          >
            <Icon as={IoArrowDownSharp} color="#111111" />
          </Center>
        </Flex>
      </Box>
      
      <Box
  display="flex" 
  justifyContent="center" 
  alignItems="center" 
  px={["5%", "10%", "15%"]}
  zIndex="100"
  position="relative"
  mt="20px" 
>
  <Center flexDir="column">
    <ScaleFade initialScale={0.9} in={true}>
      <Box
        as="iframe"
        borderRadius="12px"
        height="500px" 
        width="800px" 
        overflow="hidden"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        border="1px solid #11111133"
      />
<Button
            mt="20px"
            bgColor="#1FAD92"
            color="#FFF"
            fontWeight="700"
            fontSize="14px"
            height="50px"
            _hover={{
              bgColor: "#0D473C",
              color: "#FFF",
            }}
            as="a"
            href="https://www.youtube.com/channel/UC4greTp_wO0PXnseu6eaWqA"
          >
            SUBSCRIBE TO OUR YOUTUBE CHANNEL
    </Button>
    </ScaleFade>
  </Center>
</Box>
      <Box
        bgColor="#F2F2F2"
        pt={["30%", "20%", "10%"]}
        px={["5%", "10%", "15%"]}
        position="relative"
        zIndex="2"
        pb={["25%", "20%", "15%"]}
        bgImage="url('src/assets/icons/learningbg3.jpg')"
        opacity={0.9}
      >
        {videos.length > 0 && (
          <Center mt="20px" zIndex="100">
            <Flex zIndex="100" flexWrap="wrap" justifyContent="center">
              <Heading
                fontSize={["24px", "26px", "28px"]}
                fontWeight="600"
                lineHeight={["26px", "30px", "52px"]}
                textAlign={["center", "start"]}
              >
                Choose an E-learning video to watch
              </Heading>
              <Center mt="20px">
                <SimpleGrid
                  columns={[1, 2, 3]}
                  spacing="20px"
                  justifyContent="center"
                >
                  {videos.map((video) => (
                    <Box
                      backgroundColor="#FFF"
                      key={video.id}
                      m="10px"
                      rounded="12px"
                      onClick={() => setVideoId(video.snippet.resourceId.videoId)}
                      cursor="pointer"
                      boxShadow="md"
                      transition="transform 0.2s"
                      _hover={{ transform: "scale(1.05)" }}
                    >
                      <Image
                        src={video.snippet.thumbnails.high.url}
                        alt={video.snippet.title}
                        width="100%"
                        rounded="10px"
                      />
                      <Text
                        padding="20px 18px 40px 18px"
                        fontSize="14px"
                        mt="10px"
                        textAlign="start"
                      >
                        {video.snippet.title}
                      </Text>
                    </Box>
                  ))}
                </SimpleGrid>
              </Center>
            </Flex>
          </Center>
        )}
        <Center mt="20px" zIndex="100" position="relative">
          {/* Pagination can be added here if needed */}
        </Center>
        <Box>
          <Button
            backgroundColor="#FFFFFF"
            color="#1FAD92"
            mt="20px"
            border="1px solid #1FAD92"
            _hover={{
              backgroundColor: "#1FAD92",
              color: "#FFF",
            }}
            as="a"
            href="https://www.youtube.com/channel/UC4greTp_wO0PXnseu6eaWqA"
            leftIcon={<PiPlayFill color="#FF0000" />}
          >
            Watch all Impact Stories on YouTube
          </Button>
        </Box>
      </Box>
    </Box>
  );
};