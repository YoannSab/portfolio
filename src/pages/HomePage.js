import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Container,
  Stack,
  Image,
  SimpleGrid,
  Icon,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaDatabase, FaLaptopCode, FaRobot, FaServer } from 'react-icons/fa';
import projectsData from '../data/projectsData';
import resumeData from '../data/resumeData';
import ProjectCard from '../components/ProjectCard';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionFlex = motion(Flex);

const HomePage = () => {
  const featuredProjects = projectsData.filter(project => project.featured).slice(0, 3);
  const textColor = useColorModeValue('gray.600', 'gray.400');
  const boxBgColor = useColorModeValue('white', 'gray.700');

  return (
    <Box>
      {/* Hero Section */}
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        pt="120px"
        pb="120px"
      >
        <Container maxW="container.xl">
          <Flex
            direction={{ base: 'column', md: 'row' }}
            align="center"
            justify="space-between"
            gap={10}
          >
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              flex="1"
            >
              <MotionHeading
                as="h1"
                size="2xl"
                fontWeight="bold"
                lineHeight="1.2"
                mb={4}
                bgGradient="linear(to-r, brand.500, purple.500)"
                bgClip="text"
              >
                Yoann Sabatier Montanaro
              </MotionHeading>
              <MotionText
                fontSize="xl"
                mb={6}
                color={textColor}
              >
                Ingénieur IA & Développeur Web
              </MotionText>
              <MotionText
                fontSize="md"
                mb={6}
                color={textColor}
              >
                Passionné par l'application des technologies d'intelligence artificielle dans les applications et logiciels du quotidien, je combine expertise technique en développement et connaissances en IA pour créer des solutions innovantes et performantes.
              </MotionText>

              <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
                <Button
                  as={RouterLink}
                  to="/projects"
                  size="lg"
                  colorScheme="brand"
                  bg="brand.500"
                  _hover={{ bg: 'brand.600' }}
                  rightIcon={<FaArrowRight />}
                >
                  Voir mes projets
                </Button>
              </Stack>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              flex="1"
              display="flex"
              justifyContent="center"
            >
              <Box
                bg={boxBgColor}
                p={1}
                borderRadius="full"
                boxShadow="2xl"
                maxW="350px"
                overflow="hidden"
              >
                <Image
                  src="/images/me.jpg"
                  alt="Yoann Sabatier"
                  borderRadius="full"
                />
              </Box>
            </MotionBox>
          </Flex>
        </Container>
      </Box>

      {/* About Me Section - Added from AboutPage */}
      <Box pb="80px">
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={16}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Heading as="h2" size="xl" mb={6}>
                À propos de moi
              </Heading>
              <Text fontSize="lg" mb={8} color={textColor} lineHeight="tall">
                Ingénieur diplômé de l'INSA Lyon et titulaire d'une maîtrise de recherche de Polytechnique Montréal, je combine des compétences pointues en intelligence artificielle avec une solide expertise en développement web et logiciel.
              </Text>

              <Box mb={10}>
                <Heading as="h3" size="lg" mb={6}>
                  Mon parcours
                </Heading>
                <Text fontSize="lg" lineHeight="tall" mb={4} color={textColor}>
                  Mon parcours académique et professionnel m'a permis de développer une double expertise en IA et en développement web, avec une vision claire de comment ces deux domaines peuvent s'enrichir mutuellement.
                </Text>
                <Text fontSize="lg" lineHeight="tall" color={textColor}>
                  Aujourd'hui, je me spécialise dans l'intégration de solutions d'intelligence artificielle dans des applications web et logiciels, pour créer des expériences utilisateur intelligentes et des outils d'analyse de données performants.
                </Text>
              </Box>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Heading as="h3" size="lg" mb={6}>
                Mes centres d'intérêt
              </Heading>
              <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={8}>
                <FeatureBox
                  icon={FaRobot}
                  title="Intelligence Artificielle"
                  description="Conception et déploiement de modèles d'IA dans des applications concrètes"
                />
                <FeatureBox
                  icon={FaLaptopCode}
                  title="Développement Web"
                  description="Création d'applications web modernes et réactives"
                />
                <FeatureBox
                  icon={FaDatabase}
                  title="Science des Données"
                  description="Analyse et visualisation de données complexes"
                />
                <FeatureBox
                  icon={FaServer}
                  title="Intégration IA-Web"
                  description="Connexion des modèles d'IA avec des interfaces utilisateur intuitives"
                />
              </SimpleGrid>
            </MotionBox>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Projects Section */}
      <Box bg={useColorModeValue('gray.50', 'gray.900')} pb="80px">
        <Container maxW="container.xl">
          <VStack spacing={12}>
            <Box textAlign="center">
              <Heading as="h2" size="xl">
                Projets à la une
              </Heading>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} w="full">
              {featuredProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </SimpleGrid>

            <Button
              as={RouterLink}
              to="/projects"
              size="lg"
              variant="outline"
              colorScheme="brand"
              rightIcon={<FaArrowRight />}
            >
              Voir tous les projets
            </Button>
          </VStack>
        </Container>
      </Box>

      {/* Education Section - Added from AboutPage */}
      <Box pb="80px">
        <Container maxW="container.xl">
          <Box mb={8}>
            <Heading as="h2" size="xl" mb={8} textAlign="center">
              Parcours académique
            </Heading>
          </Box>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            {resumeData.education.map((edu, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                p={6}
                borderRadius="lg"
                boxShadow="md"
                bg={boxBgColor}
              >
                <Heading as="h3" size="md" mb={2}>
                  {edu.degree}
                </Heading>
                <Text fontWeight="bold" color="brand.500" mb={2}>
                  {edu.institution}
                </Text>
                <Text mb={2} fontSize="sm">
                  {edu.location} | {edu.period}
                </Text>
                <Text color={textColor}>
                  {edu.description}
                </Text>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* CTA Section
      <Box py={20} bg={useColorModeValue('gray.50', 'gray.900')}>
        <Container maxW="container.lg">
          <VStack
            spacing={8}
            p={10}
            bg={useColorModeValue('brand.50', 'gray.800')}
            borderRadius="xl"
            boxShadow="lg"
            textAlign="center"
          >
            <Heading size="lg">Intéressé par une collaboration ?</Heading>
            <Text fontSize="lg" maxW="md" mx="auto">
              Je suis à la recherche d'opportunités pour développer des solutions innovantes combinant IA et développement web. N'hésitez pas à me contacter pour discuter de vos projets.
            </Text>
            <Button
              as={RouterLink}
              to="/contact"
              size="lg"
              colorScheme="brand"
              bg="brand.500"
              _hover={{ bg: 'brand.600' }}
            >
              Prenons contact
            </Button>
          </VStack>
        </Container>
      </Box> */}
    </Box>
  );
};

const FeatureBox = ({ icon, title, description }) => {
  const featureBgColor = useColorModeValue('white', 'gray.700');
  const featureTextColor = useColorModeValue('gray.600', 'gray.400');
  
  return (
    <MotionFlex
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      direction="column"
      bg={featureBgColor}
      p={5}
      borderRadius="lg"
      boxShadow="md"
    >
      <Flex
        w={12}
        h={12}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'brand.500'}
        mb={4}
      >
        <Icon as={icon} w={6} h={6} />
      </Flex>
      <Text fontWeight={600} fontSize="lg" mb={2}>
        {title}
      </Text>
      <Text color={featureTextColor}>
        {description}
      </Text>
    </MotionFlex>
  );
};

export default HomePage;