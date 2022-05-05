import React from "react";
import {
  chakra,
  Box,
  Image,
  Flex,
  useColorModeValue,
  Link,
  SimpleGrid,
  
} from "@chakra-ui/react";
const Domaine=()=>{
    return(
        <div>
          <Box p={4}>
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        w="xs"
        bg={useColorModeValue("white", "gray.800")}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        mx="auto"
      >
        <Image
          w="full"
          h={56}
          fit="cover"
          src="https://img.freepik.com/vecteurs-libre/site-web-programmation-petits-developpeurs-pour-illustration-vectorielle-plane-plate-forme-internet-programmeurs-dessins-animes-pres-ecran-code-ouvert-script-developpement-logiciels-concept-technologie-numerique_74855-10168.jpg?w=2000"
          alt="avatar"
        />

        <Box py={5} textAlign="center">
          <Link
            display="block"
            fontSize="2xl"
            color={useColorModeValue("gray.800", "white")}
            fontWeight="bold"
          >
           Developpement Web
          </Link>
          
        </Box>
      </Box>
    </Flex>
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        w="xs"
        bg={useColorModeValue("white", "gray.800")}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        mx="auto"
      >
        <Image
          w="full"
          h={56}
          fit="cover"
          src="https://static.vecteezy.com/ti/vecteur-libre/t2/1829838-developpement-applications-mobiles-personnes-conception-et-peinture-applications-smartphone-concept-de-caractere-illustrationle-pour-web-page-de-destination-banniere-applications-mobiles-carte-livre-illustration-gratuit-vectoriel.jpg"
          alt="avatar"
        />

        <Box py={5} textAlign="center">
          <Link
            display="block"
            fontSize="2xl"
            color={useColorModeValue("gray.800", "white")}
            fontWeight="bold"
          >
          Developpement Mobile
          </Link>
          
        </Box>
      </Box>
    </Flex>
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        w="xs"
        bg={useColorModeValue("white", "gray.800")}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        mx="auto"
      >
        <Image
          w="full"
          h={56}
          fit="cover"
          src="https://cdni.iconscout.com/illustration/premium/thumb/data-science-isometric-1739195-1479083.png"
          alt="avatar"
        />

        <Box py={5} textAlign="center">
          <Link
            display="block"
            fontSize="2xl"
            color={useColorModeValue("gray.800", "white")}
            fontWeight="bold"
          >
           Data Scientist
          </Link>
          
        </Box>
      </Box>
    </Flex>
    </SimpleGrid>
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
    <Flex bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        w="xs"
        bg={useColorModeValue("white", "gray.800")}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        mx="auto"
      >
        <Image
          w="full"
          h={56}
          fit="cover"
          src="https://img.freepik.com/vecteurs-libre/specialistes-devops-travaillent-collaboration-programmeurs-hommes-affaires-chez-huge-laptop-illustration-plate-dessin-anime_87771-8187.jpg?size=626&ext=jpg"
          alt="avatar"
        />

        <Box py={5} textAlign="center">
          <Link
            display="block"
            fontSize="2xl"
            color={useColorModeValue("gray.800", "white")}
            fontWeight="bold"
          >
           DevOps
          </Link>
          
        </Box>
      </Box>
    </Flex>
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        w="xs"
        bg={useColorModeValue("white", "gray.800")}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        mx="auto"
      >
        <Image
          w="full"
          h={56}
          fit="cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQshqCLKPQXGGMDgYzA_E_9KYFgcfPxRm_TfQ&usqp=CAU"
          alt="avatar"
        />

        <Box py={5} textAlign="center">
          <Link
            display="block"
            fontSize="2xl"
            color={useColorModeValue("gray.800", "white")}
            fontWeight="bold"
          >
           Cyber-sécurité
          </Link>
          
        </Box>
      </Box>
    </Flex>
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        w="xs"
        bg={useColorModeValue("white", "gray.800")}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        mx="auto"
      >
        <Image
          w="full"
          h={56}
          fit="cover"
          src="https://img.freepik.com/vecteurs-libre/minuscules-developpeurs-codent-jeux-video-ligne-processus-ecriture-code-pour-logiciel-par-personnes-illustration-vectorielle-plane-developpement-concept-gamification-pour-banniere-conception-site-web-page-web-destination_179970-7552.jpg"
          alt="avatar"
        />

        <Box py={5} textAlign="center">
          <Link
            display="block"
            fontSize="2xl"
            color={useColorModeValue("gray.800", "white")}
            fontWeight="bold"
          >
           Developpement de jeux vidéo
          </Link>
          
        </Box>
      </Box>
    </Flex>
    
    </SimpleGrid>
    </Box>
        </div>
         );
}

export default Domaine